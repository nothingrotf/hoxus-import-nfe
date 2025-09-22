import { db } from '@/database/connect'
import { schema } from '@/database/schema'
import { env } from '@/env'
import { getInvoiceXML } from '@/external/focus/get-invoice-xml'
import { setManifest } from '@/external/focus/manifest'
import { NFeMapper } from '@/lib/nfe/nfe-mapper'
import { NFeValidator } from '@/lib/nfe/nfe-validator'
import { NFXmlParser } from '@/lib/nfe/xml-parser'
import { Elysia, t } from 'elysia'

export const focusApiWebhook = new Elysia({ prefix: '/webhooks' })
  .post('/focus/notes/:cnpj', async ({ body, params, headers }) => {
    if (headers.authorization !== env.AUTH_TOKEN) {
      throw new Error('Unauthorized')
    }
    
    try {
      const { cnpj } = params
      const { chave_nfe } = body

      const company = await db.query.companies.findFirst({
        where(fieds, { eq }) {
          return eq(fieds.cnpj, cnpj)
        }
      })

      if (!company) {
        throw new Error('Company not found')
      }
      
      console.log('Received FocusAPI notes:', body)

      await setManifest(chave_nfe, company.focus_production_token)
      console.log('Manifest set successfully')

      if (!body.nfe_completa) {
        console.log('NFe incompleta, ignorando...')
        return {
          success: true,
          message: 'Incomplete NFe, ignored'
        }
      }

      const xmlContent = await getInvoiceXML(chave_nfe, company.focus_production_token)

      if (!xmlContent) {
        throw new Error('Failed to retrieve XML')
      }

      const xml = await NFXmlParser.parseXml(xmlContent)
      const validation = NFeValidator.validate(xml)

      if (!validation.isValid) {
        console.log('NFe validation errors:', validation.errors)
        throw new Error('Invalid NFe XML')
      }

      const duplicateCheck = await NFeMapper.checkDuplicate(xml.chaveAcesso)

      if (duplicateCheck.isPartial && duplicateCheck.nfeId) {
        console.log('NFe parcial detectada. Completando dados faltantes para NFe:', duplicateCheck.nfeId)
        await NFeMapper.saveMissingData(duplicateCheck.nfeId, xml)
      } else if (duplicateCheck.isDuplicate && !duplicateCheck.hasXml && duplicateCheck.nfeId && xmlContent) {
        console.log('NFe duplicada sem XML. Salvando apenas XML para NFe:', duplicateCheck.nfeId);
        await NFeMapper.saveXmlOnly(
          duplicateCheck.nfeId, 
          company.id, 
          xmlContent,
          xml.chaveAcesso,
          xml.ide.nNF,
          xml.ide.serie
        );
      } else {
        console.log('NFe nova. Salvando completa no banco de dados...');
        await NFeMapper.saveToDatabase(xml, company.id, xmlContent);
      }
      
      return {
        success: true,
        message: 'Notes received successfully'
      }
    } catch (error) {
      console.error('Error processing FocusAPI notes:', error)
      return {
        success: false,
        message: 'Failed to process notes',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }, {
    body: t.Object({
      nome_emitente: t.String(),
      documento_emitente: t.String(),
      chave_nfe: t.String(),
      valor_total: t.String(),
      data_emissao: t.String(),
      situacao: t.String(),
      nfe_completa: t.Boolean(),
    }),
    params: t.Object({ cnpj: t.String() }),
    headers: t.Object({
      authorization: t.String()
    })
  })
