import { z } from 'zod'

export const cnpjSchema = z.string().regex(/^\d{14}$/, 'CNPJ must be 14 digits')

export const nfeKeySchema = z.string().regex(/^\d{44}$/, 'NFE key must be 44 digits')

export const currencySchema = z.union([
  z.string().transform(val => parseFloat(val) || 0),
  z.number()
]).pipe(z.number().min(0))

export const integerSchema = z.union([
  z.string().transform(val => parseInt(val) || 0),
  z.number()
]).pipe(z.number().int())

export const dateSchema = z.string().datetime().or(
  z.string().transform(val => {
    const date = new Date(val)
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${val}`)
    }
    return date.toISOString()
  })
)

export const nfeWebhookBodySchema = z.object({
  nome_emitente: z.string().min(1),
  documento_emitente: cnpjSchema,
  chave_nfe: nfeKeySchema,
  valor_total: currencySchema.transform(val => val.toString()),
  data_emissao: dateSchema,
  situacao: z.string(),
  nfe_completa: z.boolean(),
})

export const nfeProcessingSchema = z.object({
  chaveAcesso: nfeKeySchema,
  ide: z.object({
    natOp: z.string(),
    serie: integerSchema,
    nNF: integerSchema,
    dhEmi: dateSchema,
    dhSaiEnt: dateSchema.optional(),
    tpNF: integerSchema.pipe(z.number().int().min(0).max(1)),
    idDest: integerSchema.pipe(z.number().int().min(1).max(3)),
    cMunFG: integerSchema,
    finNFe: integerSchema.pipe(z.number().int().min(1).max(4)),
    indFinal: integerSchema.pipe(z.number().int().min(0).max(1)),
    indPres: integerSchema.pipe(z.number().int().min(0).max(9)),
    verProc: z.string().optional(),
  }),
  emit: z.object({
    CNPJ: cnpjSchema.optional(),
    CPF: z.string().optional(),
    xNome: z.string(),
    xFant: z.string().optional(),
    enderEmit: z.object({
      xLgr: z.string(),
      nro: z.string(),
      xCpl: z.string().optional(),
      xBairro: z.string(),
      cMun: integerSchema.optional(),
      xMun: z.string(),
      UF: z.string().length(2),
      CEP: z.string(),
      fone: z.string().optional(),
    }),
    IE: z.string().optional(),
    IEST: z.string().optional(),
    IM: z.string().optional(),
    CNAE: z.string().optional(),
    CRT: integerSchema,
  }),
  dest: z.object({
    CNPJ: cnpjSchema.optional(),
    CPF: z.string().optional(),
    xNome: z.string(),
    enderDest: z.object({
      xLgr: z.string(),
      nro: z.string(),
      xCpl: z.string().optional(),
      xBairro: z.string(),
      cMun: integerSchema.optional(),
      xMun: z.string(),
      UF: z.string().length(2),
      CEP: z.string(),
      fone: z.string().optional(),
    }).optional(),
    IE: z.string().optional(),
    email: z.string().optional(),
  }).optional(),
  det: z.array(z.object({
    nItem: integerSchema,
    prod: z.object({
      cProd: z.string(),
      cEAN: z.string().optional(),
      xProd: z.string(),
      NCM: z.string(),
      CEST: z.string().optional(),
      CFOP: z.string(),
      uCom: z.string(),
      qCom: currencySchema.optional(),
      vUnCom: currencySchema.optional(),
      vProd: currencySchema.optional(),
      uTrib: z.string(),
      qTrib: currencySchema.optional(),
      vUnTrib: currencySchema.optional(),
      vFrete: currencySchema.optional(),
      vSeg: currencySchema.optional(),
      vDesc: currencySchema.optional(),
      vOutro: currencySchema.optional(),
      indTot: integerSchema.optional(),
      xPed: z.string().optional(),
      nItemPed: integerSchema.optional(),
      nFCI: z.string().optional(),
    }),
    imposto: z.any().optional(),
    infAdProd: z.string().optional(),
  })),
  total: z.object({
    ICMSTot: z.object({
      vBC: currencySchema.optional(),
      vICMS: currencySchema.optional(),
      vICMSDeson: currencySchema.optional(),
      vBCST: currencySchema.optional(),
      vST: currencySchema.optional(),
      vFCP: currencySchema.optional(),
      vFCPST: currencySchema.optional(),
      vFCPSTRet: currencySchema.optional(),
      vFCPUFDest: currencySchema.optional(),
      vICMSUFDest: currencySchema.optional(),
      vICMSUFRemet: currencySchema.optional(),
      vProd: currencySchema.optional(),
      vFrete: currencySchema.optional(),
      vSeg: currencySchema.optional(),
      vDesc: currencySchema.optional(),
      vII: currencySchema.optional(),
      vIPI: currencySchema.optional(),
      vIPIDevol: currencySchema.optional(),
      vPIS: currencySchema.optional(),
      vCOFINS: currencySchema.optional(),
      vOutro: currencySchema.optional(),
      vNF: currencySchema.optional(),
      vTotTrib: currencySchema.optional(),
    }),
  }),
})

export type NFEWebhookBody = z.infer<typeof nfeWebhookBodySchema>
export type ParsedNFe = z.infer<typeof nfeProcessingSchema>
