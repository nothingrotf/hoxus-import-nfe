import { XMLParser } from 'fast-xml-parser';

export interface ParsedNFe {
  chaveAcesso: string;
  ide: {
    cUF: string;
    cNF: string;
    natOp: string;
    mod: string;
    serie: string;
    nNF: string;
    dhEmi: string;
    dhSaiEnt?: string;
    tpNF: string;
    idDest: string;
    cMunFG: string;
    tpImp: string;
    tpEmis: string;
    cDV: string;
    tpAmb: string;
    finNFe: string;
    indFinal: string;
    indPres: string;
    procEmi: string;
    verProc: string;
  };
  emit: {
    CNPJ?: string;
    CPF?: string;
    xNome: string;
    xFant?: string;
    enderEmit: {
      xLgr: string;
      nro: string;
      xCpl?: string;
      xBairro: string;
      cMun: string;
      xMun: string;
      UF: string;
      CEP: string;
      cPais?: string;
      xPais?: string;
      fone?: string;
    };
    IE?: string;
    IEST?: string;
    IM?: string;
    CNAE?: string;
    CRT: string;
  };
  dest?: {
    CNPJ?: string;
    CPF?: string;
    idEstrangeiro?: string;
    xNome?: string;
    enderDest?: {
      xLgr: string;
      nro: string;
      xCpl?: string;
      xBairro: string;
      cMun: string;
      xMun: string;
      UF: string;
      CEP: string;
      cPais?: string;
      xPais?: string;
      fone?: string;
    };
    indIEDest?: string;
    IE?: string;
    ISUF?: string;
    IM?: string;
    email?: string;
  };
  det: Array<{
    nItem: string;
    prod: {
      cProd: string;
      cEAN?: string;
      xProd: string;
      NCM: string;
      NVE?: string;
      CEST?: string;
      indEscala?: string;
      CNPJFab?: string;
      cBenef?: string;
      gCred?: string;
      CFOP: string;
      uCom: string;
      qCom: string;
      vUnCom: string;
      vProd: string;
      cEANTrib?: string;
      uTrib?: string;
      qTrib?: string;
      vUnTrib?: string;
      vFrete?: string;
      vSeg?: string;
      vDesc?: string;
      vOutro?: string;
      indTot?: string;
      DI?: any[];
      detExport?: any[];
      xPed?: string;
      nItemPed?: string;
      nFCI?: string;
    };
    imposto: {
      vTotTrib?: string;
      ICMS?: any;
      IPI?: any;
      II?: any;
      PIS?: any;
      PISST?: any;
      COFINS?: any;
      COFINSST?: any;
      ICMSUFDest?: any;
    };
    infAdProd?: string;
  }>;
  total: {
    ICMSTot: {
      vBC: string;
      vICMS: string;
      vICMSDeson: string;
      vFCPUFDest?: string;
      vICMSUFDest?: string;
      vICMSUFRemet?: string;
      vFCP: string;
      vBCST: string;
      vST: string;
      vFCPST: string;
      vFCPSTRet: string;
      vProd: string;
      vFrete: string;
      vSeg: string;
      vDesc: string;
      vII: string;
      vIPI: string;
      vIPIDevol: string;
      vPIS: string;
      vCOFINS: string;
      vOutro: string;
      vNF: string;
      vTotTrib?: string;
    };
    ISSQNtot?: {
      vServ?: string;
      vBC?: string;
      vISS?: string;
      vPIS?: string;
      vCOFINS?: string;
      dCompet?: string;
      vDeducao?: string;
      vOutro?: string;
      vDescIncond?: string;
      vDescCond?: string;
      vISSRet?: string;
      cRegTrib?: string;
    };
    retTrib?: {
      vRetPIS?: string;
      vRetCOFINS?: string;
      vRetCSLL?: string;
      vBCIRRF?: string;
      vIRRF?: string;
      vBCRetPrev?: string;
      vRetPrev?: string;
    };
  };
  transp?: {
    modFrete: string;
    transporta?: {
      CNPJ?: string;
      CPF?: string;
      xNome?: string;
      IE?: string;
      xEnder?: string;
      xMun?: string;
      UF?: string;
    };
    retTransp?: {
      vServ?: string;
      vBCRet?: string;
      pICMSRet?: string;
      vICMSRet?: string;
      CFOP?: string;
      cMunFG?: string;
    };
    veicTransp?: {
      placa?: string;
      UF?: string;
      RNTRC?: string;
    };
    reboque?: any[];
    vol?: any[];
  };
  cobr?: {
    fat?: {
      nFat?: string;
      vOrig?: string;
      vDesc?: string;
      vLiq?: string;
    };
    dup?: Array<{
      nDup?: string;
      dVenc?: string;
      vDup?: string;
    }>;
  };
  pag?: Array<{
    detPag: {
      indPag?: string;
      tPag: string;
      vPag: string;
      card?: {
        cnpj?: string;
        tBand?: string;
        cAut?: string;
      };
    };
    vTroco?: string;
  }>;
  infAdic?: {
    infAdFisco?: string;
    infCpl?: string;
    obsCont?: Array<{
      xCampo: string;
      xTexto: string;
    }>;
    obsFisco?: Array<{
      xCampo: string;
      xTexto: string;
    }>;
  };
}

export class NFXmlParser {
  static async parseXml(xmlContent: string): Promise<ParsedNFe> {
    const parser = new XMLParser({
      ignoreAttributes: false,
      parseAttributeValue: false,
      parseTagValue: false,
      trimValues: true,
      alwaysCreateTextNode: false,
      isArray: (name, jpath, isLeafNode, isAttribute) => {
        return ['det', 'detPag', 'obsCont', 'obsFisco', 'reboque', 'vol', 'DI', 'detExport', 'dup', 'pag'].includes(name);
      }
    });

    const result = parser.parse(xmlContent);
    
    // Navigate to the NFe structure
    const nfeProc = result.nfeProc || result;
    const nfe = nfeProc.NFe || nfeProc.nfe;
    const infNFe = nfe.infNFe;
    
    if (!infNFe) {
      throw new Error('Estrutura NFe inválida - infNFe não encontrado');
    }

    // Extract chave de acesso from Id attribute
    const chaveAcesso = infNFe['@_Id']?.replace('NFe', '') || '';

    return {
      chaveAcesso,
      ide: this.parseIde(infNFe.ide),
      emit: this.parseEmitente(infNFe.emit),
      dest: infNFe.dest ? this.parseDestinatario(infNFe.dest) : undefined,
      det: this.parseDetalhes(infNFe.det),
      total: this.parseTotal(infNFe.total),
      transp: infNFe.transp ? this.parseTransporte(infNFe.transp) : undefined,
      cobr: infNFe.cobr ? this.parseCobranca(infNFe.cobr) : undefined,
      pag: infNFe.pag ? this.parsePagamento(infNFe.pag) : undefined,
      infAdic: infNFe.infAdic ? this.parseInfoAdicionais(infNFe.infAdic) : undefined
    };
  }

  private static parseIde(ide: any) {
    return {
      cUF: String(ide.cUF || ''),
      cNF: String(ide.cNF || ''),
      natOp: String(ide.natOp || ''),
      mod: String(ide.mod || ''),
      serie: String(ide.serie || ''),
      nNF: String(ide.nNF || ''),
      dhEmi: String(ide.dhEmi || ''),
      dhSaiEnt: ide.dhSaiEnt ? String(ide.dhSaiEnt) : undefined,
      tpNF: String(ide.tpNF || ''),
      idDest: String(ide.idDest || ''),
      cMunFG: String(ide.cMunFG || ''),
      tpImp: String(ide.tpImp || ''),
      tpEmis: String(ide.tpEmis || ''),
      cDV: String(ide.cDV || ''),
      tpAmb: String(ide.tpAmb || ''),
      finNFe: String(ide.finNFe || ''),
      indFinal: String(ide.indFinal || ''),
      indPres: String(ide.indPres || ''),
      procEmi: String(ide.procEmi || ''),
      verProc: String(ide.verProc || '')
    };
  }

  private static parseEmitente(emit: any) {
    return {
      CNPJ: emit.CNPJ ? String(emit.CNPJ) : undefined,
      CPF: emit.CPF ? String(emit.CPF) : undefined,
      xNome: String(emit.xNome || ''),
      xFant: emit.xFant ? String(emit.xFant) : undefined,
      enderEmit: {
        xLgr: String(emit.enderEmit?.xLgr || ''),
        nro: String(emit.enderEmit?.nro || ''),
        xCpl: emit.enderEmit?.xCpl ? String(emit.enderEmit.xCpl) : undefined,
        xBairro: String(emit.enderEmit?.xBairro || ''),
        cMun: String(emit.enderEmit?.cMun || ''),
        xMun: String(emit.enderEmit?.xMun || ''),
        UF: String(emit.enderEmit?.UF || ''),
        CEP: String(emit.enderEmit?.CEP || ''),
        cPais: emit.enderEmit?.cPais ? String(emit.enderEmit.cPais) : undefined,
        xPais: emit.enderEmit?.xPais ? String(emit.enderEmit.xPais) : undefined,
        fone: emit.enderEmit?.fone ? String(emit.enderEmit.fone) : undefined
      },
      IE: emit.IE ? String(emit.IE) : undefined,
      IEST: emit.IEST ? String(emit.IEST) : undefined,
      IM: emit.IM ? String(emit.IM) : undefined,
      CNAE: emit.CNAE ? String(emit.CNAE) : undefined,
      CRT: String(emit.CRT || '')
    };
  }

  private static parseDestinatario(dest: any) {
    return {
      CNPJ: dest.CNPJ ? String(dest.CNPJ) : undefined,
      CPF: dest.CPF ? String(dest.CPF) : undefined,
      idEstrangeiro: dest.idEstrangeiro ? String(dest.idEstrangeiro) : undefined,
      xNome: dest.xNome ? String(dest.xNome) : undefined,
      enderDest: dest.enderDest ? {
        xLgr: String(dest.enderDest.xLgr || ''),
        nro: String(dest.enderDest.nro || ''),
        xCpl: dest.enderDest.xCpl ? String(dest.enderDest.xCpl) : undefined,
        xBairro: String(dest.enderDest.xBairro || ''),
        cMun: String(dest.enderDest.cMun || ''),
        xMun: String(dest.enderDest.xMun || ''),
        UF: String(dest.enderDest.UF || ''),
        CEP: String(dest.enderDest.CEP || ''),
        cPais: dest.enderDest.cPais ? String(dest.enderDest.cPais) : undefined,
        xPais: dest.enderDest.xPais ? String(dest.enderDest.xPais) : undefined,
        fone: dest.enderDest.fone ? String(dest.enderDest.fone) : undefined
      } : undefined,
      indIEDest: dest.indIEDest ? String(dest.indIEDest) : undefined,
      IE: dest.IE ? String(dest.IE) : undefined,
      ISUF: dest.ISUF ? String(dest.ISUF) : undefined,
      IM: dest.IM ? String(dest.IM) : undefined,
      email: dest.email ? String(dest.email) : undefined
    };
  }

  private static parseDetalhes(det: any): Array<any> {
    if (!det) return [];
    
    const detalhes = Array.isArray(det) ? det : [det];
    
    return detalhes.map(item => ({
      nItem: String(item['@_nItem'] || item.nItem || ''),
      prod: {
        cProd: String(item.prod?.cProd || ''),
        cEAN: item.prod?.cEAN ? String(item.prod.cEAN) : undefined,
        xProd: String(item.prod?.xProd || ''),
        NCM: String(item.prod?.NCM || ''),
        NVE: item.prod?.NVE ? String(item.prod.NVE) : undefined,
        CEST: item.prod?.CEST ? String(item.prod.CEST) : undefined,
        indEscala: item.prod?.indEscala ? String(item.prod.indEscala) : undefined,
        CNPJFab: item.prod?.CNPJFab ? String(item.prod.CNPJFab) : undefined,
        cBenef: item.prod?.cBenef ? String(item.prod.cBenef) : undefined,
        gCred: item.prod?.gCred ? String(item.prod.gCred) : undefined,
        CFOP: String(item.prod?.CFOP || ''),
        uCom: String(item.prod?.uCom || ''),
        qCom: String(item.prod?.qCom || '0'),
        vUnCom: String(item.prod?.vUnCom || '0'),
        vProd: String(item.prod?.vProd || '0'),
        cEANTrib: item.prod?.cEANTrib ? String(item.prod.cEANTrib) : undefined,
        uTrib: item.prod?.uTrib ? String(item.prod.uTrib) : undefined,
        qTrib: item.prod?.qTrib ? String(item.prod.qTrib) : undefined,
        vUnTrib: item.prod?.vUnTrib ? String(item.prod.vUnTrib) : undefined,
        vFrete: item.prod?.vFrete ? String(item.prod.vFrete) : undefined,
        vSeg: item.prod?.vSeg ? String(item.prod.vSeg) : undefined,
        vDesc: item.prod?.vDesc ? String(item.prod.vDesc) : undefined,
        vOutro: item.prod?.vOutro ? String(item.prod.vOutro) : undefined,
        indTot: item.prod?.indTot ? String(item.prod.indTot) : undefined,
        DI: item.prod?.DI || undefined,
        detExport: item.prod?.detExport || undefined,
        xPed: item.prod?.xPed ? String(item.prod.xPed) : undefined,
        nItemPed: item.prod?.nItemPed ? String(item.prod.nItemPed) : undefined,
        nFCI: item.prod?.nFCI ? String(item.prod.nFCI) : undefined
      },
      imposto: item.imposto || {},
      infAdProd: item.infAdProd ? String(item.infAdProd) : undefined
    }));
  }

  private static parseTotal(total: any) {
    return {
      ICMSTot: {
        vBC: String(total.ICMSTot?.vBC || '0'),
        vICMS: String(total.ICMSTot?.vICMS || '0'),
        vICMSDeson: String(total.ICMSTot?.vICMSDeson || '0'),
        vFCPUFDest: total.ICMSTot?.vFCPUFDest ? String(total.ICMSTot.vFCPUFDest) : undefined,
        vICMSUFDest: total.ICMSTot?.vICMSUFDest ? String(total.ICMSTot.vICMSUFDest) : undefined,
        vICMSUFRemet: total.ICMSTot?.vICMSUFRemet ? String(total.ICMSTot.vICMSUFRemet) : undefined,
        vFCP: String(total.ICMSTot?.vFCP || '0'),
        vBCST: String(total.ICMSTot?.vBCST || '0'),
        vST: String(total.ICMSTot?.vST || '0'),
        vFCPST: String(total.ICMSTot?.vFCPST || '0'),
        vFCPSTRet: String(total.ICMSTot?.vFCPSTRet || '0'),
        vProd: String(total.ICMSTot?.vProd || '0'),
        vFrete: String(total.ICMSTot?.vFrete || '0'),
        vSeg: String(total.ICMSTot?.vSeg || '0'),
        vDesc: String(total.ICMSTot?.vDesc || '0'),
        vII: String(total.ICMSTot?.vII || '0'),
        vIPI: String(total.ICMSTot?.vIPI || '0'),
        vIPIDevol: String(total.ICMSTot?.vIPIDevol || '0'),
        vPIS: String(total.ICMSTot?.vPIS || '0'),
        vCOFINS: String(total.ICMSTot?.vCOFINS || '0'),
        vOutro: String(total.ICMSTot?.vOutro || '0'),
        vNF: String(total.ICMSTot?.vNF || '0'),
        vTotTrib: total.ICMSTot?.vTotTrib ? String(total.ICMSTot.vTotTrib) : undefined
      },
      ISSQNtot: total.ISSQNtot,
      retTrib: total.retTrib
    };
  }

  private static parseTransporte(transp: any) {
    return {
      modFrete: String(transp.modFrete || ''),
      transporta: transp.transporta,
      retTransp: transp.retTransp,
      veicTransp: transp.veicTransp,
      reboque: transp.reboque,
      vol: transp.vol
    };
  }

  private static parseCobranca(cobr: any) {
    return {
      fat: cobr.fat,
      dup: Array.isArray(cobr.dup) ? cobr.dup : (cobr.dup ? [cobr.dup] : [])
    };
  }

  private static parsePagamento(pag: any) {
    const pagamentos = Array.isArray(pag) ? pag : [pag];
    return pagamentos;
  }

  private static parseInfoAdicionais(infAdic: any) {
    return {
      infAdFisco: infAdic.infAdFisco ? String(infAdic.infAdFisco) : undefined,
      infCpl: infAdic.infCpl ? String(infAdic.infCpl) : undefined,
      obsCont: Array.isArray(infAdic.obsCont) ? 
        infAdic.obsCont.map((obs: any) => ({
          xCampo: String(obs['@_xCampo'] || obs.xCampo || ''),
          xTexto: String(obs.xTexto || '')
        })) : 
        (infAdic.obsCont ? [{
          xCampo: String(infAdic.obsCont['@_xCampo'] || infAdic.obsCont.xCampo || ''),
          xTexto: String(infAdic.obsCont.xTexto || '')
        }] : []),
      obsFisco: Array.isArray(infAdic.obsFisco) ? 
        infAdic.obsFisco.map((obs: any) => ({
          xCampo: String(obs['@_xCampo'] || obs.xCampo || ''),
          xTexto: String(obs.xTexto || '')
        })) : 
        (infAdic.obsFisco ? [{
          xCampo: String(infAdic.obsFisco['@_xCampo'] || infAdic.obsFisco.xCampo || ''),
          xTexto: String(infAdic.obsFisco.xTexto || '')
        }] : [])
    };
  }
}
