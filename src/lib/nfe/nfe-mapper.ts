import { db } from '@/database/connect'
import type { ParsedNFe } from './xml-parser'
import { schema } from '@/database/schema'
import { eq, inArray } from 'drizzle-orm'

export class NFeMapper {
  static async saveToDatabase(nfe: ParsedNFe, companyId: string, xmlContent?: string): Promise<any> {
    try {
      console.log('Iniciando salvamento da NFe:', nfe.chaveAcesso);

      // Check for duplicates first to prevent constraint violations
      const duplicateCheck = await this.checkDuplicate(nfe.chaveAcesso);

      if (duplicateCheck.isDuplicate) {
        if (duplicateCheck.isPartial && duplicateCheck.nfeId) {
          console.log('NFe parcial detectada. Completando dados faltantes para NFe:', duplicateCheck.nfeId);
          await this.saveMissingData(duplicateCheck.nfeId, nfe);

          // Save XML if provided and not already saved
          if (xmlContent && !duplicateCheck.hasXml) {
            await this.saveXmlOnly(duplicateCheck.nfeId, companyId, xmlContent, nfe.chaveAcesso, nfe.ide.nNF, nfe.ide.serie);
          }

          return { id: duplicateCheck.nfeId, status: 'completed_partial' };
        } else {
          console.log('NFe já existe e está completa:', duplicateCheck.nfeId);

          // Save XML if provided and not already saved
          if (xmlContent && !duplicateCheck.hasXml && duplicateCheck.nfeId) {
            await this.saveXmlOnly(duplicateCheck.nfeId, companyId, xmlContent, nfe.chaveAcesso, nfe.ide.nNF, nfe.ide.serie);
          }

          return { id: duplicateCheck.nfeId, status: 'already_exists' };
        }
      }

      const serie = parseInt(nfe.ide.serie);
      const numero = parseInt(nfe.ide.nNF);
      const tipoNotaFiscal = parseInt(nfe.ide.tpNF);
      const localDestino = parseInt(nfe.ide.idDest);
      const finalidadeEmissao = parseInt(nfe.ide.finNFe);
      const consumidorFinal = parseInt(nfe.ide.indFinal);
      const indicadorPresenca = parseInt(nfe.ide.indPres);

      const nfeInsertData = {
        company_id: companyId,
        chave_acesso: nfe.chaveAcesso,
        natureza_operacao: nfe.ide.natOp,
        serie,
        numero: (numero >= 1 && numero <= 999999999) ? numero : 1,
        data_emissao: new Date(nfe.ide.dhEmi).toISOString().replace('T', ' ').replace('Z', ''),
        data_entrada_saida: nfe.ide.dhSaiEnt ? new Date(nfe.ide.dhSaiEnt).toISOString().replace('T', ' ').replace('Z', '') : null,
        tipo_nota_fiscal: [0, 1].includes(tipoNotaFiscal) ? tipoNotaFiscal : 0,
        local_destino: [1, 2, 3].includes(localDestino) ? localDestino : 1,
        codigo_municipio_fato_gerador: parseInt(nfe.ide.cMunFG),
        finalidade_emissao: [1, 2, 3, 4].includes(finalidadeEmissao) ? finalidadeEmissao : 1,
        consumidor_final: [0, 1].includes(consumidorFinal) ? consumidorFinal : 0,
        indicador_presenca: (indicadorPresenca >= 0 && indicadorPresenca <= 9) ? indicadorPresenca : 0,
        indicador_intermediario: 0,
        versao: nfe.ide.verProc ? nfe.ide.verProc.substring(0, 3) : '4.0',
        status: 'imported'
      };

      console.log('Dados da NFe principal a serem inseridos:', nfeInsertData);

      // Inserir NFe principal - usando apenas campos que existem no schema
      const nfeData = await db.insert(schema.nfes).values(nfeInsertData).returning().then(data => data[0]!);

      console.log('NFe principal salva:', nfeData.id);
      const nfeId = nfeData?.id;

      // Salvar XML original se fornecido
      if (xmlContent && nfeId) {
        console.log('Salvando XML original para NFe:', nfeId);
        const fileName = `NFe_${nfe.ide.nNF}_${nfe.ide.serie}_${nfe.chaveAcesso}.xml`;
        await db.insert(schema.xml).values({
          nfeId: nfeId,
          companyId: companyId,
          xmlContent: xmlContent,
          fileName: fileName,
          fileSize: new Blob([xmlContent]).size,
          uploadDate: new Date().toISOString()
        });

        console.log('XML original salvo com sucesso');
      }

      // Salvar emitente
      await this.saveEmitente(nfeData.id, nfe.emit, companyId);
      console.log('Emitente salvo');

      // Salvar destinatário (se existir)
      if (nfe.dest) {
        await this.saveDestinatario(nfeData.id, nfe.dest, companyId);
        console.log('Destinatário salvo');
      }

      // Salvar itens e seus impostos
      console.log(`Salvando ${nfe.det.length} itens com seus impostos...`);
      let totalImpostos = 0;
      
      for (const item of nfe.det) {
        const itemData = await this.saveItem(nfeData.id, item);
        if (item.imposto) {
          const impostoCount = Object.keys(item.imposto).length;
          totalImpostos += impostoCount;
          console.log(`Item ${item.nItem}: ${impostoCount} impostos processados`);
        }
      }
      
      console.log(`Total de impostos salvos: ${totalImpostos}`);

      // Salvar totais
      await this.saveTotais(nfeData.id, nfe.total);
      console.log('Totais salvos');

      console.log('NFe importada com sucesso!');
      return { ...nfeData, status: 'imported_new' };

    } catch (error) {
      console.error('Erro ao salvar NFe:', error);
      throw error;
    }
  }

  private static async saveEmitente(nfeId: string, emit: any, companyId?: string) {
    await db.insert(schema.nfeEmitente).values({
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
      codigoMunicipio: emit.enderEmit.cMun ? parseInt(emit.enderEmit.cMun) : null,
      municipio: emit.enderEmit.xMun,
      uf: emit.enderEmit.UF,
      cep: emit.enderEmit.CEP,
      telefone: emit.enderEmit.fone,
      inscricaoEstadual: emit.IE,
      inscricaoEstadualSt: emit.IEST,
      inscricaoMunicipal: emit.IM,
      cnaeFiscal: emit.CNAE,
      codigoRegimeTributario: parseInt(emit.CRT)
    });
  }

  private static async saveDestinatario(nfeId: string, dest: any, companyId?: string) {
    await db.insert(schema.nfeDestinatario).values({
      nfeId: nfeId,
      companyId: companyId,
      cnpj: dest.CNPJ,
      cpf: dest.CPF,
      identificacaoEstrangeiro: dest.idEstrangeiro,
      razaoSocial: dest.xNome,
      logradouro: dest.enderDest?.xLgr,
      numero: dest.enderDest?.nro,
      complemento: dest.enderDest?.xCpl,
      bairro: dest.enderDest?.xBairro,
      codigoMunicipio: dest.enderDest?.cMun ? parseInt(dest.enderDest.cMun) : null,
      municipio: dest.enderDest?.xMun,
      uf: dest.enderDest?.UF,
      cep: dest.enderDest?.CEP,
      codigoPais: dest.enderDest?.cPais ? parseInt(dest.enderDest.cPais) : null,
      nomePais: dest.enderDest?.xPais,
      telefone: dest.enderDest?.fone,
      inscricaoEstadual: dest.IE,
      inscricaoSuframa: dest.ISUF,
      inscricaoMunicipal: dest.IM,
      email: dest.email
    });
  }

  private static async saveItem(nfeId: string, item: any) {
    // Salvar o item principal
    const itemData = await db.insert(schema.nfeItens).values({
      nfeId: nfeId,
      numeroItem: parseInt(item.nItem),
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
      quantidadeTributavel: item.prod.qTrib ? item.prod.qTrib.toString() : null,
      valorUnitarioTributavel: item.prod.vUnTrib ? item.prod.vUnTrib.toString() : null,
      valorFrete: item.prod.vFrete ? item.prod.vFrete.toString() : '0',
      valorSeguro: item.prod.vSeg ? item.prod.vSeg.toString() : '0',
      valorDesconto: item.prod.vDesc ? item.prod.vDesc.toString() : '0',
      valorOutrasDespesas: item.prod.vOutro ? item.prod.vOutro.toString() : '0',
      compoeValorTotal: item.prod.indTot ? parseInt(item.prod.indTot) : 1,
      numeroPedido: item.prod.xPed,
      numeroItemPedido: item.prod.nItemPed ? parseInt(item.prod.nItemPed) : null,
      numeroFci: item.prod.nFCI,
      informacoesAdicionais: item.infAdProd,
      valorTotalTributos: item.imposto?.vTotTrib ? item.imposto.vTotTrib.toString() : null
    }).returning().then(data => data[0]!);

    // Salvar impostos do item (se existirem)
    if (item.imposto) {
      await this.saveItemTaxes(itemData.id, item.imposto);
    }

    return itemData;
  }


  private static async saveTotais(nfeId: string, total: any) {
    await db.insert(schema.nfeTotais).values({
      nfeId: nfeId,
      icmsBaseCalculo: total.ICMSTot.vBC?.toString(),
      icmsValor: total.ICMSTot.vICMS?.toString(),
      icmsValorDesonerado: total.ICMSTot.vICMSDeson?.toString(),
      icmsBaseCalculoSt: total.ICMSTot.vBCST?.toString(),
      icmsValorSt: total.ICMSTot.vST?.toString(),
      fcpValor: total.ICMSTot.vFCP?.toString(),
      fcpValorSt: total.ICMSTot.vFCPST?.toString(),
      fcpValorRetidoSt: total.ICMSTot.vFCPSTRet?.toString(),
      fcpValorUfDestino: total.ICMSTot.vFCPUFDest ? total.ICMSTot.vFCPUFDest.toString() : null,
      icmsValorUfDestino: total.ICMSTot.vICMSUFDest ? total.ICMSTot.vICMSUFDest.toString() : null,
      icmsValorUfRemetente: total.ICMSTot.vICMSUFRemet ? total.ICMSTot.vICMSUFRemet.toString() : null,
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
      valorTotalTributos: total.ICMSTot.vTotTrib ? total.ICMSTot.vTotTrib.toString() : null
    });
  }


  static async checkDuplicate(chaveAcesso: string): Promise<{ isDuplicate: boolean; isPartial: boolean; nfeId?: string; hasXml?: boolean }> {
    const nfeData = await db.select({ id: schema.nfes.id })
      .from(schema.nfes)
      .where(eq(schema.nfes.chave_acesso, chaveAcesso))
      .limit(1)
      .then(data => data[0] || null);

    if (!nfeData) {
      return { isDuplicate: false, isPartial: false };
    }

    // Verificar se a NFe tem dados relacionados (está completa)
    const [emitenteResult, itensResult, totaisResult, xmlResult] = await Promise.all([
      db.select({ id: schema.nfeEmitente.id }).from(schema.nfeEmitente).where(eq(schema.nfeEmitente.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.nfeItens.id }).from(schema.nfeItens).where(eq(schema.nfeItens.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.nfeTotais.id }).from(schema.nfeTotais).where(eq(schema.nfeTotais.nfeId, nfeData.id)).limit(1).then(data => data[0] || null),
      db.select({ id: schema.xml.id }).from(schema.xml).where(eq(schema.xml.nfeId, nfeData.id)).limit(1).then(data => data[0] || null)
    ]);

    const hasEmitente = !!emitenteResult;
    const hasItens = !!itensResult;
    const hasTotais = !!totaisResult;
    const hasXml = !!xmlResult;

    // Se não tem nenhum dado relacionado, é uma importação parcial
    const isPartial = !hasEmitente || !hasItens || !hasTotais;

    return {
      isDuplicate: true,
      isPartial,
      nfeId: nfeData.id,
      hasXml
    };
  }

  // Novo método para salvar apenas o XML quando a NFe já existe
  static async saveXmlOnly(nfeId: string, companyId: string, xmlContent: string, chaveAcesso: string, numero: string, serie: string): Promise<void> {
    console.log('Salvando apenas XML para NFe existente:', nfeId);
    const fileName = `NFe_${numero}_${serie}_${chaveAcesso}.xml`;

    await db.insert(schema.xml).values({
      nfeId: nfeId,
      companyId: companyId,
      xmlContent: xmlContent,
      fileName: fileName,
      fileSize: new Blob([xmlContent]).size,
      uploadDate: new Date().toISOString()
    });

    console.log('XML salvo com sucesso para NFe duplicada');
  }

  static async cleanPartialNFe(nfeId: string): Promise<void> {
    // Primeiro, obter todos os itens da NFe para limpar seus impostos
    const itens = await db.select({ id: schema.nfeItens.id })
      .from(schema.nfeItens)
      .where(eq(schema.nfeItens.nfeId, nfeId));

    if (itens && itens.length > 0) {
      const itemIds = itens.map(item => item.id);

      // Deletar todos os impostos dos itens
      await Promise.all([
        db.delete(schema.nfeImpostosIcms).where(inArray(schema.nfeImpostosIcms.itemId, itemIds)),
        db.delete(schema.nfeImpostosIpi).where(inArray(schema.nfeImpostosIpi.itemId, itemIds)),
        db.delete(schema.nfeImpostosPis).where(inArray(schema.nfeImpostosPis.itemId, itemIds)),
        db.delete(schema.nfeImpostosCofins).where(inArray(schema.nfeImpostosCofins.itemId, itemIds)),
        db.delete(schema.nfeImpostosIi).where(inArray(schema.nfeImpostosIi.itemId, itemIds)),
        db.delete(schema.nfeImpostosIssqn).where(inArray(schema.nfeImpostosIssqn.itemId, itemIds)),
        db.delete(schema.nfeIcmsUfDestino).where(inArray(schema.nfeIcmsUfDestino.itemId, itemIds))
      ]);
    }

    // Deletar dados relacionados da NFe
    await Promise.all([
      db.delete(schema.nfeEmitente).where(eq(schema.nfeEmitente.nfeId, nfeId)),
      db.delete(schema.nfeDestinatario).where(eq(schema.nfeDestinatario.nfeId, nfeId)),
      db.delete(schema.nfeItens).where(eq(schema.nfeItens.nfeId, nfeId)),
      db.delete(schema.nfeTotais).where(eq(schema.nfeTotais.nfeId, nfeId))
    ]);

    // Deletar a NFe principal
    await db.delete(schema.nfes).where(eq(schema.nfes.id, nfeId));
  }

  // Método principal para salvar impostos de um item
  private static async saveItemTaxes(itemId: string, imposto: any) {
    const taxPromises: Promise<any>[] = [];

    // ICMS
    if (imposto.ICMS) {
      taxPromises.push(this.saveICMS(itemId, imposto.ICMS));
    }

    // IPI
    if (imposto.IPI) {
      taxPromises.push(this.saveIPI(itemId, imposto.IPI));
    }

    // PIS
    if (imposto.PIS) {
      taxPromises.push(this.savePIS(itemId, imposto.PIS));
    }

    // COFINS
    if (imposto.COFINS) {
      taxPromises.push(this.saveCOFINS(itemId, imposto.COFINS));
    }

    // II (Imposto de Importação)
    if (imposto.II) {
      taxPromises.push(this.saveII(itemId, imposto.II));
    }

    // ISSQN
    if (imposto.ISSQN) {
      taxPromises.push(this.saveISSQN(itemId, imposto.ISSQN));
    }

    // ICMS UF Destino
    if (imposto.ICMSUFDest) {
      taxPromises.push(this.saveICMSUFDestino(itemId, imposto.ICMSUFDest));
    }

    await Promise.all(taxPromises);
  }

  // Salvar ICMS
  private static async saveICMS(itemId: string, icms: any) {
    try {
      // ICMS pode ter diferentes situações tributárias, pegar a primeira chave
      const icmsKey = Object.keys(icms)[0];
      if (!icmsKey) return;

      const icmsData = icms[icmsKey];
      if (!icmsData) return;

      await db.insert(schema.nfeImpostosIcms).values({
        itemId: itemId,
        origem: icmsData.orig ? parseInt(icmsData.orig) : null,
        situacaoTributaria: (icmsData.CST || icmsData.CSOSN || '').toString().slice(0, 3) || null,
        modalidadeBaseCalculo: icmsData.modBC ? parseInt(icmsData.modBC) : null,
        valorBaseCalculo: icmsData.vBC ? icmsData.vBC.toString() : null,
        percentualReducaoBaseCalculo: icmsData.pRedBC ? icmsData.pRedBC.toString() : null,
        codigoBeneficioFiscal: icmsData.cBenef || null,
        aliquota: icmsData.pICMS ? icmsData.pICMS.toString() : null,
        aliquotaFinalConsumidor: icmsData.pFCPUFDest ? icmsData.pFCPUFDest.toString() : null,
        valor: icmsData.vICMS ? icmsData.vICMS.toString() : null,
        valorProprio: icmsData.vICMSOp ? icmsData.vICMSOp.toString() : null,
        valorDesonerado: icmsData.vICMSDeson ? icmsData.vICMSDeson.toString() : null,
        valorOperacao: icmsData.vBC ? icmsData.vBC.toString() : null,
        percentualDiferimento: icmsData.pDif ? icmsData.pDif.toString() : null,
        valorDiferido: icmsData.vICMSDif ? icmsData.vICMSDif.toString() : null,
        motivoDesoneracao: icmsData.motDesICMS ? parseInt(icmsData.motDesICMS) : null,
        valorRetencao: icmsData.vICMSSTRet ? icmsData.vICMSSTRet.toString() : null,
        aliquotaRetencao: icmsData.pICMSST ? icmsData.pICMSST.toString() : null,
        quantidadeTributada: icmsData.qBCMono ? icmsData.qBCMono.toString() : null,
        quantidadeTributadaRetencao: icmsData.qBCMonoRet ? icmsData.qBCMonoRet.toString() : null,
        aliquotaCreditoSimples: icmsData.pCredSN ? icmsData.pCredSN.toString() : null,
        valorCreditoSimples: icmsData.vCredICMSSN ? icmsData.vCredICMSSN.toString() : null
      });
    } catch (error) {
      console.error('Erro no processamento ICMS:', error);
      throw error;
    }
  }

  // Salvar IPI
  private static async saveIPI(itemId: string, ipi: any) {
    try {
      if (!ipi) return;

      const ipiData = ipi.IPITrib || ipi.IPINT || ipi;

      await db.insert(schema.nfeImpostosIpi).values({
        itemId: itemId,
        situacaoTributaria: ipiData.CST || null,
        valorBaseCalculo: ipiData.vBC ? ipiData.vBC.toString() : null,
        aliquota: ipiData.pIPI ? ipiData.pIPI.toString() : null,
        quantidadeTotal: ipiData.qUnid ? ipiData.qUnid.toString() : null,
        valorUnidade: ipiData.vUnid ? ipiData.vUnid.toString() : null,
        valor: ipiData.vIPI ? ipiData.vIPI.toString() : null,
        cnpjProdutor: ipi.CNPJProd || null,
        codigoSelo: ipi.cSelo || null,
        quantidadeSelo: ipi.qSelo ? parseInt(ipi.qSelo) : null,
        codigoEnquadramento: ipi.cEnq || 999
      });
    } catch (error) {
      console.error('Erro no processamento IPI:', error);
      throw error;
    }
  }

  // Salvar PIS
  private static async savePIS(itemId: string, pis: any) {
    try {
      if (!pis) return;

      // PIS pode ter diferentes situações tributárias
      const pisKey = Object.keys(pis)[0];
      if (!pisKey) return;

      const pisData = pis[pisKey];
      if (!pisData) return;

      await db.insert(schema.nfeImpostosPis).values({
        itemId: itemId,
        situacaoTributaria: pisData.CST || null,
        valorBaseCalculo: pisData.vBC ? pisData.vBC.toString() : null,
        aliquota: pisData.pPIS ? pisData.pPIS.toString() : null,
        quantidadeVendida: pisData.qBCProd ? pisData.qBCProd.toString() : null,
        aliquotaReais: pisData.vAliqProd ? pisData.vAliqProd.toString() : null,
        valor: pisData.vPIS ? pisData.vPIS.toString() : null
      });
    } catch (error) {
      console.error('Erro no processamento PIS:', error);
      throw error;
    }
  }

  // Salvar COFINS
  private static async saveCOFINS(itemId: string, cofins: any) {
    try {
      if (!cofins) return;

      // COFINS pode ter diferentes situações tributárias
      const cofinsKey = Object.keys(cofins)[0];
      if (!cofinsKey) return;

      const cofinsData = cofins[cofinsKey];
      if (!cofinsData) return;

      await db.insert(schema.nfeImpostosCofins).values({
        itemId: itemId,
        situacaoTributaria: cofinsData.CST || null,
        valorBaseCalculo: cofinsData.vBC ? cofinsData.vBC.toString() : null,
        aliquota: cofinsData.pCOFINS ? cofinsData.pCOFINS.toString() : null,
        quantidadeVendida: cofinsData.qBCProd ? cofinsData.qBCProd.toString() : null,
        aliquotaReais: cofinsData.vAliqProd ? cofinsData.vAliqProd.toString() : null,
        valor: cofinsData.vCOFINS ? cofinsData.vCOFINS.toString() : null
      });
    } catch (error) {
      console.error('Erro no processamento COFINS:', error);
      throw error;
    }
  }

  // Salvar II (Imposto de Importação)
  private static async saveII(itemId: string, ii: any) {
    await db.insert(schema.nfeImpostosIi).values({
      itemId: itemId,
      valorBaseCalculo: ii.vBC ? ii.vBC.toString() : null,
      valorDespesasAduaneiras: ii.vDespAdu ? ii.vDespAdu.toString() : null,
      valor: ii.vII ? ii.vII.toString() : null,
      valorIof: ii.vIOF ? ii.vIOF.toString() : null
    });
  }

  // Salvar ISSQN
  private static async saveISSQN(itemId: string, issqn: any) {
    await db.insert(schema.nfeImpostosIssqn).values({
      itemId: itemId,
      valorBaseCalculo: issqn.vBC ? issqn.vBC.toString() : null,
      aliquota: issqn.vAliq ? issqn.vAliq.toString() : null,
      valor: issqn.vISSQN ? issqn.vISSQN.toString() : null,
      codigoMunicipioFatoGerador: issqn.cMunFG ? parseInt(issqn.cMunFG) : null,
      codigoListaServicos: issqn.cListServ,
      situacaoTributaria: issqn.cSitTrib ? parseInt(issqn.cSitTrib) : null
    });
  }

  // Salvar ICMS UF Destino
  private static async saveICMSUFDestino(itemId: string, icmsUFDest: any) {
    await db.insert(schema.nfeIcmsUfDestino).values({
      itemId: itemId,
      valorBaseCalculo: icmsUFDest.vBC ? icmsUFDest.vBC.toString() : null,
      valorBaseCalculoFcp: icmsUFDest.vBCFCP ? icmsUFDest.vBCFCP.toString() : null,
      percentualFcp: icmsUFDest.pFCP ? icmsUFDest.pFCP.toString() : null,
      aliquotaInterna: icmsUFDest.pICMSInter ? icmsUFDest.pICMSInter.toString() : null,
      aliquotaInterestadual: icmsUFDest.pICMSInterPart ? icmsUFDest.pICMSInterPart.toString() : null,
      percentualPartilha: icmsUFDest.pICMSInterPart ? icmsUFDest.pICMSInterPart.toString() : '100',
      valorFcp: icmsUFDest.vFCP ? icmsUFDest.vFCP.toString() : null,
      valorUfDestino: icmsUFDest.vICMSUFDest ? icmsUFDest.vICMSUFDest.toString() : null,
      valorUfRemetente: icmsUFDest.vICMSUFRemet ? icmsUFDest.vICMSUFRemet.toString() : null
    });
  }

  // Completar dados faltantes de uma NFe existente (importação parcial)
  static async saveMissingData(nfeId: string, nfe: ParsedNFe) {
    try {
      console.log('Completando NFe parcial:', nfeId);

      const [emitenteRes, destRes, itemRes, totalRes] = await Promise.all([
        db.select({ id: schema.nfeEmitente.id }).from(schema.nfeEmitente).where(eq(schema.nfeEmitente.nfeId, nfeId)).limit(1).then(data => data[0] || null),
        db.select({ id: schema.nfeDestinatario.id }).from(schema.nfeDestinatario).where(eq(schema.nfeDestinatario.nfeId, nfeId)).limit(1).then(data => data[0] || null),
        db.select({ id: schema.nfeItens.id }).from(schema.nfeItens).where(eq(schema.nfeItens.nfeId, nfeId)).limit(1).then(data => data[0] || null),
        db.select({ id: schema.nfeTotais.id }).from(schema.nfeTotais).where(eq(schema.nfeTotais.nfeId, nfeId)).limit(1).then(data => data[0] || null),
      ]);

      if (!emitenteRes) {
        await this.saveEmitente(nfeId, nfe.emit);
      }

      if (nfe.dest && !destRes) {
        await this.saveDestinatario(nfeId, nfe.dest);
      }

      if (!itemRes) {
        for (const item of nfe.det) {
          await this.saveItem(nfeId, item);
        }
      }

      if (!totalRes) {
        await this.saveTotais(nfeId, nfe.total);
      }

      console.log('NFe parcial completada com sucesso.');
    } catch (error) {
      console.error('Erro ao completar NFe parcial:', error);
      throw error;
    }
  }
}
