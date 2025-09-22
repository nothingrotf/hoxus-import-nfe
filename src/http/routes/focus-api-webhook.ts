import { db } from '@/database/connect'
import { schema } from '@/database/schema'
import { env } from '@/env'
import { NFEProcessingService } from '@/services/nfe-processing.service'
import { NFEProcessingError } from '@/lib/errors/nfe-errors'
import { nfeWebhookBodySchema } from '@/lib/validations/nfe-schemas'
import { Elysia, t } from 'elysia'
import { randomUUID } from 'crypto'

const nfeProcessingService = new NFEProcessingService()

export const focusApiWebhook = new Elysia({ prefix: '/webhooks' })
  .post('/focus/notes/:cnpj', async ({ body, params, headers }) => {
    const correlationId = randomUUID()

    if (headers.authorization !== env.AUTH_TOKEN) {
      console.error(`[${correlationId}] Unauthorized access attempt`)
      throw new Error('Unauthorized')
    }

    try {
      const { cnpj } = params

      // Validate request body with Zod
      const validatedBody = nfeWebhookBodySchema.parse(body)

      console.log(`[${correlationId}] Received FocusAPI notes:`, validatedBody)

      const company = await db.query.companies.findFirst({
        where(fields, { eq }) {
          return eq(fields.cnpj, cnpj)
        }
      })

      if (!company) {
        console.error(`[${correlationId}] Company not found for CNPJ: ${cnpj}`)
        throw new Error('Company not found')
      }

      const result = await nfeProcessingService.processWebhook(validatedBody, company, correlationId)

      console.log(`[${correlationId}] Processing completed successfully:`, result)
      return result

    } catch (error) {
      console.error(`[${correlationId}] Error processing FocusAPI webhook:`, error)

      if (error instanceof NFEProcessingError) {
        return {
          success: false,
          message: error.message,
          code: error.code,
          correlationId: error.correlationId
        }
      }

      return {
        success: false,
        message: 'Failed to process notes',
        error: error instanceof Error ? error.message : 'Unknown error',
        correlationId
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
