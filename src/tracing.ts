import { opentelemetry } from '@elysiajs/opentelemetry'
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { env } from './env'


export const tracing = opentelemetry({
  instrumentations: [new PgInstrumentation()],
  serviceName: 'hoxus-nfe-importer',
  spanProcessors: [
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url: env.OTEL_TRACE_EXPORTER_URL
      })
    )
  ]
})
