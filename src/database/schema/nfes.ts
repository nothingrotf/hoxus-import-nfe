import { pgTable as table, text, uuid, integer, timestamp } from 'drizzle-orm/pg-core'
import { companies } from './companies'

export const nfes = table('nfe', {
  id: uuid().defaultRandom().primaryKey(),
  company_id: uuid().references(() => companies.id),
  chave_acesso: text(),
  codigo_municipio_fato_gerador: integer(),
  consumidor_final: integer(),
  data_emissao: text(),
  data_entrada_saida: text(),
  finalidade_emissao: integer(),
  indicador_intermediario: integer(),
  indicador_presenca: integer(),
  local_destino: integer(),
  natureza_operacao: text(),
  numero: integer(),
  protocolo_autorizacao: text(),
  serie: integer(),
  status: text(),
  tipo_nota_fiscal: integer(),
  versao: text(),
  created_at: timestamp({ mode: 'string', withTimezone: true }).defaultNow(),
  updated_at: timestamp({ mode: 'string', withTimezone: true }).defaultNow().$onUpdateFn(() => new Date().toISOString()),
})
