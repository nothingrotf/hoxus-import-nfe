import { pgTable as table, text, uuid, integer, timestamp, decimal, boolean } from 'drizzle-orm/pg-core'
import { companies } from './companies'
import { nfes } from './nfes'

// NFE Emitente
export const nfeEmitente = table('nfe_emitente', {
  id: uuid().defaultRandom().primaryKey(),
  nfeId: uuid('nfe_id').references(() => nfes.id),
  companyId: uuid('company_id').references(() => companies.id),
  cnpj: text(),
  cpf: text(),
  razaoSocial: text('razao_social'),
  nomeFantasia: text('nome_fantasia'),
  logradouro: text(),
  numero: text(),
  complemento: text(),
  bairro: text(),
  codigoMunicipio: integer('codigo_municipio'),
  municipio: text(),
  uf: text(),
  cep: text(),
  telefone: text(),
  inscricaoEstadual: text('inscricao_estadual'),
  inscricaoEstadualSt: text('inscricao_estadual_st'),
  inscricaoMunicipal: text('inscricao_municipal'),
  cnaeFiscal: text('cnae_fiscal'),
  codigoRegimeTributario: integer('codigo_regime_tributario')
})

// NFE Destinatario
export const nfeDestinatario = table('nfe_destinatario', {
  id: uuid().defaultRandom().primaryKey(),
  nfeId: uuid('nfe_id').references(() => nfes.id),
  companyId: uuid('company_id').references(() => companies.id),
  cnpj: text(),
  cpf: text(),
  identificacaoEstrangeiro: text('identificacao_estrangeiro'),
  razaoSocial: text('razao_social'),
  logradouro: text(),
  numero: text(),
  complemento: text(),
  bairro: text(),
  codigoMunicipio: integer('codigo_municipio'),
  municipio: text(),
  uf: text(),
  cep: text(),
  codigoPais: integer('codigo_pais'),
  nomePais: text('nome_pais'),
  telefone: text(),
  inscricaoEstadual: text('inscricao_estadual'),
  inscricaoSuframa: text('inscricao_suframa'),
  inscricaoMunicipal: text('inscricao_municipal'),
  email: text()
})

// NFE Itens
export const nfeItens = table('nfe_itens', {
  id: uuid().defaultRandom().primaryKey(),
  nfeId: uuid('nfe_id').references(() => nfes.id),
  numeroItem: integer('numero_item'),
  codigoProduto: text('codigo_produto'),
  codigoBarrasGtin: text('codigo_barras_gtin'),
  descricao: text(),
  codigoNcm: text('codigo_ncm'),
  cest: text(),
  cfop: text(),
  unidadeComercial: text('unidade_comercial'),
  quantidadeComercial: decimal('quantidade_comercial'),
  valorUnitarioComercial: decimal('valor_unitario_comercial'),
  valorBruto: decimal('valor_bruto'),
  unidadeTributavel: text('unidade_tributavel'),
  quantidadeTributavel: decimal('quantidade_tributavel'),
  valorUnitarioTributavel: decimal('valor_unitario_tributavel'),
  valorFrete: decimal('valor_frete'),
  valorSeguro: decimal('valor_seguro'),
  valorDesconto: decimal('valor_desconto'),
  valorOutrasDespesas: decimal('valor_outras_despesas'),
  compoeValorTotal: integer('compoe_valor_total'),
  numeroPedido: text('numero_pedido'),
  numeroItemPedido: integer('numero_item_pedido'),
  numeroFci: text('numero_fci'),
  informacoesAdicionais: text('informacoes_adicionais'),
  valorTotalTributos: decimal('valor_total_tributos')
})

// NFE Totais
export const nfeTotais = table('nfe_totais', {
  id: uuid().defaultRandom().primaryKey(),
  nfeId: uuid('nfe_id').references(() => nfes.id),
  icmsBaseCalculo: decimal('icms_base_calculo'),
  icmsValor: decimal('icms_valor'),
  icmsValorDesonerado: decimal('icms_valor_desonerado'),
  icmsBaseCalculoSt: decimal('icms_base_calculo_st'),
  icmsValorSt: decimal('icms_valor_st'),
  fcpValor: decimal('fcp_valor'),
  fcpValorSt: decimal('fcp_valor_st'),
  fcpValorRetidoSt: decimal('fcp_valor_retido_st'),
  fcpValorUfDestino: decimal('fcp_valor_uf_destino'),
  icmsValorUfDestino: decimal('icms_valor_uf_destino'),
  icmsValorUfRemetente: decimal('icms_valor_uf_remetente'),
  valorProdutos: decimal('valor_produtos'),
  valorFrete: decimal('valor_frete'),
  valorSeguro: decimal('valor_seguro'),
  valorDesconto: decimal('valor_desconto'),
  valorTotalIi: decimal('valor_total_ii'),
  valorIpi: decimal('valor_ipi'),
  valorIpiDevolvido: decimal('valor_ipi_devolvido'),
  valorPis: decimal('valor_pis'),
  valorCofins: decimal('valor_cofins'),
  valorOutrasDespesas: decimal('valor_outras_despesas'),
  valorTotal: decimal('valor_total'),
  valorTotalTributos: decimal('valor_total_tributos')
})

// NFE Impostos ICMS
export const nfeImpostosIcms = table('nfe_impostos_icms', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  origem: integer(),
  situacaoTributaria: text('situacao_tributaria'),
  modalidadeBaseCalculo: integer('modalidade_base_calculo'),
  valorBaseCalculo: decimal('valor_base_calculo'),
  percentualReducaoBaseCalculo: decimal('percentual_reducao_base_calculo'),
  codigoBeneficioFiscal: text('codigo_beneficio_fiscal'),
  aliquota: decimal(),
  aliquotaFinalConsumidor: decimal('aliquota_final_consumidor'),
  valor: decimal(),
  valorProprio: decimal('valor_proprio'),
  valorDesonerado: decimal('valor_desonerado'),
  valorOperacao: decimal('valor_operacao'),
  percentualDiferimento: decimal('percentual_diferimento'),
  valorDiferido: decimal('valor_diferido'),
  motivoDesoneracao: integer('motivo_desoneracao'),
  valorRetencao: decimal('valor_retencao'),
  aliquotaRetencao: decimal('aliquota_retencao'),
  quantidadeTributada: decimal('quantidade_tributada'),
  quantidadeTributadaRetencao: decimal('quantidade_tributada_retencao'),
  aliquotaCreditoSimples: decimal('aliquota_credito_simples'),
  valorCreditoSimples: decimal('valor_credito_simples')
})

// NFE Impostos IPI
export const nfeImpostosIpi = table('nfe_impostos_ipi', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  situacaoTributaria: text('situacao_tributaria'),
  valorBaseCalculo: decimal('valor_base_calculo'),
  aliquota: decimal(),
  quantidadeTotal: decimal('quantidade_total'),
  valorUnidade: decimal('valor_unidade'),
  valor: decimal(),
  cnpjProdutor: text('cnpj_produtor'),
  codigoSelo: text('codigo_selo'),
  quantidadeSelo: integer('quantidade_selo'),
  codigoEnquadramento: text('codigo_enquadramento')
})

// NFE Impostos PIS
export const nfeImpostosPis = table('nfe_impostos_pis', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  situacaoTributaria: text('situacao_tributaria'),
  valorBaseCalculo: decimal('valor_base_calculo'),
  aliquota: decimal(),
  quantidadeVendida: decimal('quantidade_vendida'),
  aliquotaReais: decimal('aliquota_reais'),
  valor: decimal()
})

// NFE Impostos COFINS
export const nfeImpostosCofins = table('nfe_impostos_cofins', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  situacaoTributaria: text('situacao_tributaria'),
  valorBaseCalculo: decimal('valor_base_calculo'),
  aliquota: decimal(),
  quantidadeVendida: decimal('quantidade_vendida'),
  aliquotaReais: decimal('aliquota_reais'),
  valor: decimal()
})

// NFE Impostos II
export const nfeImpostosIi = table('nfe_impostos_ii', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  valorBaseCalculo: decimal('valor_base_calculo'),
  valorDespesasAduaneiras: decimal('valor_despesas_aduaneiras'),
  valor: decimal(),
  valorIof: decimal('valor_iof')
})

// NFE Impostos ISSQN
export const nfeImpostosIssqn = table('nfe_impostos_issqn', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  valorBaseCalculo: decimal('valor_base_calculo'),
  aliquota: decimal(),
  valor: decimal(),
  codigoMunicipioFatoGerador: integer('codigo_municipio_fato_gerador'),
  codigoListaServicos: text('codigo_lista_servicos'),
  situacaoTributaria: integer('situacao_tributaria')
})

// NFE ICMS UF Destino
export const nfeIcmsUfDestino = table('nfe_icms_uf_destino', {
  id: uuid().defaultRandom().primaryKey(),
  itemId: uuid('item_id').references(() => nfeItens.id),
  valorBaseCalculo: decimal('valor_base_calculo'),
  valorBaseCalculoFcp: decimal('valor_base_calculo_fcp'),
  percentualFcp: decimal('percentual_fcp'),
  aliquotaInterna: decimal('aliquota_interna'),
  aliquotaInterestadual: decimal('aliquota_interestadual'),
  percentualPartilha: decimal('percentual_partilha'),
  valorFcp: decimal('valor_fcp'),
  valorUfDestino: decimal('valor_uf_destino'),
  valorUfRemetente: decimal('valor_uf_remetente')
})
