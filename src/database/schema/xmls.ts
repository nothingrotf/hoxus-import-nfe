import { pgTable as table, text, uuid, integer, timestamp } from 'drizzle-orm/pg-core'
import { companies } from './companies'

export const xml = table('nfe_xml_storage', {
  id: uuid().defaultRandom().primaryKey(),
  nfeId: uuid(),
  companyId: uuid().references(() => companies.id),
  xmlContent: text(),
  fileName: text(),
  fileSize: integer(),
  uploadDate: timestamp({ mode: 'string', withTimezone: true }),
  createdAt: timestamp({ mode: 'string', withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ mode: 'string', withTimezone: true }).defaultNow().$onUpdateFn(() => new Date().toISOString()),
})
