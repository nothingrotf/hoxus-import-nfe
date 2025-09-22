import { pgTable as table, text, uuid } from 'drizzle-orm/pg-core'

export const companies = table('companies', {
  id: uuid().notNull(),
  cnpj: text().notNull(),
  focus_production_token: text().notNull()
})
