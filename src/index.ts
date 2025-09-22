import { Elysia } from 'elysia'
import { focusApiWebhook } from './http/routes/focus-api-webhook'
import openapi from '@elysiajs/openapi'
import { env } from './env'
import { tracing } from './tracing'

export const server = new Elysia()
  .use(tracing)
  .use(focusApiWebhook)
  .use(openapi())
  .get('/health', () => {
    return {
      message: 'Hoxus API Server',
      status: 'running',
    }
  })

server.listen(env.PORT)

console.log(`🚀 Server running on http://localhost:${env.PORT}`)

