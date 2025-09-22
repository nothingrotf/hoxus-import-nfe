import { db } from '@/database/connect'
import { schema } from '@/database/schema'
import { eq, inArray } from 'drizzle-orm'
import type { ParsedNFe } from '@/lib/validations/nfe-schemas'

export interface DuplicateCheckResult {
  isDuplicate: boolean
  isPartial: boolean
  nfeId?: string
  hasXml?: boolean
}

export class NFERepository {
  async saveToDatabase(nfe: ParsedNFe, companyId: string, xmlContent?: string): Promise<{ id: string; status: string }> {
    return await db.transaction(async (tx) => {
      console.log('Starting NFE transaction for:', nfe.chaveAcesso)

      // Save main NFE
      const nfeData = await this.saveMainNFE(tx, nfe, companyId)
      const nfeId = nfeData.id

      // Save related data in parallel where possible
      await Promise.all([
        this.saveEmitente(tx, nfeId, nfe.emit, companyId),
        nfe.dest ? this.saveDestinatario(tx, nfeId, nfe.dest, companyId) : Promise.resolve(),
        this.saveTotais(tx, nfeId, nfe.total),
        xmlContent ? this.saveXmlContent(tx, nfeId, companyId, xmlContent, nfe) : Promise.resolve()
      ])

      // Save items with their taxes
      await this.saveItemsWithTaxes(tx, nfeId, nfe.det)

      console.log('NFE transaction completed successfully')
      return { id: nfeId, status: 'imported_new' }
    })
  }

  private async saveMainNFE(tx: any, nfe: ParsedNFe, companyId: string) {
    const nfeInsertData = {
      company_id: companyId,
      chave_acesso: nfe.chaveAcesso,
      natureza_operacao: nfe.ide.natOp,
      serie: nfe.ide.serie,
      numero: nfe.ide.nNF,
      data_emissao: nfe.ide.dhEmi,
      data_entrada_saida: nfe.ide.dhSaiEnt || null,
      tipo_nota_fiscal: nfe.ide.tpNF,
      local_destino: nfe.ide.idDest,
      codigo_municipio_fato_gerador: nfe.ide.cMunFG,
      finalidade_emissao: nfe.ide.finNFe,
      consumidor_final: nfe.ide.indFinal,
      indicador_presenca: nfe.ide.indPres,
      indicador_intermediario: 0,
      versao: nfe.ide.verProc?.substring(0, 3) || '4.0',
      status: 'imported'
    }

    const [nfeData] = await tx.insert(schema.nfes).values(nfeInsertData).returning()
    return nfeData
  }

  private async saveXmlContent(tx: any, nfeId: string, companyId: string, xmlContent: string, nfe: ParsedNFe) {
    const fileName = `NFe_${nfe.ide.nNF}_${nfe.ide.serie}_${nfe.chaveAcesso}.xml`

    await tx.insert(schema.xml).values({
      nfeId: nfeId,
      companyId: companyId,
      xmlContent: xmlContent,
      fileName: fileName,
      fileSize: new Blob([xmlContent]).size,
      uploadDate: new Date().toISOString()
    })
  }

  private async saveItemsWithTaxes(tx: any, nfeId: string, items: ParsedNFe['det']) {
    for (const item of items) {
      const itemData = await this.saveItem(tx, nfeId, item)

      if (item.imposto) {
        await this.saveItemTaxes(tx, itemData.id, item.imposto)
      }
    }
  }

  private async saveItem(tx: any, nfeId: string, item: ParsedNFe['det'][0]) {
    const [itemData] = await tx.insert(schema.nfeItens).values({
      nfeId: nfeId,
      numeroItem: item.nItem,
      codigoProduto: item.prod.cProd,
      codigoBarrasGtin: item.prod.cEAN,
      descricao: item.prod.xProd,
      codigoNcm: item.prod.NCM,
      cest: item.prod.CEST,
      cfop: item.prod.CFOP,
      unidadeComercial: item.prod.uCom,
      quantidadeComercial: item.prod.qCom?.toString(),
      valorUnitarioComercial: item.prod.vUnCom?.toString(),
      valorBruto: item.prod.vProd?.toString(),
      unidadeTributavel: item.prod.uTrib,
      quantidadeTributavel: item.prod.qTrib?.toString(),
      valorUnitarioTributavel: item.prod.vUnTrib?.toString(),
      valorFrete: item.prod.vFrete?.toString() || '0',
      valorSeguro: item.prod.vSeg?.toString() || '0',
      valorDesconto: item.prod.vDesc?.toString() || '0',
      valorOutrasDespesas: item.prod.vOutro?.toString() || '0',
      compoeValorTotal: item.prod.indTot || 1,
      numeroPedido: item.prod.xPed,
      numeroItemPedido: item.prod.nItemPed,
      numeroFci: item.prod.nFCI,
      informacoesAdicionais: item.infAdProd,
      valorTotalTributos: item.imposto?.vTotTrib?.toString()
    }).returning()

    return itemData
  }

  private async saveEmitente(tx: any, nfeId: string, emit: ParsedNFe['emit'], companyId?: string) {
    await tx.insert(schema.nfeEmitente).values({
      nfeId: nfeId,
      companyId: companyId,
      cnpj: emit.CNPJ,
      cpf: emit.CPF,
      razaoSocial: emit.xNome,
      nomeFantasia: emit.xFant,
      logradouro: emit.enderEmit.xLgr,
      numero: emit.enderEmit.nro,
      complemento: emit.enderEmit.xCpl,
      bairro: emit.enderEmit.xBairro,
      codigoMunicipio: emit.enderEmit.cMun,
      municipio: emit.enderEmit.xMun,
      uf: emit.enderEmit.UF,
      cep: emit.enderEmit.CEP,
      telefone: emit.enderEmit.fone,
      inscricaoEstadual: emit.IE,
      inscricaoEstadualSt: emit.IEST,
      inscricaoMunicipal: emit.IM,
      cnaeFiscal: emit.CNAE,
      codigoRegimeTributario: emit.CRT
    })
  }

  private async saveDestinatario(tx: any, nfeId: string, dest: ParsedNFe['dest'], companyId?: string) {
    if (!dest) return

    await tx.insert(schema.nfeDestinatario).values({
      nfeId: nfeId,
      companyId: companyId,
      cnpj: dest.CNPJ,
      cpf: dest.CPF,
      razaoSocial: dest.xNome,
      logradouro: dest.enderDest?.xLgr,
      numero: dest.enderDest?.nro,
      complemento: dest.enderDest?.xCpl,
      bairro: dest.enderDest?.xBairro,
      codigoMunicipio: dest.enderDest?.cMun,
      municipio: dest.enderDest?.xMun,
      uf: dest.enderDest?.UF,
      cep: dest.enderDest?.CEP,
      telefone: dest.enderDest?.fone,
      inscricaoEstadual: dest.IE,
      email: dest.email
    })
  }

  private async saveTotais(tx: any, nfeId: string, total: ParsedNFe['total']) {
    await tx.insert(schema.nfeTotais).values({
      nfeId: nfeId,
      icmsBaseCalculo: total.ICMSTot.vBC?.toString(),
      icmsValor: total.ICMSTot.vICMS?.toString(),
      icmsValorDesonerado: total.ICMSTot.vICMSDeson?.toString(),
      icmsBaseCalculoSt: total.ICMSTot.vBCST?.toString(),
      icmsValorSt: total.ICMSTot.vST?.toString(),
      fcpValor: total.ICMSTot.vFCP?.toString(),
      fcpValorSt: total.ICMSTot.vFCPST?.toString(),
      fcpValorRetidoSt: total.ICMSTot.vFCPSTRet?.toString(),
      fcpValorUfDestino: total.ICMSTot.vFCPUFDest?.toString(),
      icmsValorUfDestino: total.ICMSTot.vICMSUFDest?.toString(),
      icmsValorUfRemetente: total.ICMSTot.vICMSUFRemet?.toString(),
      valorProdutos: total.ICMSTot.vProd?.toString(),
      valorFrete: total.ICMSTot.vFrete?.toString(),
      valorSeguro: total.ICMSTot.vSeg?.toString(),
      valorDesconto: total.ICMSTot.vDesc?.toString(),
      valorTotalIi: total.ICMSTot.vII?.toString(),
      valorIpi: total.ICMSTot.vIPI?.toString(),
      valorIpiDevolvido: total.ICMSTot.vIPIDevol?.toString(),
      valorPis: total.ICMSTot.vPIS?.toString(),
      valorCofins: total.ICMSTot.vCOFINS?.toString(),
      valorOutrasDespesas: total.ICMSTot.vOutro?.toString(),
      valorTotal: total.ICMSTot.vNF?.toString(),
      valorTotalTributos: total.ICMSTot.vTotTrib?.toString()
    })
  }

  private async saveItemTaxes(tx: any, itemId: string, imposto: any) {
    const taxPromises: Promise<any>[] = []

    if (imposto.ICMS) {
      taxPromises.push(this.saveICMS(tx, itemId, imposto.ICMS))
    }
    if (imposto.IPI) {
      taxPromises.push(this.saveIPI(tx, itemId, imposto.IPI))
    }
    if (imposto.PIS) {
      taxPromises.push(this.savePIS(tx, itemId, imposto.PIS))
    }
    if (imposto.COFINS) {
      taxPromises.push(this.saveCOFINS(tx, itemId, imposto.COFINS))
    }
    if (imposto.II) {
      taxPromises.push(this.saveII(tx, itemId, imposto.II))
    }
    if (imposto.ISSQN) {
      taxPromises.push(this.saveISSQN(tx, itemId, imposto.ISSQN))
    }

    await Promise.all(taxPromises)
  }

  // Tax saving methods (simplified versions)
  private async saveICMS(tx: any, itemId: string, icms: any) {
    const icmsKey = Object.keys(icms)[0]
    if (!icmsKey) return

    const icmsData = icms[icmsKey]
    if (!icmsData) return

    await tx.insert(schema.nfeImpostosIcms).values({
      itemId: itemId,
      origem: icmsData.orig ? parseInt(icmsData.orig) : null,
      situacaoTributaria: (icmsData.CST || icmsData.CSOSN || '').toString().slice(0, 3) || null,
      modalidadeBaseCalculo: icmsData.modBC ? parseInt(icmsData.modBC) : null,
      valorBaseCalculo: icmsData.vBC?.toString(),
      aliquota: icmsData.pICMS?.toString(),
      valor: icmsData.vICMS?.toString(),
    })
  }

  private async saveIPI(tx: any, itemId: string, ipi: any) {
    const ipiData = ipi.IPITrib || ipi.IPINT || ipi

    await tx.insert(schema.nfeImpostosIpi).values({
      itemId: itemId,
      situacaoTributaria: ipiData.CST,
      valorBaseCalculo: ipiData.vBC?.toString(),
      aliquota: ipiData.pIPI?.toString(),
      valor: ipiData.vIPI?.toString(),
    })
  }

  private async savePIS(tx: any, itemId: string, pis: any) {
    const pisKey = Object.keys(pis)[0]
    if (!pisKey) return

    const pisData = pis[pisKey]
    if (!pisData) return

    await tx.insert(schema.nfeImpostosPis).values({
      itemId: itemId,
      situacaoTributaria: pisData.CST,
      valorBaseCalculo: pisData.vBC?.toString(),
      aliquota: pisData.pPIS?.toString(),
      valor: pisData.vPIS?.toString(),
    })
  }

  private async saveCOFINS(tx: any, itemId: string, cofins: any) {
    const cofinsKey = Object.keys(cofins)[0]
    if (!cofinsKey) return

    const cofinsData = cofins[cofinsKey]
    if (!cofinsData) return

    await tx.insert(schema.nfeImpostosCofins).values({
      itemId: itemId,
      situacaoTributaria: cofinsData.CST,
      valorBaseCalculo: cofinsData.vBC?.toString(),
      aliquota: cofinsData.pCOFINS?.toString(),
      valor: cofinsData.vCOFINS?.toString(),
    })
  }

  private async saveII(tx: any, itemId: string, ii: any) {
    await tx.insert(schema.nfeImpostosIi).values({
      itemId: itemId,
      valorBaseCalculo: ii.vBC?.toString(),
      valor: ii.vII?.toString(),
    })
  }

  private async saveISSQN(tx: any, itemId: string, issqn: any) {
    await tx.insert(schema.nfeImpostosIssqn).values({
      itemId: itemId,
      valorBaseCalculo: issqn.vBC?.toString(),
      aliquota: issqn.vAliq?.toString(),
      valor: issqn.vISSQN?.toString(),
    })
  }

  async checkDuplicate(chaveAcesso: string): Promise<DuplicateCheckResult> {
    const nfeData = await db.select({ id: schema.nfes.id })
      .from(schema.nfes)
      .where(eq(schema.nfes.chave_acesso, chaveAcesso))
      .limit(1)
      .then(data => data[0] || null)

    if (!nfeData) {
      return { isDuplicate: false, isPartial: false }
    }

    const [emitenteResult, itensResult, totaisResult, xmlResult] = await Promise.all([
      db.select({ id: schema.nfeEmitente.id }).from(schema.nfeEmitente).where(eq(schema.nfeEmitente.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.nfeItens.id }).from(schema.nfeItens).where(eq(schema.nfeItens.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.nfeTotais.id }).from(schema.nfeTotais).where(eq(schema.nfeTotais.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.xml.id }).from(schema.xml).where(eq(schema.xml.nfeId, nfeData.id)).limit(1).then(data => data[0] || null)
    ])

    const hasEmitente = !!emitenteResult
    const hasItens = !!itensResult
    const hasTotais = !!totaisResult
    const hasXml = !!xmlResult

    const isPartial = !hasEmitente || !hasItens || !hasTotais

    return {
      isDuplicate: true,
      isPartial,
      nfeId: nfeData.id,
      hasXml
    }
  }

  async saveXmlOnly(nfeId: string, companyId: string, xmlContent: string, chaveAcesso: string, numero: string, serie: string): Promise<void> {
    const fileName = `NFe_${numero}_${serie}_${chaveAcesso}.xml`

    await db.insert(schema.xml).values({
      nfeId: nfeId,
      companyId: companyId,
      xmlContent: xmlContent,
      fileName: fileName,
      fileSize: new Blob([xmlContent]).size,
      uploadDate: new Date().toISOString()
    })
  }

  async saveMissingData(nfeId: string, nfe: ParsedNFe) {
    return await db.transaction(async (tx) => {
      const [emitenteRes, destRes, itemRes, totalRes] = await Promise.all([
        tx.select({ id: schema.nfeEmitente.id }).from(schema.nfeEmitente).where(eq(schema.nfeEmitente.nfeId, nfeId)).limit(1).then((data: any) => data[0] || null),
        tx.select({ id: schema.nfeDestinatario.id }).from(schema.nfeDestinatario).where(eq(schema.nfeDestinatario.nfeId, nfeId)).limit(1).then((data: any) => data[0] || null),
        tx.select({ id: schema.nfeItens.id }).from(schema.nfeItens).where(eq(schema.nfeItens.nfeId, nfeId)).limit(1).then((data: any) => data[0] || null),
        tx.select({ id: schema.nfeTotais.id }).from(schema.nfeTotais).where(eq(schema.nfeTotais.nfeId, nfeId)).limit(1).then((data: any) => data[0] || null),
      ])

      if (!emitenteRes) {
        await this.saveEmitente(tx, nfeId, nfe.emit)
      }

      if (nfe.dest && !destRes) {
        await this.saveDestinatario(tx, nfeId, nfe.dest)
      }

      if (!itemRes) {
        await this.saveItemsWithTaxes(tx, nfeId, nfe.det)
      }

      if (!totalRes) {
        await this.saveTotais(tx, nfeId, nfe.total)
      }
    })
  }
}