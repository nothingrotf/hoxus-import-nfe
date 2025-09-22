import type { ParsedNFe } from './xml-parser'

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class NFeValidator {
  static validate(nfe: ParsedNFe): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validar chave de acesso
    if (!this.isValidChaveAcesso(nfe.chaveAcesso)) {
      errors.push('Chave de acesso inválida');
    }

    // Validar dados obrigatórios
    if (!nfe.ide.natOp) {
      errors.push('Natureza da operação é obrigatória');
    }

    if (!nfe.ide.serie) {
      errors.push('Série da NFe é obrigatória');
    }

    if (!nfe.ide.nNF) {
      errors.push('Número da NFe é obrigatório');
    }

    if (!nfe.ide.dhEmi) {
      errors.push('Data de emissão é obrigatória');
    }

    // Validar emitente
    if (!nfe.emit.xNome) {
      errors.push('Nome/Razão social do emitente é obrigatório');
    }

    if (!nfe.emit.CNPJ && !nfe.emit.CPF) {
      errors.push('CNPJ ou CPF do emitente é obrigatório');
    }

    if (nfe.emit.CNPJ && !this.isValidCNPJ(nfe.emit.CNPJ)) {
      errors.push('CNPJ do emitente inválido');
    }

    if (nfe.emit.CPF && !this.isValidCPF(nfe.emit.CPF)) {
      errors.push('CPF do emitente inválido');
    }

    // Validar destinatário (se existir)
    if (nfe.dest) {
      if (!nfe.dest.xNome && !nfe.dest.CNPJ && !nfe.dest.CPF) {
        warnings.push('Dados do destinatário incompletos');
      }

      if (nfe.dest.CNPJ && !this.isValidCNPJ(nfe.dest.CNPJ)) {
        errors.push('CNPJ do destinatário inválido');
      }

      if (nfe.dest.CPF && !this.isValidCPF(nfe.dest.CPF)) {
        errors.push('CPF do destinatário inválido');
      }
    }

    // Validar itens
    if (!nfe.det || nfe.det.length === 0) {
      errors.push('NFe deve conter pelo menos um item');
    } else {
      nfe.det.forEach((item, index) => {
        if (!item.prod.cProd) {
          errors.push(`Item ${index + 1}: Código do produto é obrigatório`);
        }

        if (!item.prod.xProd) {
          errors.push(`Item ${index + 1}: Descrição do produto é obrigatória`);
        }

        if (!item.prod.NCM) {
          errors.push(`Item ${index + 1}: NCM é obrigatório`);
        }

        if (!item.prod.CFOP) {
          errors.push(`Item ${index + 1}: CFOP é obrigatório`);
        }

        if (!item.prod.uCom) {
          errors.push(`Item ${index + 1}: Unidade comercial é obrigatória`);
        }

        // Validar valores numéricos
        const qCom = parseFloat(item.prod.qCom);
        const vUnCom = parseFloat(item.prod.vUnCom);
        const vProd = parseFloat(item.prod.vProd);

        if (isNaN(qCom) || qCom <= 0) {
          errors.push(`Item ${index + 1}: Quantidade comercial inválida`);
        }

        if (isNaN(vUnCom) || vUnCom < 0) {
          errors.push(`Item ${index + 1}: Valor unitário inválido`);
        }

        if (isNaN(vProd) || vProd < 0) {
          errors.push(`Item ${index + 1}: Valor do produto inválido`);
        }

        // Verificar consistência de cálculo
        const expectedVProd = qCom * vUnCom;
        const tolerance = 0.02; // Tolerância de 2 centavos
        
        if (Math.abs(vProd - expectedVProd) > tolerance) {
          warnings.push(`Item ${index + 1}: Valor do produto pode estar incorreto (esperado: ${expectedVProd.toFixed(2)})`);
        }
      });
    }

    // Validar totais
    if (!nfe.total.ICMSTot.vNF) {
      errors.push('Valor total da NFe é obrigatório');
    }

    const vNF = parseFloat(nfe.total.ICMSTot.vNF);
    if (isNaN(vNF) || vNF <= 0) {
      errors.push('Valor total da NFe deve ser maior que zero');
    }

    // Validar consistência dos totais
    const vProdTotal = parseFloat(nfe.total.ICMSTot.vProd);
    const vFrete = parseFloat(nfe.total.ICMSTot.vFrete || '0');
    const vSeg = parseFloat(nfe.total.ICMSTot.vSeg || '0');
    const vDesc = parseFloat(nfe.total.ICMSTot.vDesc || '0');
    const vOutro = parseFloat(nfe.total.ICMSTot.vOutro || '0');
    const vII = parseFloat(nfe.total.ICMSTot.vII || '0');
    const vIPI = parseFloat(nfe.total.ICMSTot.vIPI || '0');

    const expectedVNF = vProdTotal + vFrete + vSeg + vOutro + vII + vIPI - vDesc;
    const tolerance = 0.02;
    
    if (Math.abs(vNF - expectedVNF) > tolerance) {
      warnings.push(`Valor total pode estar incorreto (esperado: ${expectedVNF.toFixed(2)})`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  private static isValidChaveAcesso(chave: string): boolean {
    if (!chave || chave.length !== 44) {
      return false;
    }

    // Verificar se contém apenas números
    if (!/^\d{44}$/.test(chave)) {
      return false;
    }

    // Validar dígito verificador (algoritmo módulo 11)
    const weights = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const key = chave.substring(0, 43);
    const dv = parseInt(chave.substring(43, 44));

    let sum = 0;
    for (let i = 0; i < 43; i++) {
      sum += parseInt(key[i]) * weights[i];
    }

    const remainder = sum % 11;
    const calculatedDV = remainder < 2 ? 0 : 11 - remainder;

    return calculatedDV === dv;
  }

  private static isValidCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) return false;

    // Eliminar CNPJs inválidos conhecidos
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Validar primeiro dígito verificador
    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;

    // Validar segundo dígito verificador
    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return result === parseInt(digits.charAt(1));
  }

  private static isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) return false;

    // Eliminar CPFs inválidos conhecidos
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Validar primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    // Validar segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.charAt(10));
  }
}
