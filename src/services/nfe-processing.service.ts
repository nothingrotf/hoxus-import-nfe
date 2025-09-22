import { db } from '@/database/connect'
import { getInvoiceXML } from '@/external/focus/get-invoice-xml'
import { setManifest } from '@/external/focus/manifest'
import { NFeValidator } from '@/lib/nfe/nfe-validator'
import { NFXmlParser } from '@/lib/nfe/xml-parser'
import { NFEProcessingError, ValidationError, ExternalAPIError } from '@/lib/errors/nfe-errors'
import { nfeProcessingSchema, type ParsedNFe, type NFEWebhookBody } from '@/lib/validations/nfe-schemas'
import { NFERepository } from '@/repositories/nfe.repository'
import type { Company } from '@/types/company'

export class NFEProcessingService {
  private nfeRepository: NFERepository

  constructor() {
    this.nfeRepository = new NFERepository()
  }

  async processWebhook(
    body: NFEWebhookBody,
    company: Company,
    correlationId: string
  ): Promise<{ success: boolean; message: string; nfeId?: string }> {
    const { chave_nfe } = body

    try {
      console.log(`[${correlationId}] Processing NFE: ${chave_nfe}`)

      // Set manifest first
      await this.setNFEManifest(chave_nfe, company.focus_production_token, correlationId)

      if (!body.nfe_completa) {
        console.log(`[${correlationId}] NFE incomplete, ignoring...`)
        return {
          success: true,
          message: 'Incomplete NFe, ignored'
        }
      }

      // Get and validate XML
      const xmlContent = await this.fetchXMLContent(chave_nfe, company.focus_production_token, correlationId)
      const parsedNFE = await this.parseAndValidateXML(xmlContent, correlationId)

      // Process NFE based on duplicate status
      const result = await this.processNFEData(parsedNFE, company.id, xmlContent, correlationId)

      return {
        success: true,
        message: 'Notes received successfully',
        nfeId: result.id
      }

    } catch (error) {
      console.error(`[${correlationId}] Error processing NFE:`, error)

      if (error instanceof NFEProcessingError) {
        throw error
      }

      throw new NFEProcessingError(
        'Failed to process NFE',
        'PROCESSING_ERROR',
        correlationId,
        error instanceof Error ? error : undefined
      )
    }
  }

  private async setNFEManifest(chaveNfe: string, token: string, correlationId: string): Promise<void> {
    try {
      await setManifest(chaveNfe, token)
      console.log(`[${correlationId}] Manifest set successfully`)
    } catch (error) {
      throw new ExternalAPIError(
        'Failed to set manifest',
        correlationId,
        error instanceof Error ? error : undefined
      )
    }
  }

  private async fetchXMLContent(chaveNfe: string, token: string, correlationId: string): Promise<string> {
    try {
      const xmlContent = await getInvoiceXML(chaveNfe, token)

      if (!xmlContent) {
        throw new ExternalAPIError('Failed to retrieve XML', correlationId)
      }

      return xmlContent
    } catch (error) {
      throw new ExternalAPIError(
        'Failed to fetch XML from Focus API',
        correlationId,
        error instanceof Error ? error : undefined
      )
    }
  }

  private async parseAndValidateXML(xmlContent: string, correlationId: string): Promise<ParsedNFe> {
    try {
      // Parse XML
      const parsedXML = await NFXmlParser.parseXml(xmlContent)

      // Validate structure
      const validation = NFeValidator.validate(parsedXML)
      if (!validation.isValid) {
        console.log(`[${correlationId}] NFE validation errors:`, validation.errors)
        throw new ValidationError('Invalid NFe XML structure', correlationId)
      }

      // Validate with Zod schema
      const validatedNFE = nfeProcessingSchema.parse(parsedXML)

      return validatedNFE
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error
      }

      throw new ValidationError(
        'Failed to parse or validate XML',
        correlationId,
        error instanceof Error ? error : undefined
      )
    }
  }

  private async processNFEData(
    nfe: ParsedNFe,
    companyId: string,
    xmlContent: string,
    correlationId: string
  ): Promise<{ id: string; status: string }> {
    try {
      const duplicateCheck = await this.nfeRepository.checkDuplicate(nfe.chaveAcesso)

      if (duplicateCheck.isPartial && duplicateCheck.nfeId) {
        console.log(`[${correlationId}] Partial NFE detected. Completing data for NFE: ${duplicateCheck.nfeId}`)
        await this.nfeRepository.saveMissingData(duplicateCheck.nfeId, nfe)

        if (!duplicateCheck.hasXml) {
          await this.nfeRepository.saveXmlOnly(
            duplicateCheck.nfeId,
            companyId,
            xmlContent,
            nfe.chaveAcesso,
            nfe.ide.nNF.toString(),
            nfe.ide.serie.toString()
          )
        }

        return { id: duplicateCheck.nfeId, status: 'completed_partial' }
      }

      if (duplicateCheck.isDuplicate && !duplicateCheck.hasXml && duplicateCheck.nfeId) {
        console.log(`[${correlationId}] Duplicate NFE without XML. Saving XML only for NFE: ${duplicateCheck.nfeId}`)
        await this.nfeRepository.saveXmlOnly(
          duplicateCheck.nfeId,
          companyId,
          xmlContent,
          nfe.chaveAcesso,
          nfe.ide.nNF.toString(),
          nfe.ide.serie.toString()
        )

        return { id: duplicateCheck.nfeId, status: 'xml_added' }
      }

      if (duplicateCheck.isDuplicate) {
        console.log(`[${correlationId}] NFE already exists and is complete: ${duplicateCheck.nfeId}`)
        return { id: duplicateCheck.nfeId!, status: 'already_exists' }
      }

      // Save new NFE
      console.log(`[${correlationId}] New NFE. Saving complete data to database...`)
      const result = await this.nfeRepository.saveToDatabase(nfe, companyId, xmlContent)

      return result

    } catch (error) {
      throw new NFEProcessingError(
        'Failed to process NFE data',
        'DATA_PROCESSING_ERROR',
        correlationId,
        error instanceof Error ? error : undefined
      )
    }
  }
}