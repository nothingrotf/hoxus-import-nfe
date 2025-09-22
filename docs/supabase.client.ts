export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      chart_of_accounts: {
        Row: {
          account_type: string
          code: string
          company_id: string
          composes_cash_flow: boolean | null
          composes_dfc: boolean | null
          composes_dre: boolean | null
          composes_ebitda: boolean | null
          composes_receitas: boolean | null
          created_at: string
          id: string
          is_active: boolean
          is_cost: boolean | null
          is_default: boolean
          is_direct_cost: boolean | null
          is_expense: boolean | null
          is_fixed_cost: boolean | null
          is_indirect_cost: boolean | null
          is_non_operational_cost: boolean | null
          is_operational_cost: boolean | null
          is_variable_cost: boolean | null
          level: number
          name: string
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          account_type: string
          code: string
          company_id: string
          composes_cash_flow?: boolean | null
          composes_dfc?: boolean | null
          composes_dre?: boolean | null
          composes_ebitda?: boolean | null
          composes_receitas?: boolean | null
          created_at?: string
          id?: string
          is_active?: boolean
          is_cost?: boolean | null
          is_default?: boolean
          is_direct_cost?: boolean | null
          is_expense?: boolean | null
          is_fixed_cost?: boolean | null
          is_indirect_cost?: boolean | null
          is_non_operational_cost?: boolean | null
          is_operational_cost?: boolean | null
          is_variable_cost?: boolean | null
          level?: number
          name: string
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          account_type?: string
          code?: string
          company_id?: string
          composes_cash_flow?: boolean | null
          composes_dfc?: boolean | null
          composes_dre?: boolean | null
          composes_ebitda?: boolean | null
          composes_receitas?: boolean | null
          created_at?: string
          id?: string
          is_active?: boolean
          is_cost?: boolean | null
          is_default?: boolean
          is_direct_cost?: boolean | null
          is_expense?: boolean | null
          is_fixed_cost?: boolean | null
          is_indirect_cost?: boolean | null
          is_non_operational_cost?: boolean | null
          is_operational_cost?: boolean | null
          is_variable_cost?: boolean | null
          level?: number
          name?: string
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chart_of_accounts_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      clients_suppliers: {
        Row: {
          aceita_pedido_parcial: boolean | null
          aceita_produtos_parciais: boolean | null
          address: string | null
          bairro_cobranca: string | null
          bairro_geral: string | null
          categoria_financeira: string | null
          celular: string | null
          cep_cobranca: string | null
          cep_geral: string | null
          cnae_principal: string | null
          cnaes_secundarios: Json | null
          codigo: string | null
          codigo_filial: string | null
          codigo_master: string | null
          company_id: string
          complemento_cobranca: string | null
          complemento_geral: string | null
          condicao_pagamento: string | null
          condicoes_pagamento: string | null
          corporate_group_id: string | null
          created_at: string
          credito_em_uso: number | null
          data_nascimento: string | null
          descricao_cnae_principal: string | null
          document: string
          email: string | null
          email_nota_fiscal: string | null
          endereco_cobranca: string | null
          endereco_geral: string | null
          enderecos_entrega: Json | null
          fantasia: string | null
          formas_recebimento: Json | null
          grupo_empresarial_nome: string | null
          id: string
          indicador_ie: number | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          is_matriz: boolean | null
          limite_credito: number | null
          municipio_cobranca: string | null
          municipio_geral: string | null
          name: string
          naturalidade: string | null
          notes: string | null
          numero_cobranca: string | null
          numero_geral: string | null
          orgao_emissor: string | null
          pais: string | null
          pessoas_contato: Json | null
          phone: string | null
          prazo_maximo_atraso_dias: number | null
          produtos_fiscais: Json | null
          regime_tributario: string | null
          rg: string | null
          saldo_credito: number | null
          sexo: string | null
          situacao: string | null
          tabela_precos: string | null
          tipo_empresa: string | null
          tipo_pessoa: string | null
          tipos_contato: Json | null
          type: string
          uf_cobranca: string | null
          uf_geral: string | null
          updated_at: string
          vendedor_id: string | null
        }
        Insert: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id: string
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document: string
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name: string
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type: string
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string
          vendedor_id?: string | null
        }
        Update: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id?: string
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document?: string
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name?: string
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type?: string
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string
          vendedor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_suppliers_corporate_group_id_fkey"
            columns: ["corporate_group_id"]
            isOneToOne: false
            referencedRelation: "corporate_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      color_categories: {
        Row: {
          company_id: string
          created_at: string
          hex_code: string
          id: string
          name: string
        }
        Insert: {
          company_id: string
          created_at?: string
          hex_code: string
          id?: string
          name: string
        }
        Update: {
          company_id?: string
          created_at?: string
          hex_code?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      colors: {
        Row: {
          category_id: string | null
          code: string
          company_id: string
          created_at: string
          hex_code: string
          hex_code_secondary: string | null
          id: string
          is_composite: boolean | null
          name: string
        }
        Insert: {
          category_id?: string | null
          code?: string
          company_id: string
          created_at?: string
          hex_code: string
          hex_code_secondary?: string | null
          id?: string
          is_composite?: boolean | null
          name: string
        }
        Update: {
          category_id?: string | null
          code?: string
          company_id?: string
          created_at?: string
          hex_code?: string
          hex_code_secondary?: string | null
          id?: string
          is_composite?: boolean | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "colors_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          bairro: string | null
          capital_social: number | null
          cep: string | null
          cnae_fiscal: string | null
          cnae_fiscal_descricao: string | null
          cnaes_secundarios: Json | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_municipio_ibge: number | null
          codigo_natureza_juridica: number | null
          codigo_porte: number | null
          complemento: string | null
          created_at: string
          data_exclusao_do_mei: string | null
          data_exclusao_do_simples: string | null
          data_inicio_atividade: string | null
          data_opcao_pelo_mei: string | null
          data_opcao_pelo_simples: string | null
          data_situacao_cadastral: string | null
          data_situacao_especial: string | null
          data_ultima_atualizacao_receita: string | null
          descricao_identificador_matriz_filial: string | null
          descricao_motivo_situacao_cadastral: string | null
          descricao_situacao_cadastral: string | null
          descricao_tipo_de_logradouro: string | null
          description: string | null
          email_corporativo: string | null
          ente_federativo_responsavel: string | null
          fax: string | null
          id: string
          identificador_matriz_filial: number | null
          logo_url: string | null
          logradouro: string | null
          motivo_situacao_cadastral: number | null
          municipio: string | null
          name: string
          natureza_juridica: string | null
          nome_cidade_no_exterior: string | null
          nome_fantasia: string | null
          numero: string | null
          opcao_pelo_mei: boolean | null
          opcao_pelo_simples: boolean | null
          owner_id: string
          porte: string | null
          qsa: Json | null
          qualificacao_do_responsavel: number | null
          razao_social: string | null
          regime_tributacao_manual: string | null
          regime_tributario: Json | null
          situacao_cadastral: number | null
          situacao_especial: string | null
          telefone_1: string | null
          telefone_2: string | null
          uf: string | null
          updated_at: string
        }
        Insert: {
          bairro?: string | null
          capital_social?: number | null
          cep?: string | null
          cnae_fiscal?: string | null
          cnae_fiscal_descricao?: string | null
          cnaes_secundarios?: Json | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_municipio_ibge?: number | null
          codigo_natureza_juridica?: number | null
          codigo_porte?: number | null
          complemento?: string | null
          created_at?: string
          data_exclusao_do_mei?: string | null
          data_exclusao_do_simples?: string | null
          data_inicio_atividade?: string | null
          data_opcao_pelo_mei?: string | null
          data_opcao_pelo_simples?: string | null
          data_situacao_cadastral?: string | null
          data_situacao_especial?: string | null
          data_ultima_atualizacao_receita?: string | null
          descricao_identificador_matriz_filial?: string | null
          descricao_motivo_situacao_cadastral?: string | null
          descricao_situacao_cadastral?: string | null
          descricao_tipo_de_logradouro?: string | null
          description?: string | null
          email_corporativo?: string | null
          ente_federativo_responsavel?: string | null
          fax?: string | null
          id?: string
          identificador_matriz_filial?: number | null
          logo_url?: string | null
          logradouro?: string | null
          motivo_situacao_cadastral?: number | null
          municipio?: string | null
          name: string
          natureza_juridica?: string | null
          nome_cidade_no_exterior?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          opcao_pelo_mei?: boolean | null
          opcao_pelo_simples?: boolean | null
          owner_id: string
          porte?: string | null
          qsa?: Json | null
          qualificacao_do_responsavel?: number | null
          razao_social?: string | null
          regime_tributacao_manual?: string | null
          regime_tributario?: Json | null
          situacao_cadastral?: number | null
          situacao_especial?: string | null
          telefone_1?: string | null
          telefone_2?: string | null
          uf?: string | null
          updated_at?: string
        }
        Update: {
          bairro?: string | null
          capital_social?: number | null
          cep?: string | null
          cnae_fiscal?: string | null
          cnae_fiscal_descricao?: string | null
          cnaes_secundarios?: Json | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_municipio_ibge?: number | null
          codigo_natureza_juridica?: number | null
          codigo_porte?: number | null
          complemento?: string | null
          created_at?: string
          data_exclusao_do_mei?: string | null
          data_exclusao_do_simples?: string | null
          data_inicio_atividade?: string | null
          data_opcao_pelo_mei?: string | null
          data_opcao_pelo_simples?: string | null
          data_situacao_cadastral?: string | null
          data_situacao_especial?: string | null
          data_ultima_atualizacao_receita?: string | null
          descricao_identificador_matriz_filial?: string | null
          descricao_motivo_situacao_cadastral?: string | null
          descricao_situacao_cadastral?: string | null
          descricao_tipo_de_logradouro?: string | null
          description?: string | null
          email_corporativo?: string | null
          ente_federativo_responsavel?: string | null
          fax?: string | null
          id?: string
          identificador_matriz_filial?: number | null
          logo_url?: string | null
          logradouro?: string | null
          motivo_situacao_cadastral?: number | null
          municipio?: string | null
          name?: string
          natureza_juridica?: string | null
          nome_cidade_no_exterior?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          opcao_pelo_mei?: boolean | null
          opcao_pelo_simples?: boolean | null
          owner_id?: string
          porte?: string | null
          qsa?: Json | null
          qualificacao_do_responsavel?: number | null
          razao_social?: string | null
          regime_tributacao_manual?: string | null
          regime_tributario?: Json | null
          situacao_cadastral?: number | null
          situacao_especial?: string | null
          telefone_1?: string | null
          telefone_2?: string | null
          uf?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "companies_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_members: {
        Row: {
          company_id: string
          id: string
          joined_at: string
          role: string
          user_id: string
        }
        Insert: {
          company_id: string
          id?: string
          joined_at?: string
          role?: string
          user_id: string
        }
        Update: {
          company_id?: string
          id?: string
          joined_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_members_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      corporate_groups: {
        Row: {
          codigo_master: string
          company_id: string
          created_at: string
          id: string
          name: string | null
          updated_at: string
        }
        Insert: {
          codigo_master: string
          company_id: string
          created_at?: string
          id?: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          codigo_master?: string
          company_id?: string
          created_at?: string
          id?: string
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      cte: {
        Row: {
          caracteristica_adicional_servico: string | null
          caracteristica_adicional_transporte: string | null
          cfop: string | null
          chave_acesso: string | null
          chave_cte_anulacao: string | null
          chave_cte_anulado: string | null
          chave_cte_complementado: string | null
          chave_cte_multimodal: string | null
          chave_cte_substituido: string | null
          chave_nfe_tomador: string | null
          codigo_municipio_envio: number | null
          codigo_municipio_fim: number | null
          codigo_municipio_inicio: number | null
          codigo_rota: string | null
          company_id: string | null
          data_atualizacao: string | null
          data_criacao: string | null
          data_emissao: string | null
          destino: string | null
          detalhes_retira: string | null
          funcionario_emissor: string | null
          id: string
          indicador_globalizado: boolean | null
          modal: number | null
          municipio_destino_frete: string | null
          municipio_origem_frete: string | null
          natureza_operacao: string | null
          nome_municipio_envio: string | null
          nome_municipio_fim: string | null
          nome_municipio_inicio: string | null
          numero: number | null
          observacoes_gerais: string | null
          origem: string | null
          passagem: string | null
          retira: boolean | null
          serie: number | null
          status: string | null
          tipo_cte: number | null
          tipo_servico: number | null
          tomador: number | null
          uf_envio: string | null
          uf_fim: string | null
          uf_inicio: string | null
          valor_total_tributos: number | null
          versao: string | null
          xml_content: string | null
        }
        Insert: {
          caracteristica_adicional_servico?: string | null
          caracteristica_adicional_transporte?: string | null
          cfop?: string | null
          chave_acesso?: string | null
          chave_cte_anulacao?: string | null
          chave_cte_anulado?: string | null
          chave_cte_complementado?: string | null
          chave_cte_multimodal?: string | null
          chave_cte_substituido?: string | null
          chave_nfe_tomador?: string | null
          codigo_municipio_envio?: number | null
          codigo_municipio_fim?: number | null
          codigo_municipio_inicio?: number | null
          codigo_rota?: string | null
          company_id?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          data_emissao?: string | null
          destino?: string | null
          detalhes_retira?: string | null
          funcionario_emissor?: string | null
          id?: string
          indicador_globalizado?: boolean | null
          modal?: number | null
          municipio_destino_frete?: string | null
          municipio_origem_frete?: string | null
          natureza_operacao?: string | null
          nome_municipio_envio?: string | null
          nome_municipio_fim?: string | null
          nome_municipio_inicio?: string | null
          numero?: number | null
          observacoes_gerais?: string | null
          origem?: string | null
          passagem?: string | null
          retira?: boolean | null
          serie?: number | null
          status?: string | null
          tipo_cte?: number | null
          tipo_servico?: number | null
          tomador?: number | null
          uf_envio?: string | null
          uf_fim?: string | null
          uf_inicio?: string | null
          valor_total_tributos?: number | null
          versao?: string | null
          xml_content?: string | null
        }
        Update: {
          caracteristica_adicional_servico?: string | null
          caracteristica_adicional_transporte?: string | null
          cfop?: string | null
          chave_acesso?: string | null
          chave_cte_anulacao?: string | null
          chave_cte_anulado?: string | null
          chave_cte_complementado?: string | null
          chave_cte_multimodal?: string | null
          chave_cte_substituido?: string | null
          chave_nfe_tomador?: string | null
          codigo_municipio_envio?: number | null
          codigo_municipio_fim?: number | null
          codigo_municipio_inicio?: number | null
          codigo_rota?: string | null
          company_id?: string | null
          data_atualizacao?: string | null
          data_criacao?: string | null
          data_emissao?: string | null
          destino?: string | null
          detalhes_retira?: string | null
          funcionario_emissor?: string | null
          id?: string
          indicador_globalizado?: boolean | null
          modal?: number | null
          municipio_destino_frete?: string | null
          municipio_origem_frete?: string | null
          natureza_operacao?: string | null
          nome_municipio_envio?: string | null
          nome_municipio_fim?: string | null
          nome_municipio_inicio?: string | null
          numero?: number | null
          observacoes_gerais?: string | null
          origem?: string | null
          passagem?: string | null
          retira?: boolean | null
          serie?: number | null
          status?: string | null
          tipo_cte?: number | null
          tipo_servico?: number | null
          tomador?: number | null
          uf_envio?: string | null
          uf_fim?: string | null
          uf_inicio?: string | null
          valor_total_tributos?: number | null
          versao?: string | null
          xml_content?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_autorizacoes: {
        Row: {
          cnpj: string | null
          cpf: string | null
          cte_id: string | null
          id: string
        }
        Insert: {
          cnpj?: string | null
          cpf?: string | null
          cte_id?: string | null
          id?: string
        }
        Update: {
          cnpj?: string | null
          cpf?: string | null
          cte_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cte_autorizacoes_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_autorizacoes_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_campos_livres: {
        Row: {
          conteudo: string | null
          cte_id: string | null
          id: string
          identificacao: string | null
        }
        Insert: {
          conteudo?: string | null
          cte_id?: string | null
          id?: string
          identificacao?: string | null
        }
        Update: {
          conteudo?: string | null
          cte_id?: string | null
          id?: string
          identificacao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_campos_livres_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_campos_livres_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_componentes_valor: {
        Row: {
          cte_id: string | null
          id: string
          nome_componente: string | null
          valor_componente: number | null
        }
        Insert: {
          cte_id?: string | null
          id?: string
          nome_componente?: string | null
          valor_componente?: number | null
        }
        Update: {
          cte_id?: string | null
          id?: string
          nome_componente?: string | null
          valor_componente?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_componentes_valor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_componentes_valor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_contato_desenvolvedor: {
        Row: {
          cnpj: string | null
          cte_id: string | null
          email: string | null
          id: string
          nome: string | null
          telefone: string | null
        }
        Insert: {
          cnpj?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          nome?: string | null
          telefone?: string | null
        }
        Update: {
          cnpj?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          nome?: string | null
          telefone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_contato_desenvolvedor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_contato_desenvolvedor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_destinatario: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: string | null
          company_id: string | null
          complemento: string | null
          cpf: string | null
          cte_id: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          inscricao_suframa: string | null
          logradouro: string | null
          municipio: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_suframa?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_suframa?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_destinatario_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_destinatario_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_destinatario_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_documentos_anteriores_eletronicos: {
        Row: {
          chave_acesso: string | null
          emissor_anterior_id: string | null
          id: string
        }
        Insert: {
          chave_acesso?: string | null
          emissor_anterior_id?: string | null
          id?: string
        }
        Update: {
          chave_acesso?: string | null
          emissor_anterior_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cte_documentos_anteriores_eletronicos_emissor_anterior_id_fkey"
            columns: ["emissor_anterior_id"]
            isOneToOne: false
            referencedRelation: "cte_emissores_anteriores"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_documentos_anteriores_papel: {
        Row: {
          data_emissao: string | null
          emissor_anterior_id: string | null
          id: string
          numero: string | null
          serie: string | null
          subserie: string | null
          tipo_documento: string | null
        }
        Insert: {
          data_emissao?: string | null
          emissor_anterior_id?: string | null
          id?: string
          numero?: string | null
          serie?: string | null
          subserie?: string | null
          tipo_documento?: string | null
        }
        Update: {
          data_emissao?: string | null
          emissor_anterior_id?: string | null
          id?: string
          numero?: string | null
          serie?: string | null
          subserie?: string | null
          tipo_documento?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_documentos_anteriores_papel_emissor_anterior_id_fkey"
            columns: ["emissor_anterior_id"]
            isOneToOne: false
            referencedRelation: "cte_emissores_anteriores"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_duplicatas: {
        Row: {
          data_vencimento: string | null
          fatura_id: string | null
          id: string
          numero: string | null
          valor: number | null
        }
        Insert: {
          data_vencimento?: string | null
          fatura_id?: string | null
          id?: string
          numero?: string | null
          valor?: number | null
        }
        Update: {
          data_vencimento?: string | null
          fatura_id?: string | null
          id?: string
          numero?: string | null
          valor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_duplicatas_fatura_id_fkey"
            columns: ["fatura_id"]
            isOneToOne: false
            referencedRelation: "cte_fatura"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_emissores_anteriores: {
        Row: {
          cnpj: string | null
          cpf: string | null
          cte_id: string | null
          id: string
          inscricao_estadual: string | null
          razao_social: string | null
          uf: string | null
        }
        Insert: {
          cnpj?: string | null
          cpf?: string | null
          cte_id?: string | null
          id?: string
          inscricao_estadual?: string | null
          razao_social?: string | null
          uf?: string | null
        }
        Update: {
          cnpj?: string | null
          cpf?: string | null
          cte_id?: string | null
          id?: string
          inscricao_estadual?: string | null
          razao_social?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_emissores_anteriores_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_emissores_anteriores_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_emitente: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          company_id: string | null
          complemento: string | null
          cte_id: string | null
          id: string
          inscricao_estadual: string | null
          inscricao_estadual_st: string | null
          logradouro: string | null
          municipio: string | null
          nome_fantasia: string | null
          numero: string | null
          razao_social: string | null
          regime_tributario: number | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          company_id?: string | null
          complemento?: string | null
          cte_id?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          razao_social?: string | null
          regime_tributario?: number | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          company_id?: string | null
          complemento?: string | null
          cte_id?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          razao_social?: string | null
          regime_tributario?: number | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_emitente_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_emitente_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_emitente_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_expedidor: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: string | null
          complemento: string | null
          cpf: string | null
          cte_id: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_expedidor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_expedidor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_fatura: {
        Row: {
          cte_id: string | null
          id: string
          numero: string | null
          valor_desconto: number | null
          valor_liquido: number | null
          valor_original: number | null
        }
        Insert: {
          cte_id?: string | null
          id?: string
          numero?: string | null
          valor_desconto?: number | null
          valor_liquido?: number | null
          valor_original?: number | null
        }
        Update: {
          cte_id?: string | null
          id?: string
          numero?: string | null
          valor_desconto?: number | null
          valor_liquido?: number | null
          valor_original?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_fatura_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_fatura_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_icms: {
        Row: {
          aliquota: number | null
          aliquota_retido: number | null
          codigo_beneficio_fiscal: string | null
          cte_id: string | null
          id: string
          informacoes_adicionais_fisco: string | null
          percentual_reducao_bc: number | null
          simples_nacional: boolean | null
          situacao_tributaria: string | null
          valor_base_calculo: number | null
          valor_bc_retido: number | null
          valor_credito_outorgado: number | null
          valor_icms: number | null
          valor_icms_desoneracao: number | null
          valor_icms_retido: number | null
        }
        Insert: {
          aliquota?: number | null
          aliquota_retido?: number | null
          codigo_beneficio_fiscal?: string | null
          cte_id?: string | null
          id?: string
          informacoes_adicionais_fisco?: string | null
          percentual_reducao_bc?: number | null
          simples_nacional?: boolean | null
          situacao_tributaria?: string | null
          valor_base_calculo?: number | null
          valor_bc_retido?: number | null
          valor_credito_outorgado?: number | null
          valor_icms?: number | null
          valor_icms_desoneracao?: number | null
          valor_icms_retido?: number | null
        }
        Update: {
          aliquota?: number | null
          aliquota_retido?: number | null
          codigo_beneficio_fiscal?: string | null
          cte_id?: string | null
          id?: string
          informacoes_adicionais_fisco?: string | null
          percentual_reducao_bc?: number | null
          simples_nacional?: boolean | null
          situacao_tributaria?: string | null
          valor_base_calculo?: number | null
          valor_bc_retido?: number | null
          valor_credito_outorgado?: number | null
          valor_icms?: number | null
          valor_icms_desoneracao?: number | null
          valor_icms_retido?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_icms_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_icms_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_icms_uf_fim: {
        Row: {
          aliquota_interestadual: number | null
          aliquota_interna_uf_fim: number | null
          cte_id: string | null
          id: string
          percentual_fcp: number | null
          valor_bc_uf_fim: number | null
          valor_fcp_uf_fim: number | null
          valor_icms_uf_fim: number | null
          valor_icms_uf_inicio: number | null
        }
        Insert: {
          aliquota_interestadual?: number | null
          aliquota_interna_uf_fim?: number | null
          cte_id?: string | null
          id?: string
          percentual_fcp?: number | null
          valor_bc_uf_fim?: number | null
          valor_fcp_uf_fim?: number | null
          valor_icms_uf_fim?: number | null
          valor_icms_uf_inicio?: number | null
        }
        Update: {
          aliquota_interestadual?: number | null
          aliquota_interna_uf_fim?: number | null
          cte_id?: string | null
          id?: string
          percentual_fcp?: number | null
          valor_bc_uf_fim?: number | null
          valor_fcp_uf_fim?: number | null
          valor_icms_uf_fim?: number | null
          valor_icms_uf_inicio?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_icms_uf_fim_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_icms_uf_fim_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_lacres_unidade_carga: {
        Row: {
          id: string
          numero_lacre: string | null
          unidade_carga_id: string | null
        }
        Insert: {
          id?: string
          numero_lacre?: string | null
          unidade_carga_id?: string | null
        }
        Update: {
          id?: string
          numero_lacre?: string | null
          unidade_carga_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_lacres_unidade_carga_unidade_carga_id_fkey"
            columns: ["unidade_carga_id"]
            isOneToOne: false
            referencedRelation: "cte_unidades_carga"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_lacres_unidade_transporte: {
        Row: {
          id: string
          numero_lacre: string | null
          unidade_transporte_id: string | null
        }
        Insert: {
          id?: string
          numero_lacre?: string | null
          unidade_transporte_id?: string | null
        }
        Update: {
          id?: string
          numero_lacre?: string | null
          unidade_transporte_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_lacres_unidade_transporte_unidade_transporte_id_fkey"
            columns: ["unidade_transporte_id"]
            isOneToOne: false
            referencedRelation: "cte_unidades_transporte"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_nfe: {
        Row: {
          chave_acesso: string | null
          cte_id: string | null
          data_prevista_entrega: string | null
          id: string
          pin_suframa: string | null
        }
        Insert: {
          chave_acesso?: string | null
          cte_id?: string | null
          data_prevista_entrega?: string | null
          id?: string
          pin_suframa?: string | null
        }
        Update: {
          chave_acesso?: string | null
          cte_id?: string | null
          data_prevista_entrega?: string | null
          id?: string
          pin_suframa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_nfe_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_nfe_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_notas_fiscais: {
        Row: {
          cfop: string | null
          cte_id: string | null
          data_emissao: string | null
          data_prevista_entrega: string | null
          id: string
          modelo: string | null
          numero: string | null
          pedido: string | null
          peso: number | null
          pin_suframa: string | null
          romaneio: string | null
          serie: string | null
          valor_bc_icms: number | null
          valor_bc_icms_st: number | null
          valor_icms: number | null
          valor_icms_st: number | null
          valor_produtos: number | null
          valor_total: number | null
        }
        Insert: {
          cfop?: string | null
          cte_id?: string | null
          data_emissao?: string | null
          data_prevista_entrega?: string | null
          id?: string
          modelo?: string | null
          numero?: string | null
          pedido?: string | null
          peso?: number | null
          pin_suframa?: string | null
          romaneio?: string | null
          serie?: string | null
          valor_bc_icms?: number | null
          valor_bc_icms_st?: number | null
          valor_icms?: number | null
          valor_icms_st?: number | null
          valor_produtos?: number | null
          valor_total?: number | null
        }
        Update: {
          cfop?: string | null
          cte_id?: string | null
          data_emissao?: string | null
          data_prevista_entrega?: string | null
          id?: string
          modelo?: string | null
          numero?: string | null
          pedido?: string | null
          peso?: number | null
          pin_suframa?: string | null
          romaneio?: string | null
          serie?: string | null
          valor_bc_icms?: number | null
          valor_bc_icms_st?: number | null
          valor_icms?: number | null
          valor_icms_st?: number | null
          valor_produtos?: number | null
          valor_total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_notas_fiscais_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_notas_fiscais_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_outros_documentos: {
        Row: {
          cte_id: string | null
          data_emissao: string | null
          data_prevista_entrega: string | null
          descricao_outros: string | null
          id: string
          numero: string | null
          tipo_documento: number | null
          valor_documento: number | null
        }
        Insert: {
          cte_id?: string | null
          data_emissao?: string | null
          data_prevista_entrega?: string | null
          descricao_outros?: string | null
          id?: string
          numero?: string | null
          tipo_documento?: number | null
          valor_documento?: number | null
        }
        Update: {
          cte_id?: string | null
          data_emissao?: string | null
          data_prevista_entrega?: string | null
          descricao_outros?: string | null
          id?: string
          numero?: string | null
          tipo_documento?: number | null
          valor_documento?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_outros_documentos_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_outros_documentos_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_programacao_entrega: {
        Row: {
          cte_id: string | null
          data_final: string | null
          data_inicial: string | null
          data_programada: string | null
          hora_final: string | null
          hora_inicial: string | null
          hora_programada: string | null
          id: string
          tipo_data: number | null
          tipo_hora: number | null
          tipo_periodo: number | null
          tipo_periodo_hora: number | null
        }
        Insert: {
          cte_id?: string | null
          data_final?: string | null
          data_inicial?: string | null
          data_programada?: string | null
          hora_final?: string | null
          hora_inicial?: string | null
          hora_programada?: string | null
          id?: string
          tipo_data?: number | null
          tipo_hora?: number | null
          tipo_periodo?: number | null
          tipo_periodo_hora?: number | null
        }
        Update: {
          cte_id?: string | null
          data_final?: string | null
          data_inicial?: string | null
          data_programada?: string | null
          hora_final?: string | null
          hora_inicial?: string | null
          hora_programada?: string | null
          id?: string
          tipo_data?: number | null
          tipo_hora?: number | null
          tipo_periodo?: number | null
          tipo_periodo_hora?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_programacao_entrega_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_programacao_entrega_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_quantidades_carga: {
        Row: {
          codigo_unidade_medida: string | null
          cte_id: string | null
          id: string
          produto: string | null
          quantidade: number | null
          tipo_medida: string | null
          valor_carga: number | null
        }
        Insert: {
          codigo_unidade_medida?: string | null
          cte_id?: string | null
          id?: string
          produto?: string | null
          quantidade?: number | null
          tipo_medida?: string | null
          valor_carga?: number | null
        }
        Update: {
          codigo_unidade_medida?: string | null
          cte_id?: string | null
          id?: string
          produto?: string | null
          quantidade?: number | null
          tipo_medida?: string | null
          valor_carga?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_quantidades_carga_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_quantidades_carga_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_recebedor: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: string | null
          complemento: string | null
          cpf: string | null
          cte_id: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_recebedor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_recebedor_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_remetente: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: string | null
          company_id: string | null
          complemento: string | null
          cpf: string | null
          cte_id: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nome_fantasia: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_remetente_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_remetente_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_remetente_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_tomador: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: string | null
          company_id: string | null
          complemento: string | null
          cpf: string | null
          cte_id: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nome_fantasia: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: string | null
          company_id?: string | null
          complemento?: string | null
          cpf?: string | null
          cte_id?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nome_fantasia?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_tomador_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_tomador_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_tomador_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_unidades_carga: {
        Row: {
          cte_id: string | null
          documento_id: string | null
          documento_tipo: string | null
          id: string
          identificacao: string | null
          quantidade_rateada: number | null
          tipo_unidade: string | null
        }
        Insert: {
          cte_id?: string | null
          documento_id?: string | null
          documento_tipo?: string | null
          id?: string
          identificacao?: string | null
          quantidade_rateada?: number | null
          tipo_unidade?: string | null
        }
        Update: {
          cte_id?: string | null
          documento_id?: string | null
          documento_tipo?: string | null
          id?: string
          identificacao?: string | null
          quantidade_rateada?: number | null
          tipo_unidade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_unidades_carga_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_unidades_carga_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_unidades_carga_transporte: {
        Row: {
          id: string
          identificacao: string | null
          numero_lacre: string | null
          quantidade_rateada: number | null
          tipo_unidade: string | null
          unidade_transporte_id: string | null
        }
        Insert: {
          id?: string
          identificacao?: string | null
          numero_lacre?: string | null
          quantidade_rateada?: number | null
          tipo_unidade?: string | null
          unidade_transporte_id?: string | null
        }
        Update: {
          id?: string
          identificacao?: string | null
          numero_lacre?: string | null
          quantidade_rateada?: number | null
          tipo_unidade?: string | null
          unidade_transporte_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_unidades_carga_transporte_unidade_transporte_id_fkey"
            columns: ["unidade_transporte_id"]
            isOneToOne: false
            referencedRelation: "cte_unidades_transporte"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_unidades_transporte: {
        Row: {
          cte_id: string | null
          documento_id: string | null
          documento_tipo: string | null
          id: string
          identificacao: string | null
          tipo_unidade: string | null
        }
        Insert: {
          cte_id?: string | null
          documento_id?: string | null
          documento_tipo?: string | null
          id?: string
          identificacao?: string | null
          tipo_unidade?: string | null
        }
        Update: {
          cte_id?: string | null
          documento_id?: string | null
          documento_tipo?: string | null
          id?: string
          identificacao?: string | null
          tipo_unidade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_unidades_transporte_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_unidades_transporte_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_valores: {
        Row: {
          company_id: string | null
          cte_id: string | null
          id: string
          outras_caracteristicas_carga: string | null
          produto_predominante: string | null
          valor_averbacao: number | null
          valor_receber: number | null
          valor_total_carga: number | null
          valor_total_prestacao: number | null
          valor_total_tributos: number | null
        }
        Insert: {
          company_id?: string | null
          cte_id?: string | null
          id?: string
          outras_caracteristicas_carga?: string | null
          produto_predominante?: string | null
          valor_averbacao?: number | null
          valor_receber?: number | null
          valor_total_carga?: number | null
          valor_total_prestacao?: number | null
          valor_total_tributos?: number | null
        }
        Update: {
          company_id?: string | null
          cte_id?: string | null
          id?: string
          outras_caracteristicas_carga?: string | null
          produto_predominante?: string | null
          valor_averbacao?: number | null
          valor_receber?: number | null
          valor_total_carga?: number | null
          valor_total_prestacao?: number | null
          valor_total_tributos?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_valores_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_valores_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_valores_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: true
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      cte_veiculos_novos: {
        Row: {
          chassi: string | null
          codigo_marca_modelo: string | null
          cor: string | null
          cte_id: string | null
          descricao_cor: string | null
          frete_unitario: number | null
          id: string
          valor_unitario: number | null
        }
        Insert: {
          chassi?: string | null
          codigo_marca_modelo?: string | null
          cor?: string | null
          cte_id?: string | null
          descricao_cor?: string | null
          frete_unitario?: number | null
          id?: string
          valor_unitario?: number | null
        }
        Update: {
          chassi?: string | null
          codigo_marca_modelo?: string | null
          cor?: string | null
          cte_id?: string | null
          descricao_cor?: string | null
          frete_unitario?: number | null
          id?: string
          valor_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_veiculos_novos_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cte_veiculos_novos_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "vw_cte_resumo"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          address: string | null
          address_complement: string | null
          address_number: string | null
          birth_date: string | null
          city: string | null
          company_id: string
          cpf: string
          created_at: string
          department: string | null
          email: string | null
          employment_type: string | null
          end_time: string | null
          full_name: string
          gender: string | null
          hire_date: string
          id: string
          lunch_end_time: string | null
          lunch_start_time: string | null
          marital_status: string | null
          mobile_phone: string | null
          neighborhood: string | null
          phone: string | null
          pis_pasep: string | null
          position: string
          rg: string | null
          salary: number | null
          sector_id: string | null
          start_time: string | null
          state: string | null
          status: string
          subsector_id: string | null
          termination_date: string | null
          updated_at: string
          work_card: string | null
          work_shift: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id: string
          cpf: string
          created_at?: string
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name: string
          gender?: string | null
          hire_date: string
          id?: string
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position: string
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id?: string
          cpf?: string
          created_at?: string
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name?: string
          gender?: string | null
          hire_date?: string
          id?: string
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position?: string
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_subsector_id_fkey"
            columns: ["subsector_id"]
            isOneToOne: false
            referencedRelation: "subsectors"
            referencedColumns: ["id"]
          },
        ]
      }
      external_production_orders: {
        Row: {
          actual_return_date: string | null
          company_id: string
          cost_per_piece: number
          created_at: string
          expected_return_date: string | null
          id: string
          notes: string | null
          order_number: string
          paid_amount: number | null
          payment_status: string
          product_name: string
          quantity: number
          sector_id: string
          sent_date: string
          status: string
          supplier_id: string
          total_cost: number | null
          updated_at: string
        }
        Insert: {
          actual_return_date?: string | null
          company_id: string
          cost_per_piece: number
          created_at?: string
          expected_return_date?: string | null
          id?: string
          notes?: string | null
          order_number: string
          paid_amount?: number | null
          payment_status?: string
          product_name: string
          quantity: number
          sector_id: string
          sent_date?: string
          status?: string
          supplier_id: string
          total_cost?: number | null
          updated_at?: string
        }
        Update: {
          actual_return_date?: string | null
          company_id?: string
          cost_per_piece?: number
          created_at?: string
          expected_return_date?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          paid_amount?: number | null
          payment_status?: string
          product_name?: string
          quantity?: number
          sector_id?: string
          sent_date?: string
          status?: string
          supplier_id?: string
          total_cost?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "external_production_orders_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_production_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_production_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_basic"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_production_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_full"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_production_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_sensitive"
            referencedColumns: ["id"]
          },
        ]
      }
      natureza_operacao: {
        Row: {
          aplica_cofins: boolean
          aplica_icms: boolean
          aplica_ipi: boolean
          aplica_iss: boolean
          aplica_pis: boolean
          ativo: boolean
          cfop: string
          codigo: string
          company_id: string
          created_at: string
          descricao: string
          finalidade: string
          id: string
          observacoes: string | null
          tipo_operacao: string
          updated_at: string
        }
        Insert: {
          aplica_cofins?: boolean
          aplica_icms?: boolean
          aplica_ipi?: boolean
          aplica_iss?: boolean
          aplica_pis?: boolean
          ativo?: boolean
          cfop: string
          codigo: string
          company_id: string
          created_at?: string
          descricao: string
          finalidade: string
          id?: string
          observacoes?: string | null
          tipo_operacao: string
          updated_at?: string
        }
        Update: {
          aplica_cofins?: boolean
          aplica_icms?: boolean
          aplica_ipi?: boolean
          aplica_iss?: boolean
          aplica_pis?: boolean
          ativo?: boolean
          cfop?: string
          codigo?: string
          company_id?: string
          created_at?: string
          descricao?: string
          finalidade?: string
          id?: string
          observacoes?: string | null
          tipo_operacao?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_natureza_operacao_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe: {
        Row: {
          chave_acesso: string | null
          codigo_municipio_fato_gerador: number | null
          company_id: string
          consumidor_final: number
          created_at: string | null
          data_emissao: string
          data_entrada_saida: string | null
          finalidade_emissao: number
          id: string
          indicador_intermediario: number
          indicador_presenca: number
          local_destino: number
          natureza_operacao: string
          numero: number | null
          protocolo_autorizacao: string | null
          serie: number | null
          status: string | null
          tipo_nota_fiscal: number
          updated_at: string | null
          versao: string
        }
        Insert: {
          chave_acesso?: string | null
          codigo_municipio_fato_gerador?: number | null
          company_id: string
          consumidor_final: number
          created_at?: string | null
          data_emissao: string
          data_entrada_saida?: string | null
          finalidade_emissao: number
          id?: string
          indicador_intermediario: number
          indicador_presenca: number
          local_destino: number
          natureza_operacao: string
          numero?: number | null
          protocolo_autorizacao?: string | null
          serie?: number | null
          status?: string | null
          tipo_nota_fiscal: number
          updated_at?: string | null
          versao?: string
        }
        Update: {
          chave_acesso?: string | null
          codigo_municipio_fato_gerador?: number | null
          company_id?: string
          consumidor_final?: number
          created_at?: string | null
          data_emissao?: string
          data_entrada_saida?: string | null
          finalidade_emissao?: number
          id?: string
          indicador_intermediario?: number
          indicador_presenca?: number
          local_destino?: number
          natureza_operacao?: string
          numero?: number | null
          protocolo_autorizacao?: string | null
          serie?: number | null
          status?: string | null
          tipo_nota_fiscal?: number
          updated_at?: string | null
          versao?: string
        }
        Relationships: [
          {
            foreignKeyName: "nfe_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_adicoes_importacao: {
        Row: {
          codigo_fabricante: string | null
          documento_importacao_id: string | null
          id: string
          numero_adicao: number | null
          numero_drawback: string | null
          numero_sequencial: number | null
          valor_desconto: number | null
        }
        Insert: {
          codigo_fabricante?: string | null
          documento_importacao_id?: string | null
          id?: string
          numero_adicao?: number | null
          numero_drawback?: string | null
          numero_sequencial?: number | null
          valor_desconto?: number | null
        }
        Update: {
          codigo_fabricante?: string | null
          documento_importacao_id?: string | null
          id?: string
          numero_adicao?: number | null
          numero_drawback?: string | null
          numero_sequencial?: number | null
          valor_desconto?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_adicoes_importacao_documento_importacao_id_fkey"
            columns: ["documento_importacao_id"]
            isOneToOne: false
            referencedRelation: "nfe_documentos_importacao"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_agropecuario: {
        Row: {
          cpf_responsavel_tecnico: string | null
          id: string
          nfe_id: string | null
          numero_receituario: string | null
          produtos_animais_vegetais_florestais: string | null
        }
        Insert: {
          cpf_responsavel_tecnico?: string | null
          id?: string
          nfe_id?: string | null
          numero_receituario?: string | null
          produtos_animais_vegetais_florestais?: string | null
        }
        Update: {
          cpf_responsavel_tecnico?: string | null
          id?: string
          nfe_id?: string | null
          numero_receituario?: string | null
          produtos_animais_vegetais_florestais?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_agropecuario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_agropecuario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_agropecuario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_campos_uso_livre: {
        Row: {
          conteudo: string
          id: string
          identificacao: string
          item_id: string | null
          nfe_id: string | null
          tipo: string
        }
        Insert: {
          conteudo: string
          id?: string
          identificacao: string
          item_id?: string | null
          nfe_id?: string | null
          tipo: string
        }
        Update: {
          conteudo?: string
          id?: string
          identificacao?: string
          item_id?: string | null
          nfe_id?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "nfe_campos_uso_livre_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_campos_uso_livre_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_campos_uso_livre_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_campos_uso_livre_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_campos_uso_livre_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_cobranca: {
        Row: {
          id: string
          nfe_id: string | null
          numero_fatura: string | null
          valor_desconto_fatura: number | null
          valor_liquido_fatura: number | null
          valor_original_fatura: number | null
        }
        Insert: {
          id?: string
          nfe_id?: string | null
          numero_fatura?: string | null
          valor_desconto_fatura?: number | null
          valor_liquido_fatura?: number | null
          valor_original_fatura?: number | null
        }
        Update: {
          id?: string
          nfe_id?: string | null
          numero_fatura?: string | null
          valor_desconto_fatura?: number | null
          valor_liquido_fatura?: number | null
          valor_original_fatura?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_cobranca_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_cobranca_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_cobranca_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_combustiveis: {
        Row: {
          aliquota_cide: number | null
          base_calculo_cide: number | null
          codigo_autorizacao_codif: string | null
          codigo_produto_anp: string | null
          descricao_anp: string | null
          encerrante_numero_bico: number | null
          encerrante_numero_bomba: number | null
          encerrante_numero_tanque: number | null
          encerrante_valor_fim: number | null
          encerrante_valor_inicio: number | null
          id: string
          indicador_importacao: number | null
          item_id: string | null
          percentual_glp: number | null
          percentual_gni: number | null
          percentual_gnn: number | null
          percentual_mistura: number | null
          percentual_originario: number | null
          quantidade_temperatura_ambiente: number | null
          uf_consumo: string | null
          uf_origem: string | null
          valor_cide: number | null
          valor_partida: number | null
        }
        Insert: {
          aliquota_cide?: number | null
          base_calculo_cide?: number | null
          codigo_autorizacao_codif?: string | null
          codigo_produto_anp?: string | null
          descricao_anp?: string | null
          encerrante_numero_bico?: number | null
          encerrante_numero_bomba?: number | null
          encerrante_numero_tanque?: number | null
          encerrante_valor_fim?: number | null
          encerrante_valor_inicio?: number | null
          id?: string
          indicador_importacao?: number | null
          item_id?: string | null
          percentual_glp?: number | null
          percentual_gni?: number | null
          percentual_gnn?: number | null
          percentual_mistura?: number | null
          percentual_originario?: number | null
          quantidade_temperatura_ambiente?: number | null
          uf_consumo?: string | null
          uf_origem?: string | null
          valor_cide?: number | null
          valor_partida?: number | null
        }
        Update: {
          aliquota_cide?: number | null
          base_calculo_cide?: number | null
          codigo_autorizacao_codif?: string | null
          codigo_produto_anp?: string | null
          descricao_anp?: string | null
          encerrante_numero_bico?: number | null
          encerrante_numero_bomba?: number | null
          encerrante_numero_tanque?: number | null
          encerrante_valor_fim?: number | null
          encerrante_valor_inicio?: number | null
          id?: string
          indicador_importacao?: number | null
          item_id?: string | null
          percentual_glp?: number | null
          percentual_gni?: number | null
          percentual_gnn?: number | null
          percentual_mistura?: number | null
          percentual_originario?: number | null
          quantidade_temperatura_ambiente?: number | null
          uf_consumo?: string | null
          uf_origem?: string | null
          valor_cide?: number | null
          valor_partida?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_combustiveis_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_combustiveis_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_compra: {
        Row: {
          contrato: string | null
          id: string
          nfe_id: string | null
          nota_empenho: string | null
          pedido: string | null
        }
        Insert: {
          contrato?: string | null
          id?: string
          nfe_id?: string | null
          nota_empenho?: string | null
          pedido?: string | null
        }
        Update: {
          contrato?: string | null
          id?: string
          nfe_id?: string | null
          nota_empenho?: string | null
          pedido?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_compra_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_compra_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_compra_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_credito_presumido: {
        Row: {
          id: string
          identificacao_campo: string
          item_id: string | null
          percentual_credito: number | null
          valor_credito: number | null
        }
        Insert: {
          id?: string
          identificacao_campo: string
          item_id?: string | null
          percentual_credito?: number | null
          valor_credito?: number | null
        }
        Update: {
          id?: string
          identificacao_campo?: string
          item_id?: string | null
          percentual_credito?: number | null
          valor_credito?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_credito_presumido_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_credito_presumido_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_csrt: {
        Row: {
          hash_csrt: string
          id: string
          identificador_csrt: string
          nfe_id: string | null
        }
        Insert: {
          hash_csrt: string
          id?: string
          identificador_csrt: string
          nfe_id?: string | null
        }
        Update: {
          hash_csrt?: string
          id?: string
          identificador_csrt?: string
          nfe_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_csrt_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_csrt_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_csrt_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_destinatario: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: number | null
          company_id: string
          complemento: string | null
          cpf: string | null
          email: string | null
          id: string
          identificacao_estrangeiro: string | null
          inscricao_estadual: string | null
          inscricao_estadual_st: string | null
          inscricao_municipal: string | null
          inscricao_suframa: string | null
          logradouro: string | null
          municipio: string | null
          nfe_id: string | null
          nome_pais: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          company_id: string
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          identificacao_estrangeiro?: string | null
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          inscricao_municipal?: string | null
          inscricao_suframa?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          company_id?: string
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          identificacao_estrangeiro?: string | null
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          inscricao_municipal?: string | null
          inscricao_suframa?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome_pais?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_destinatario_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_destinatario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_destinatario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_destinatario_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_documentos_importacao: {
        Row: {
          cnpj_adquirente: string | null
          codigo_exportador: string | null
          data_desembaraco: string | null
          data_registro: string | null
          forma_intermediacao_importacao: number | null
          id: string
          item_id: string | null
          local_desembaraco: string | null
          numero_documento: string | null
          uf_adquirente: string | null
          uf_desembaraco: string | null
          valor_afrmm: number | null
          via_transporte: number | null
        }
        Insert: {
          cnpj_adquirente?: string | null
          codigo_exportador?: string | null
          data_desembaraco?: string | null
          data_registro?: string | null
          forma_intermediacao_importacao?: number | null
          id?: string
          item_id?: string | null
          local_desembaraco?: string | null
          numero_documento?: string | null
          uf_adquirente?: string | null
          uf_desembaraco?: string | null
          valor_afrmm?: number | null
          via_transporte?: number | null
        }
        Update: {
          cnpj_adquirente?: string | null
          codigo_exportador?: string | null
          data_desembaraco?: string | null
          data_registro?: string | null
          forma_intermediacao_importacao?: number | null
          id?: string
          item_id?: string | null
          local_desembaraco?: string | null
          numero_documento?: string | null
          uf_adquirente?: string | null
          uf_desembaraco?: string | null
          valor_afrmm?: number | null
          via_transporte?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_documentos_importacao_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_documentos_importacao_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_duplicatas: {
        Row: {
          cobranca_id: string | null
          data_vencimento: string | null
          id: string
          numero: string
          valor: number
        }
        Insert: {
          cobranca_id?: string | null
          data_vencimento?: string | null
          id?: string
          numero: string
          valor: number
        }
        Update: {
          cobranca_id?: string | null
          data_vencimento?: string | null
          id?: string
          numero?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "nfe_duplicatas_cobranca_id_fkey"
            columns: ["cobranca_id"]
            isOneToOne: false
            referencedRelation: "nfe_cobranca"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_emitente: {
        Row: {
          bairro: string | null
          cep: string | null
          cnae_fiscal: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_regime_tributario: number | null
          company_id: string
          complemento: string | null
          cpf: string | null
          id: string
          inscricao_estadual: string | null
          inscricao_estadual_st: string | null
          inscricao_municipal: string | null
          logradouro: string | null
          municipio: string | null
          nfe_id: string | null
          nome_fantasia: string | null
          numero: string | null
          razao_social: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnae_fiscal?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_regime_tributario?: number | null
          company_id: string
          complemento?: string | null
          cpf?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          inscricao_municipal?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnae_fiscal?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_regime_tributario?: number | null
          company_id?: string
          complemento?: string | null
          cpf?: string | null
          id?: string
          inscricao_estadual?: string | null
          inscricao_estadual_st?: string | null
          inscricao_municipal?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome_fantasia?: string | null
          numero?: string | null
          razao_social?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_emitente_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_emitente_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_emitente_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_emitente_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_exportacao: {
        Row: {
          chave_nfe: string | null
          id: string
          item_id: string | null
          numero_drawback: string | null
          numero_re: string | null
          quantidade_exportada: number | null
        }
        Insert: {
          chave_nfe?: string | null
          id?: string
          item_id?: string | null
          numero_drawback?: string | null
          numero_re?: string | null
          quantidade_exportada?: number | null
        }
        Update: {
          chave_nfe?: string | null
          id?: string
          item_id?: string | null
          numero_drawback?: string | null
          numero_re?: string | null
          quantidade_exportada?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_exportacao_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_exportacao_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_exportacao_info: {
        Row: {
          id: string
          local_despacho: string | null
          local_embarque: string | null
          nfe_id: string | null
          uf_embarque: string | null
        }
        Insert: {
          id?: string
          local_despacho?: string | null
          local_embarque?: string | null
          nfe_id?: string | null
          uf_embarque?: string | null
        }
        Update: {
          id?: string
          local_despacho?: string | null
          local_embarque?: string | null
          nfe_id?: string | null
          uf_embarque?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_exportacao_info_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_exportacao_info_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_exportacao_info_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_guias_transito: {
        Row: {
          agropecuario_id: string | null
          id: string
          numero_guia: number | null
          serie_guia: number | null
          tipo_guia: number
          uf_receituario: string | null
        }
        Insert: {
          agropecuario_id?: string | null
          id?: string
          numero_guia?: number | null
          serie_guia?: number | null
          tipo_guia: number
          uf_receituario?: string | null
        }
        Update: {
          agropecuario_id?: string | null
          id?: string
          numero_guia?: number | null
          serie_guia?: number | null
          tipo_guia?: number
          uf_receituario?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_guias_transito_agropecuario_id_fkey"
            columns: ["agropecuario_id"]
            isOneToOne: false
            referencedRelation: "nfe_agropecuario"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_icms_uf_destino: {
        Row: {
          aliquota_interestadual: number | null
          aliquota_interna: number | null
          id: string
          item_id: string | null
          percentual_fcp: number | null
          percentual_partilha: number | null
          valor_base_calculo: number | null
          valor_base_calculo_fcp: number | null
          valor_fcp: number | null
          valor_uf_destino: number | null
          valor_uf_remetente: number | null
        }
        Insert: {
          aliquota_interestadual?: number | null
          aliquota_interna?: number | null
          id?: string
          item_id?: string | null
          percentual_fcp?: number | null
          percentual_partilha?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_fcp?: number | null
          valor_fcp?: number | null
          valor_uf_destino?: number | null
          valor_uf_remetente?: number | null
        }
        Update: {
          aliquota_interestadual?: number | null
          aliquota_interna?: number | null
          id?: string
          item_id?: string | null
          percentual_fcp?: number | null
          percentual_partilha?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_fcp?: number | null
          valor_fcp?: number | null
          valor_uf_destino?: number | null
          valor_uf_remetente?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_icms_uf_destino_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_icms_uf_destino_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_cofins: {
        Row: {
          aliquota: number | null
          aliquota_reais: number | null
          aliquota_reais_st: number | null
          aliquota_st: number | null
          id: string
          item_id: string | null
          quantidade_vendida: number | null
          quantidade_vendida_st: number | null
          situacao_tributaria: string
          st_compoe_total: number | null
          valor: number | null
          valor_base_calculo: number | null
          valor_base_calculo_st: number | null
          valor_st: number | null
        }
        Insert: {
          aliquota?: number | null
          aliquota_reais?: number | null
          aliquota_reais_st?: number | null
          aliquota_st?: number | null
          id?: string
          item_id?: string | null
          quantidade_vendida?: number | null
          quantidade_vendida_st?: number | null
          situacao_tributaria: string
          st_compoe_total?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_st?: number | null
          valor_st?: number | null
        }
        Update: {
          aliquota?: number | null
          aliquota_reais?: number | null
          aliquota_reais_st?: number | null
          aliquota_st?: number | null
          id?: string
          item_id?: string | null
          quantidade_vendida?: number | null
          quantidade_vendida_st?: number | null
          situacao_tributaria?: string
          st_compoe_total?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_st?: number | null
          valor_st?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_cofins_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_cofins_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_fcp: {
        Row: {
          id: string
          item_id: string | null
          percentual: number | null
          percentual_diferimento: number | null
          percentual_retido_st: number | null
          percentual_st: number | null
          valor: number | null
          valor_base_calculo: number | null
          valor_base_calculo_retido_st: number | null
          valor_base_calculo_st: number | null
          valor_diferido: number | null
          valor_efetivo: number | null
          valor_retido_st: number | null
          valor_st: number | null
        }
        Insert: {
          id?: string
          item_id?: string | null
          percentual?: number | null
          percentual_diferimento?: number | null
          percentual_retido_st?: number | null
          percentual_st?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_retido_st?: number | null
          valor_base_calculo_st?: number | null
          valor_diferido?: number | null
          valor_efetivo?: number | null
          valor_retido_st?: number | null
          valor_st?: number | null
        }
        Update: {
          id?: string
          item_id?: string | null
          percentual?: number | null
          percentual_diferimento?: number | null
          percentual_retido_st?: number | null
          percentual_st?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_retido_st?: number | null
          valor_base_calculo_st?: number | null
          valor_diferido?: number | null
          valor_efetivo?: number | null
          valor_retido_st?: number | null
          valor_st?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_fcp_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_fcp_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_icms: {
        Row: {
          aliquota: number | null
          aliquota_credito_simples: number | null
          aliquota_final_consumidor: number | null
          aliquota_retencao: number | null
          codigo_beneficio_fiscal: string | null
          id: string
          item_id: string | null
          modalidade_base_calculo: number | null
          motivo_desoneracao: number | null
          origem: number
          percentual_diferimento: number | null
          percentual_reducao_base_calculo: number | null
          quantidade_tributada: number | null
          quantidade_tributada_retencao: number | null
          situacao_tributaria: string
          valor: number | null
          valor_base_calculo: number | null
          valor_credito_simples: number | null
          valor_desoneracao_deduzir: number | null
          valor_desonerado: number | null
          valor_diferido: number | null
          valor_operacao: number | null
          valor_proprio: number | null
          valor_retencao: number | null
        }
        Insert: {
          aliquota?: number | null
          aliquota_credito_simples?: number | null
          aliquota_final_consumidor?: number | null
          aliquota_retencao?: number | null
          codigo_beneficio_fiscal?: string | null
          id?: string
          item_id?: string | null
          modalidade_base_calculo?: number | null
          motivo_desoneracao?: number | null
          origem: number
          percentual_diferimento?: number | null
          percentual_reducao_base_calculo?: number | null
          quantidade_tributada?: number | null
          quantidade_tributada_retencao?: number | null
          situacao_tributaria: string
          valor?: number | null
          valor_base_calculo?: number | null
          valor_credito_simples?: number | null
          valor_desoneracao_deduzir?: number | null
          valor_desonerado?: number | null
          valor_diferido?: number | null
          valor_operacao?: number | null
          valor_proprio?: number | null
          valor_retencao?: number | null
        }
        Update: {
          aliquota?: number | null
          aliquota_credito_simples?: number | null
          aliquota_final_consumidor?: number | null
          aliquota_retencao?: number | null
          codigo_beneficio_fiscal?: string | null
          id?: string
          item_id?: string | null
          modalidade_base_calculo?: number | null
          motivo_desoneracao?: number | null
          origem?: number
          percentual_diferimento?: number | null
          percentual_reducao_base_calculo?: number | null
          quantidade_tributada?: number | null
          quantidade_tributada_retencao?: number | null
          situacao_tributaria?: string
          valor?: number | null
          valor_base_calculo?: number | null
          valor_credito_simples?: number | null
          valor_desoneracao_deduzir?: number | null
          valor_desonerado?: number | null
          valor_diferido?: number | null
          valor_operacao?: number | null
          valor_proprio?: number | null
          valor_retencao?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_icms_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_icms_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_icms_st: {
        Row: {
          aliquota_st: number | null
          icms_id: string | null
          id: string
          modalidade_base_calculo_st: number | null
          motivo_desoneracao_st: number | null
          percentual_base_calculo: number | null
          percentual_margem_valor_adicionado_st: number | null
          percentual_reducao_base_calculo_st: number | null
          uf_st: string | null
          valor_base_calculo_retido_uf_remetente: number | null
          valor_base_calculo_st: number | null
          valor_base_calculo_uf_destino: number | null
          valor_desonerado_st: number | null
          valor_icms_retido_uf_remetente: number | null
          valor_icms_uf_destino: number | null
          valor_st: number | null
        }
        Insert: {
          aliquota_st?: number | null
          icms_id?: string | null
          id?: string
          modalidade_base_calculo_st?: number | null
          motivo_desoneracao_st?: number | null
          percentual_base_calculo?: number | null
          percentual_margem_valor_adicionado_st?: number | null
          percentual_reducao_base_calculo_st?: number | null
          uf_st?: string | null
          valor_base_calculo_retido_uf_remetente?: number | null
          valor_base_calculo_st?: number | null
          valor_base_calculo_uf_destino?: number | null
          valor_desonerado_st?: number | null
          valor_icms_retido_uf_remetente?: number | null
          valor_icms_uf_destino?: number | null
          valor_st?: number | null
        }
        Update: {
          aliquota_st?: number | null
          icms_id?: string | null
          id?: string
          modalidade_base_calculo_st?: number | null
          motivo_desoneracao_st?: number | null
          percentual_base_calculo?: number | null
          percentual_margem_valor_adicionado_st?: number | null
          percentual_reducao_base_calculo_st?: number | null
          uf_st?: string | null
          valor_base_calculo_retido_uf_remetente?: number | null
          valor_base_calculo_st?: number | null
          valor_base_calculo_uf_destino?: number | null
          valor_desonerado_st?: number | null
          valor_icms_retido_uf_remetente?: number | null
          valor_icms_uf_destino?: number | null
          valor_st?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_icms_st_icms_id_fkey"
            columns: ["icms_id"]
            isOneToOne: false
            referencedRelation: "nfe_impostos_icms"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_ii: {
        Row: {
          id: string
          item_id: string | null
          valor: number | null
          valor_base_calculo: number | null
          valor_despesas_aduaneiras: number | null
          valor_iof: number | null
        }
        Insert: {
          id?: string
          item_id?: string | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_despesas_aduaneiras?: number | null
          valor_iof?: number | null
        }
        Update: {
          id?: string
          item_id?: string | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_despesas_aduaneiras?: number | null
          valor_iof?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_ii_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_ii_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_ipi: {
        Row: {
          aliquota: number | null
          cnpj_produtor: string | null
          codigo_enquadramento: string
          codigo_selo: string | null
          id: string
          item_id: string | null
          quantidade_selo: number | null
          quantidade_total: number | null
          situacao_tributaria: string
          valor: number | null
          valor_base_calculo: number | null
          valor_unidade: number | null
        }
        Insert: {
          aliquota?: number | null
          cnpj_produtor?: string | null
          codigo_enquadramento: string
          codigo_selo?: string | null
          id?: string
          item_id?: string | null
          quantidade_selo?: number | null
          quantidade_total?: number | null
          situacao_tributaria: string
          valor?: number | null
          valor_base_calculo?: number | null
          valor_unidade?: number | null
        }
        Update: {
          aliquota?: number | null
          cnpj_produtor?: string | null
          codigo_enquadramento?: string
          codigo_selo?: string | null
          id?: string
          item_id?: string | null
          quantidade_selo?: number | null
          quantidade_total?: number | null
          situacao_tributaria?: string
          valor?: number | null
          valor_base_calculo?: number | null
          valor_unidade?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_ipi_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_ipi_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_issqn: {
        Row: {
          aliquota: number | null
          codigo_municipio: number | null
          codigo_municipio_incidencia: number | null
          codigo_pais: number | null
          codigo_servico_municipio: string | null
          id: string
          indicador_exigibilidade: number | null
          indicador_incentivo_fiscal: number | null
          item_id: string | null
          item_lista_servicos: string | null
          numero_processo: string | null
          valor: number | null
          valor_base_calculo: number | null
          valor_deducao: number | null
          valor_desconto_condicionado: number | null
          valor_desconto_incondicionado: number | null
          valor_outras_retencoes: number | null
          valor_retencao: number | null
        }
        Insert: {
          aliquota?: number | null
          codigo_municipio?: number | null
          codigo_municipio_incidencia?: number | null
          codigo_pais?: number | null
          codigo_servico_municipio?: string | null
          id?: string
          indicador_exigibilidade?: number | null
          indicador_incentivo_fiscal?: number | null
          item_id?: string | null
          item_lista_servicos?: string | null
          numero_processo?: string | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_deducao?: number | null
          valor_desconto_condicionado?: number | null
          valor_desconto_incondicionado?: number | null
          valor_outras_retencoes?: number | null
          valor_retencao?: number | null
        }
        Update: {
          aliquota?: number | null
          codigo_municipio?: number | null
          codigo_municipio_incidencia?: number | null
          codigo_pais?: number | null
          codigo_servico_municipio?: string | null
          id?: string
          indicador_exigibilidade?: number | null
          indicador_incentivo_fiscal?: number | null
          item_id?: string | null
          item_lista_servicos?: string | null
          numero_processo?: string | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_deducao?: number | null
          valor_desconto_condicionado?: number | null
          valor_desconto_incondicionado?: number | null
          valor_outras_retencoes?: number | null
          valor_retencao?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_issqn_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_issqn_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_impostos_pis: {
        Row: {
          aliquota: number | null
          aliquota_reais: number | null
          aliquota_reais_st: number | null
          aliquota_st: number | null
          id: string
          item_id: string | null
          quantidade_vendida: number | null
          quantidade_vendida_st: number | null
          situacao_tributaria: string
          st_compoe_total: number | null
          valor: number | null
          valor_base_calculo: number | null
          valor_base_calculo_st: number | null
          valor_st: number | null
        }
        Insert: {
          aliquota?: number | null
          aliquota_reais?: number | null
          aliquota_reais_st?: number | null
          aliquota_st?: number | null
          id?: string
          item_id?: string | null
          quantidade_vendida?: number | null
          quantidade_vendida_st?: number | null
          situacao_tributaria: string
          st_compoe_total?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_st?: number | null
          valor_st?: number | null
        }
        Update: {
          aliquota?: number | null
          aliquota_reais?: number | null
          aliquota_reais_st?: number | null
          aliquota_st?: number | null
          id?: string
          item_id?: string | null
          quantidade_vendida?: number | null
          quantidade_vendida_st?: number | null
          situacao_tributaria?: string
          st_compoe_total?: number | null
          valor?: number | null
          valor_base_calculo?: number | null
          valor_base_calculo_st?: number | null
          valor_st?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_impostos_pis_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_impostos_pis_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_informacoes_adicionais: {
        Row: {
          cnpj_intermediador: string | null
          id: string
          identificador_intermediador: string | null
          informacoes_contribuinte: string | null
          informacoes_fisco: string | null
          nfe_id: string | null
        }
        Insert: {
          cnpj_intermediador?: string | null
          id?: string
          identificador_intermediador?: string | null
          informacoes_contribuinte?: string | null
          informacoes_fisco?: string | null
          nfe_id?: string | null
        }
        Update: {
          cnpj_intermediador?: string | null
          id?: string
          identificador_intermediador?: string | null
          informacoes_contribuinte?: string | null
          informacoes_fisco?: string | null
          nfe_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_informacoes_adicionais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_informacoes_adicionais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_informacoes_adicionais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_informacoes_suplementares: {
        Row: {
          id: string
          nfe_id: string | null
          qrcode: string | null
          url_consulta: string | null
        }
        Insert: {
          id?: string
          nfe_id?: string | null
          qrcode?: string | null
          url_consulta?: string | null
        }
        Update: {
          id?: string
          nfe_id?: string | null
          qrcode?: string | null
          url_consulta?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_informacoes_suplementares_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_informacoes_suplementares_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_informacoes_suplementares_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_itens: {
        Row: {
          cest: string | null
          cfop: string
          cnpj_fabricante: string | null
          codigo_barras_gtin: string | null
          codigo_barras_interno: string | null
          codigo_barras_tributavel: string | null
          codigo_barras_tributavel_interno: string | null
          codigo_beneficio_fiscal: string | null
          codigo_ex_tipi: string | null
          codigo_ncm: string | null
          codigo_produto: string | null
          compoe_valor_total: number | null
          descricao: string
          id: string
          indicador_escala_relevante: string | null
          informacoes_adicionais: string | null
          nfe_id: string | null
          numero_fci: string | null
          numero_item: number
          numero_item_pedido: number | null
          numero_pedido: string | null
          nve: string | null
          quantidade_comercial: number | null
          quantidade_tributavel: number | null
          unidade_comercial: string | null
          unidade_tributavel: string | null
          valor_bruto: number
          valor_desconto: number | null
          valor_frete: number | null
          valor_outras_despesas: number | null
          valor_seguro: number | null
          valor_total_tributos: number | null
          valor_unitario_comercial: number | null
          valor_unitario_tributavel: number | null
        }
        Insert: {
          cest?: string | null
          cfop: string
          cnpj_fabricante?: string | null
          codigo_barras_gtin?: string | null
          codigo_barras_interno?: string | null
          codigo_barras_tributavel?: string | null
          codigo_barras_tributavel_interno?: string | null
          codigo_beneficio_fiscal?: string | null
          codigo_ex_tipi?: string | null
          codigo_ncm?: string | null
          codigo_produto?: string | null
          compoe_valor_total?: number | null
          descricao: string
          id?: string
          indicador_escala_relevante?: string | null
          informacoes_adicionais?: string | null
          nfe_id?: string | null
          numero_fci?: string | null
          numero_item: number
          numero_item_pedido?: number | null
          numero_pedido?: string | null
          nve?: string | null
          quantidade_comercial?: number | null
          quantidade_tributavel?: number | null
          unidade_comercial?: string | null
          unidade_tributavel?: string | null
          valor_bruto: number
          valor_desconto?: number | null
          valor_frete?: number | null
          valor_outras_despesas?: number | null
          valor_seguro?: number | null
          valor_total_tributos?: number | null
          valor_unitario_comercial?: number | null
          valor_unitario_tributavel?: number | null
        }
        Update: {
          cest?: string | null
          cfop?: string
          cnpj_fabricante?: string | null
          codigo_barras_gtin?: string | null
          codigo_barras_interno?: string | null
          codigo_barras_tributavel?: string | null
          codigo_barras_tributavel_interno?: string | null
          codigo_beneficio_fiscal?: string | null
          codigo_ex_tipi?: string | null
          codigo_ncm?: string | null
          codigo_produto?: string | null
          compoe_valor_total?: number | null
          descricao?: string
          id?: string
          indicador_escala_relevante?: string | null
          informacoes_adicionais?: string | null
          nfe_id?: string | null
          numero_fci?: string | null
          numero_item?: number
          numero_item_pedido?: number | null
          numero_pedido?: string | null
          nve?: string | null
          quantidade_comercial?: number | null
          quantidade_tributavel?: number | null
          unidade_comercial?: string | null
          unidade_tributavel?: string | null
          valor_bruto?: number
          valor_desconto?: number | null
          valor_frete?: number | null
          valor_outras_despesas?: number | null
          valor_seguro?: number | null
          valor_total_tributos?: number | null
          valor_unitario_comercial?: number | null
          valor_unitario_tributavel?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_lacres: {
        Row: {
          id: string
          numero_lacre: string | null
          volume_id: string | null
        }
        Insert: {
          id?: string
          numero_lacre?: string | null
          volume_id?: string | null
        }
        Update: {
          id?: string
          numero_lacre?: string | null
          volume_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_lacres_volume_id_fkey"
            columns: ["volume_id"]
            isOneToOne: false
            referencedRelation: "nfe_volumes"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_local_entrega: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: number | null
          complemento: string | null
          cpf: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nfe_id: string | null
          nome: string | null
          nome_pais: string | null
          numero: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome?: string | null
          nome_pais?: string | null
          numero?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome?: string | null
          nome_pais?: string | null
          numero?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_local_entrega_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_local_entrega_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_local_entrega_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_local_retirada: {
        Row: {
          bairro: string | null
          cep: string | null
          cnpj: string | null
          codigo_municipio: number | null
          codigo_pais: number | null
          complemento: string | null
          cpf: string | null
          email: string | null
          id: string
          inscricao_estadual: string | null
          logradouro: string | null
          municipio: string | null
          nfe_id: string | null
          nome: string | null
          nome_pais: string | null
          numero: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome?: string | null
          nome_pais?: string | null
          numero?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cnpj?: string | null
          codigo_municipio?: number | null
          codigo_pais?: number | null
          complemento?: string | null
          cpf?: string | null
          email?: string | null
          id?: string
          inscricao_estadual?: string | null
          logradouro?: string | null
          municipio?: string | null
          nfe_id?: string | null
          nome?: string | null
          nome_pais?: string | null
          numero?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_local_retirada_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_local_retirada_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_local_retirada_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_medicamentos: {
        Row: {
          codigo_produto_anvisa: string | null
          id: string
          item_id: string | null
          motivo_isencao: string | null
          preco_maximo_consumidor: number | null
        }
        Insert: {
          codigo_produto_anvisa?: string | null
          id?: string
          item_id?: string | null
          motivo_isencao?: string | null
          preco_maximo_consumidor?: number | null
        }
        Update: {
          codigo_produto_anvisa?: string | null
          id?: string
          item_id?: string | null
          motivo_isencao?: string | null
          preco_maximo_consumidor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_medicamentos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_medicamentos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_notas_referenciadas: {
        Row: {
          chave_cte: string | null
          chave_nfe_referenciada: string | null
          cupom_modelo_documento: string | null
          cupom_numero_coo: number | null
          cupom_numero_ordem_ecf: number | null
          id: string
          nfe_id: string | null
          nfprod_ano_mes_emissao: string | null
          nfprod_cnpj_emitente: string | null
          nfprod_codigo_modelo: string | null
          nfprod_codigo_uf: number | null
          nfprod_cpf_emitente: string | null
          nfprod_inscricao_estadual: string | null
          nfprod_numero: number | null
          nfprod_serie: number | null
          ref_ano_mes_emissao: string | null
          ref_cnpj_emitente: string | null
          ref_codigo_modelo: string | null
          ref_codigo_uf: number | null
          ref_numero: number | null
          ref_serie: number | null
        }
        Insert: {
          chave_cte?: string | null
          chave_nfe_referenciada?: string | null
          cupom_modelo_documento?: string | null
          cupom_numero_coo?: number | null
          cupom_numero_ordem_ecf?: number | null
          id?: string
          nfe_id?: string | null
          nfprod_ano_mes_emissao?: string | null
          nfprod_cnpj_emitente?: string | null
          nfprod_codigo_modelo?: string | null
          nfprod_codigo_uf?: number | null
          nfprod_cpf_emitente?: string | null
          nfprod_inscricao_estadual?: string | null
          nfprod_numero?: number | null
          nfprod_serie?: number | null
          ref_ano_mes_emissao?: string | null
          ref_cnpj_emitente?: string | null
          ref_codigo_modelo?: string | null
          ref_codigo_uf?: number | null
          ref_numero?: number | null
          ref_serie?: number | null
        }
        Update: {
          chave_cte?: string | null
          chave_nfe_referenciada?: string | null
          cupom_modelo_documento?: string | null
          cupom_numero_coo?: number | null
          cupom_numero_ordem_ecf?: number | null
          id?: string
          nfe_id?: string | null
          nfprod_ano_mes_emissao?: string | null
          nfprod_cnpj_emitente?: string | null
          nfprod_codigo_modelo?: string | null
          nfprod_codigo_uf?: number | null
          nfprod_cpf_emitente?: string | null
          nfprod_inscricao_estadual?: string | null
          nfprod_numero?: number | null
          nfprod_serie?: number | null
          ref_ano_mes_emissao?: string | null
          ref_cnpj_emitente?: string | null
          ref_codigo_modelo?: string | null
          ref_codigo_uf?: number | null
          ref_numero?: number | null
          ref_serie?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_notas_referenciadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_notas_referenciadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_notas_referenciadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_pagamentos: {
        Row: {
          bandeira_cartao: string | null
          cnpj_beneficiario: string | null
          cnpj_credenciadora: string | null
          cnpj_transacao: string | null
          data_pagamento: string | null
          forma_pagamento: string
          id: string
          identificador_terminal: string | null
          indicador_pagamento: number
          meio_pagamento_descricao: string | null
          nfe_id: string | null
          numero_autorizacao: string | null
          tipo_integracao: number | null
          uf_transacao: string | null
          valor: number
          valor_troco: number | null
        }
        Insert: {
          bandeira_cartao?: string | null
          cnpj_beneficiario?: string | null
          cnpj_credenciadora?: string | null
          cnpj_transacao?: string | null
          data_pagamento?: string | null
          forma_pagamento: string
          id?: string
          identificador_terminal?: string | null
          indicador_pagamento: number
          meio_pagamento_descricao?: string | null
          nfe_id?: string | null
          numero_autorizacao?: string | null
          tipo_integracao?: number | null
          uf_transacao?: string | null
          valor: number
          valor_troco?: number | null
        }
        Update: {
          bandeira_cartao?: string | null
          cnpj_beneficiario?: string | null
          cnpj_credenciadora?: string | null
          cnpj_transacao?: string | null
          data_pagamento?: string | null
          forma_pagamento?: string
          id?: string
          identificador_terminal?: string | null
          indicador_pagamento?: number
          meio_pagamento_descricao?: string | null
          nfe_id?: string | null
          numero_autorizacao?: string | null
          tipo_integracao?: number | null
          uf_transacao?: string | null
          valor?: number
          valor_troco?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_pagamentos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_pagamentos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_pagamentos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_pessoas_autorizadas: {
        Row: {
          cnpj: string | null
          cpf: string | null
          id: string
          nfe_id: string | null
        }
        Insert: {
          cnpj?: string | null
          cpf?: string | null
          id?: string
          nfe_id?: string | null
        }
        Update: {
          cnpj?: string | null
          cpf?: string | null
          id?: string
          nfe_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_pessoas_autorizadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_pessoas_autorizadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_pessoas_autorizadas_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_processos_referenciados: {
        Row: {
          id: string
          identificador_processo: string
          indicador_origem: number
          nfe_id: string | null
          tipo_ato_concessorio: string | null
        }
        Insert: {
          id?: string
          identificador_processo: string
          indicador_origem: number
          nfe_id?: string | null
          tipo_ato_concessorio?: string | null
        }
        Update: {
          id?: string
          identificador_processo?: string
          indicador_origem?: number
          nfe_id?: string | null
          tipo_ato_concessorio?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_processos_referenciados_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_processos_referenciados_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_processos_referenciados_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_rastreabilidade: {
        Row: {
          codigo_agregacao: string | null
          data_fabricacao: string | null
          data_validade: string | null
          id: string
          item_id: string | null
          numero_lote: string | null
          quantidade_lote: number | null
        }
        Insert: {
          codigo_agregacao?: string | null
          data_fabricacao?: string | null
          data_validade?: string | null
          id?: string
          item_id?: string | null
          numero_lote?: string | null
          quantidade_lote?: number | null
        }
        Update: {
          codigo_agregacao?: string | null
          data_fabricacao?: string | null
          data_validade?: string | null
          id?: string
          item_id?: string | null
          numero_lote?: string | null
          quantidade_lote?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_rastreabilidade_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_rastreabilidade_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_reboques: {
        Row: {
          id: string
          placa_veiculo: string | null
          rntc: string | null
          transporte_id: string | null
          uf_veiculo: string | null
        }
        Insert: {
          id?: string
          placa_veiculo?: string | null
          rntc?: string | null
          transporte_id?: string | null
          uf_veiculo?: string | null
        }
        Update: {
          id?: string
          placa_veiculo?: string | null
          rntc?: string | null
          transporte_id?: string | null
          uf_veiculo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_reboques_transporte_id_fkey"
            columns: ["transporte_id"]
            isOneToOne: false
            referencedRelation: "nfe_transporte"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_responsavel_tecnico: {
        Row: {
          cnpj: string
          contato: string
          email: string
          id: string
          nfe_id: string | null
          telefone: string | null
        }
        Insert: {
          cnpj: string
          contato: string
          email: string
          id?: string
          nfe_id?: string | null
          telefone?: string | null
        }
        Update: {
          cnpj?: string
          contato?: string
          email?: string
          id?: string
          nfe_id?: string | null
          telefone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_responsavel_tecnico_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_responsavel_tecnico_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_responsavel_tecnico_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_retencoes_tributos: {
        Row: {
          base_calculo_irrf: number | null
          base_calculo_previdencia: number | null
          id: string
          nfe_id: string | null
          valor_retido_cofins: number | null
          valor_retido_csll: number | null
          valor_retido_irrf: number | null
          valor_retido_pis: number | null
          valor_retido_previdencia: number | null
        }
        Insert: {
          base_calculo_irrf?: number | null
          base_calculo_previdencia?: number | null
          id?: string
          nfe_id?: string | null
          valor_retido_cofins?: number | null
          valor_retido_csll?: number | null
          valor_retido_irrf?: number | null
          valor_retido_pis?: number | null
          valor_retido_previdencia?: number | null
        }
        Update: {
          base_calculo_irrf?: number | null
          base_calculo_previdencia?: number | null
          id?: string
          nfe_id?: string | null
          valor_retido_cofins?: number | null
          valor_retido_csll?: number | null
          valor_retido_irrf?: number | null
          valor_retido_pis?: number | null
          valor_retido_previdencia?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_retencoes_tributos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_retencoes_tributos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_retencoes_tributos_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_totais: {
        Row: {
          base_calculo_issqn: number | null
          codigo_regime_especial: number | null
          data_prestacao_servico: string | null
          fcp_valor: number | null
          fcp_valor_retido_st: number | null
          fcp_valor_st: number | null
          fcp_valor_uf_destino: number | null
          icms_base_calculo: number | null
          icms_base_calculo_st: number | null
          icms_qtde_tributada_proprio: number | null
          icms_qtde_tributada_retencao: number | null
          icms_qtde_tributada_retido: number | null
          icms_valor: number | null
          icms_valor_desonerado: number | null
          icms_valor_proprio: number | null
          icms_valor_retencao: number | null
          icms_valor_retido: number | null
          icms_valor_st: number | null
          icms_valor_uf_destino: number | null
          icms_valor_uf_remetente: number | null
          id: string
          nfe_id: string | null
          valor_cofins: number | null
          valor_cofins_servicos: number | null
          valor_desconto: number | null
          valor_frete: number | null
          valor_ipi: number | null
          valor_ipi_devolvido: number | null
          valor_issqn: number | null
          valor_outras_despesas: number | null
          valor_pis: number | null
          valor_pis_servicos: number | null
          valor_produtos: number | null
          valor_seguro: number | null
          valor_servicos: number | null
          valor_total: number
          valor_total_deducoes: number | null
          valor_total_desconto_condicionado: number | null
          valor_total_desconto_incondicionado: number | null
          valor_total_ii: number | null
          valor_total_outras_retencoes: number | null
          valor_total_retencao_iss: number | null
          valor_total_tributos: number | null
        }
        Insert: {
          base_calculo_issqn?: number | null
          codigo_regime_especial?: number | null
          data_prestacao_servico?: string | null
          fcp_valor?: number | null
          fcp_valor_retido_st?: number | null
          fcp_valor_st?: number | null
          fcp_valor_uf_destino?: number | null
          icms_base_calculo?: number | null
          icms_base_calculo_st?: number | null
          icms_qtde_tributada_proprio?: number | null
          icms_qtde_tributada_retencao?: number | null
          icms_qtde_tributada_retido?: number | null
          icms_valor?: number | null
          icms_valor_desonerado?: number | null
          icms_valor_proprio?: number | null
          icms_valor_retencao?: number | null
          icms_valor_retido?: number | null
          icms_valor_st?: number | null
          icms_valor_uf_destino?: number | null
          icms_valor_uf_remetente?: number | null
          id?: string
          nfe_id?: string | null
          valor_cofins?: number | null
          valor_cofins_servicos?: number | null
          valor_desconto?: number | null
          valor_frete?: number | null
          valor_ipi?: number | null
          valor_ipi_devolvido?: number | null
          valor_issqn?: number | null
          valor_outras_despesas?: number | null
          valor_pis?: number | null
          valor_pis_servicos?: number | null
          valor_produtos?: number | null
          valor_seguro?: number | null
          valor_servicos?: number | null
          valor_total: number
          valor_total_deducoes?: number | null
          valor_total_desconto_condicionado?: number | null
          valor_total_desconto_incondicionado?: number | null
          valor_total_ii?: number | null
          valor_total_outras_retencoes?: number | null
          valor_total_retencao_iss?: number | null
          valor_total_tributos?: number | null
        }
        Update: {
          base_calculo_issqn?: number | null
          codigo_regime_especial?: number | null
          data_prestacao_servico?: string | null
          fcp_valor?: number | null
          fcp_valor_retido_st?: number | null
          fcp_valor_st?: number | null
          fcp_valor_uf_destino?: number | null
          icms_base_calculo?: number | null
          icms_base_calculo_st?: number | null
          icms_qtde_tributada_proprio?: number | null
          icms_qtde_tributada_retencao?: number | null
          icms_qtde_tributada_retido?: number | null
          icms_valor?: number | null
          icms_valor_desonerado?: number | null
          icms_valor_proprio?: number | null
          icms_valor_retencao?: number | null
          icms_valor_retido?: number | null
          icms_valor_st?: number | null
          icms_valor_uf_destino?: number | null
          icms_valor_uf_remetente?: number | null
          id?: string
          nfe_id?: string | null
          valor_cofins?: number | null
          valor_cofins_servicos?: number | null
          valor_desconto?: number | null
          valor_frete?: number | null
          valor_ipi?: number | null
          valor_ipi_devolvido?: number | null
          valor_issqn?: number | null
          valor_outras_despesas?: number | null
          valor_pis?: number | null
          valor_pis_servicos?: number | null
          valor_produtos?: number | null
          valor_seguro?: number | null
          valor_servicos?: number | null
          valor_total?: number
          valor_total_deducoes?: number | null
          valor_total_desconto_condicionado?: number | null
          valor_total_desconto_incondicionado?: number | null
          valor_total_ii?: number | null
          valor_total_outras_retencoes?: number | null
          valor_total_retencao_iss?: number | null
          valor_total_tributos?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_totais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_totais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_totais_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_transporte: {
        Row: {
          aliquota_retencao: number | null
          balsa: string | null
          cfop: string | null
          cnpj_transportador: string | null
          codigo_municipio: number | null
          cpf_transportador: string | null
          endereco_completo_transportador: string | null
          id: string
          inscricao_estadual_transportador: string | null
          modalidade_frete: number
          municipio_transportador: string | null
          nfe_id: string | null
          placa_veiculo: string | null
          razao_social_transportador: string | null
          rntc: string | null
          uf_transportador: string | null
          uf_veiculo: string | null
          vagao: string | null
          valor_base_calculo_retencao: number | null
          valor_icms_retido: number | null
          valor_servico: number | null
        }
        Insert: {
          aliquota_retencao?: number | null
          balsa?: string | null
          cfop?: string | null
          cnpj_transportador?: string | null
          codigo_municipio?: number | null
          cpf_transportador?: string | null
          endereco_completo_transportador?: string | null
          id?: string
          inscricao_estadual_transportador?: string | null
          modalidade_frete: number
          municipio_transportador?: string | null
          nfe_id?: string | null
          placa_veiculo?: string | null
          razao_social_transportador?: string | null
          rntc?: string | null
          uf_transportador?: string | null
          uf_veiculo?: string | null
          vagao?: string | null
          valor_base_calculo_retencao?: number | null
          valor_icms_retido?: number | null
          valor_servico?: number | null
        }
        Update: {
          aliquota_retencao?: number | null
          balsa?: string | null
          cfop?: string | null
          cnpj_transportador?: string | null
          codigo_municipio?: number | null
          cpf_transportador?: string | null
          endereco_completo_transportador?: string | null
          id?: string
          inscricao_estadual_transportador?: string | null
          modalidade_frete?: number
          municipio_transportador?: string | null
          nfe_id?: string | null
          placa_veiculo?: string | null
          razao_social_transportador?: string | null
          rntc?: string | null
          uf_transportador?: string | null
          uf_veiculo?: string | null
          vagao?: string | null
          valor_base_calculo_retencao?: number | null
          valor_icms_retido?: number | null
          valor_servico?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_transporte_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_transporte_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_transporte_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_veiculos: {
        Row: {
          ano_fabricacao: number | null
          ano_modelo: number | null
          capacidade_maxima_tracao: number | null
          chassi: string | null
          cilindrada: number | null
          codigo_cor_denatran: string | null
          codigo_marca_modelo: string | null
          condicao_veiculo: number | null
          cor_codigo: string | null
          cor_descricao: string | null
          distancia_eixos: number | null
          especie_veiculo: number | null
          id: string
          item_id: string | null
          lotacao_maxima: number | null
          numero_motor: string | null
          numero_serie: string | null
          peso_bruto: number | null
          peso_liquido: number | null
          potencia_motor: number | null
          restricao: string | null
          tipo_combustivel: string | null
          tipo_operacao: number | null
          tipo_pintura: string | null
          tipo_veiculo: string | null
          vin_remarcado: string | null
        }
        Insert: {
          ano_fabricacao?: number | null
          ano_modelo?: number | null
          capacidade_maxima_tracao?: number | null
          chassi?: string | null
          cilindrada?: number | null
          codigo_cor_denatran?: string | null
          codigo_marca_modelo?: string | null
          condicao_veiculo?: number | null
          cor_codigo?: string | null
          cor_descricao?: string | null
          distancia_eixos?: number | null
          especie_veiculo?: number | null
          id?: string
          item_id?: string | null
          lotacao_maxima?: number | null
          numero_motor?: string | null
          numero_serie?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          potencia_motor?: number | null
          restricao?: string | null
          tipo_combustivel?: string | null
          tipo_operacao?: number | null
          tipo_pintura?: string | null
          tipo_veiculo?: string | null
          vin_remarcado?: string | null
        }
        Update: {
          ano_fabricacao?: number | null
          ano_modelo?: number | null
          capacidade_maxima_tracao?: number | null
          chassi?: string | null
          cilindrada?: number | null
          codigo_cor_denatran?: string | null
          codigo_marca_modelo?: string | null
          condicao_veiculo?: number | null
          cor_codigo?: string | null
          cor_descricao?: string | null
          distancia_eixos?: number | null
          especie_veiculo?: number | null
          id?: string
          item_id?: string | null
          lotacao_maxima?: number | null
          numero_motor?: string | null
          numero_serie?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          potencia_motor?: number | null
          restricao?: string | null
          tipo_combustivel?: string | null
          tipo_operacao?: number | null
          tipo_pintura?: string | null
          tipo_veiculo?: string | null
          vin_remarcado?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_veiculos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "nfe_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_veiculos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_itens_impostos"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_volumes: {
        Row: {
          especie: string | null
          id: string
          marca: string | null
          numeracao: string | null
          peso_bruto: number | null
          peso_liquido: number | null
          quantidade: number | null
          transporte_id: string | null
        }
        Insert: {
          especie?: string | null
          id?: string
          marca?: string | null
          numeracao?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          quantidade?: number | null
          transporte_id?: string | null
        }
        Update: {
          especie?: string | null
          id?: string
          marca?: string | null
          numeracao?: string | null
          peso_bruto?: number | null
          peso_liquido?: number | null
          quantidade?: number | null
          transporte_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_volumes_transporte_id_fkey"
            columns: ["transporte_id"]
            isOneToOne: false
            referencedRelation: "nfe_transporte"
            referencedColumns: ["id"]
          },
        ]
      }
      nfe_xml_storage: {
        Row: {
          company_id: string
          created_at: string
          file_name: string
          file_size: number
          id: string
          nfe_id: string
          updated_at: string
          upload_date: string
          xml_content: string
        }
        Insert: {
          company_id: string
          created_at?: string
          file_name: string
          file_size?: number
          id?: string
          nfe_id: string
          updated_at?: string
          upload_date?: string
          xml_content: string
        }
        Update: {
          company_id?: string
          created_at?: string
          file_name?: string
          file_size?: number
          id?: string
          nfe_id?: string
          updated_at?: string
          upload_date?: string
          xml_content?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_nfe_xml_storage_nfe_id"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_nfe_xml_storage_nfe_id"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_nfe_xml_storage_nfe_id"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      product_suppliers: {
        Row: {
          company_id: string
          conversion_factor: number
          created_at: string
          id: string
          notes: string | null
          product_id: string
          supplier_code: string | null
          supplier_id: string
          supplier_product_name: string | null
          supplier_sku: string
          supplier_unit_measure: string
          updated_at: string
          variation_id: string | null
        }
        Insert: {
          company_id: string
          conversion_factor?: number
          created_at?: string
          id?: string
          notes?: string | null
          product_id: string
          supplier_code?: string | null
          supplier_id: string
          supplier_product_name?: string | null
          supplier_sku: string
          supplier_unit_measure: string
          updated_at?: string
          variation_id?: string | null
        }
        Update: {
          company_id?: string
          conversion_factor?: number
          created_at?: string
          id?: string
          notes?: string | null
          product_id?: string
          supplier_code?: string | null
          supplier_id?: string
          supplier_product_name?: string | null
          supplier_sku?: string
          supplier_unit_measure?: string
          updated_at?: string
          variation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_suppliers_variation_id_fkey"
            columns: ["variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
        ]
      }
      product_technical_sheets: {
        Row: {
          company_id: string
          created_at: string
          description: string | null
          has_variations: boolean | null
          id: string
          product_code: string
          provisional_name: string
          sheet_code: string
          status: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          description?: string | null
          has_variations?: boolean | null
          id?: string
          product_code: string
          provisional_name: string
          sheet_code: string
          status?: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          description?: string | null
          has_variations?: boolean | null
          id?: string
          product_code?: string
          provisional_name?: string
          sheet_code?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      product_variations: {
        Row: {
          additional_cost: number | null
          cest: string | null
          color_id: string | null
          company_id: string
          copy_from_parent: boolean | null
          cost: number | null
          created_at: string
          depth: number | null
          execution_time_minutes: number | null
          gtin_ean: string | null
          gtin_ean_tax: string | null
          has_icms_st: boolean | null
          height: number | null
          id: string
          images: Json | null
          item_type: string | null
          max_stock: number | null
          min_stock: number | null
          name: string
          ncm: string | null
          notes: string | null
          price: number | null
          product_id: string
          purchase_group: string | null
          sales_group: string | null
          service_category_id: string | null
          service_modality_id: string | null
          size_id: string | null
          sku: string | null
          suppliers: Json | null
          tags: string[] | null
          tax_origin: string | null
          unit_of_measure: string | null
          updated_at: string
          weight: number | null
          width: number | null
        }
        Insert: {
          additional_cost?: number | null
          cest?: string | null
          color_id?: string | null
          company_id: string
          copy_from_parent?: boolean | null
          cost?: number | null
          created_at?: string
          depth?: number | null
          execution_time_minutes?: number | null
          gtin_ean?: string | null
          gtin_ean_tax?: string | null
          has_icms_st?: boolean | null
          height?: number | null
          id?: string
          images?: Json | null
          item_type?: string | null
          max_stock?: number | null
          min_stock?: number | null
          name: string
          ncm?: string | null
          notes?: string | null
          price?: number | null
          product_id: string
          purchase_group?: string | null
          sales_group?: string | null
          service_category_id?: string | null
          service_modality_id?: string | null
          size_id?: string | null
          sku?: string | null
          suppliers?: Json | null
          tags?: string[] | null
          tax_origin?: string | null
          unit_of_measure?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Update: {
          additional_cost?: number | null
          cest?: string | null
          color_id?: string | null
          company_id?: string
          copy_from_parent?: boolean | null
          cost?: number | null
          created_at?: string
          depth?: number | null
          execution_time_minutes?: number | null
          gtin_ean?: string | null
          gtin_ean_tax?: string | null
          has_icms_st?: boolean | null
          height?: number | null
          id?: string
          images?: Json | null
          item_type?: string | null
          max_stock?: number | null
          min_stock?: number | null
          name?: string
          ncm?: string | null
          notes?: string | null
          price?: number | null
          product_id?: string
          purchase_group?: string | null
          sales_group?: string | null
          service_category_id?: string | null
          service_modality_id?: string | null
          size_id?: string | null
          sku?: string | null
          suppliers?: Json | null
          tags?: string[] | null
          tax_origin?: string | null
          unit_of_measure?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_product_variations_color"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "colors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_product_variations_service_category"
            columns: ["service_category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_product_variations_service_modality"
            columns: ["service_modality_id"]
            isOneToOne: false
            referencedRelation: "service_modalities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_product_variations_size"
            columns: ["size_id"]
            isOneToOne: false
            referencedRelation: "sizes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_variations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      production_sectors: {
        Row: {
          code: string
          company_id: string
          created_at: string
          description: string | null
          id: string
          name: string
          sector_type: string
          status: string
          supplier_id: string | null
          updated_at: string
        }
        Insert: {
          code: string
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          sector_type?: string
          status?: string
          supplier_id?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          sector_type?: string
          status?: string
          supplier_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "production_sectors_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_sectors_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_basic"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_sectors_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_full"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_sectors_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_sensitive"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          cest: string | null
          charge_type: string | null
          commission_percent: number | null
          company_id: string
          cost: number | null
          created_at: string
          created_by: string
          depth: number | null
          description: string | null
          difficulty_level: string | null
          execution_time_minutes: number | null
          format_type: string | null
          gtin_ean: string | null
          gtin_ean_tax: string | null
          has_icms_st: boolean | null
          height: number | null
          id: string
          images: Json | null
          item_type: string | null
          max_discount_percent: number | null
          max_stock: number | null
          min_stock: number | null
          name: string
          ncm: string | null
          price: number | null
          purchase_group: string | null
          required_equipment: Json | null
          requires_scheduling: boolean | null
          sales_group: string | null
          service_category_id: string | null
          sku_parent: string | null
          suppliers: Json | null
          tags: string[] | null
          tax_origin: string | null
          type: string
          unit_of_measure: string | null
          updated_at: string
          weight: number | null
          width: number | null
        }
        Insert: {
          cest?: string | null
          charge_type?: string | null
          commission_percent?: number | null
          company_id: string
          cost?: number | null
          created_at?: string
          created_by: string
          depth?: number | null
          description?: string | null
          difficulty_level?: string | null
          execution_time_minutes?: number | null
          format_type?: string | null
          gtin_ean?: string | null
          gtin_ean_tax?: string | null
          has_icms_st?: boolean | null
          height?: number | null
          id?: string
          images?: Json | null
          item_type?: string | null
          max_discount_percent?: number | null
          max_stock?: number | null
          min_stock?: number | null
          name: string
          ncm?: string | null
          price?: number | null
          purchase_group?: string | null
          required_equipment?: Json | null
          requires_scheduling?: boolean | null
          sales_group?: string | null
          service_category_id?: string | null
          sku_parent?: string | null
          suppliers?: Json | null
          tags?: string[] | null
          tax_origin?: string | null
          type?: string
          unit_of_measure?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Update: {
          cest?: string | null
          charge_type?: string | null
          commission_percent?: number | null
          company_id?: string
          cost?: number | null
          created_at?: string
          created_by?: string
          depth?: number | null
          description?: string | null
          difficulty_level?: string | null
          execution_time_minutes?: number | null
          format_type?: string | null
          gtin_ean?: string | null
          gtin_ean_tax?: string | null
          has_icms_st?: boolean | null
          height?: number | null
          id?: string
          images?: Json | null
          item_type?: string | null
          max_discount_percent?: number | null
          max_stock?: number | null
          min_stock?: number | null
          name?: string
          ncm?: string | null
          price?: number | null
          purchase_group?: string | null
          required_equipment?: Json | null
          requires_scheduling?: boolean | null
          sales_group?: string | null
          service_category_id?: string | null
          sku_parent?: string | null
          suppliers?: Json | null
          tags?: string[] | null
          tax_origin?: string | null
          type?: string
          unit_of_measure?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          is_admin: boolean
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      prospect_companies: {
        Row: {
          capital_social: number | null
          cnae_fiscal: string | null
          cnae_fiscal_descricao: string | null
          cnpj: string
          cnpj_raiz: string | null
          codigo_natureza_juridica: string | null
          company_id: string
          created_at: string | null
          data_abertura: string | null
          data_primeiro_contato: string | null
          data_ultimo_contato: string | null
          descricao_natureza_juridica: string | null
          endereco: Json | null
          filial_numero: number | null
          id: string
          imported_at: string | null
          matriz_filial: string | null
          nome_fantasia: string | null
          observacoes: string | null
          origem_consulta: string | null
          porte_empresa: Json | null
          prioridade: string | null
          quadro_societario: Json | null
          qualificacao_responsavel: Json | null
          razao_social: string | null
          responsavel_id: string | null
          situacao_cadastral: Json | null
          situacao_especial: Json | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          capital_social?: number | null
          cnae_fiscal?: string | null
          cnae_fiscal_descricao?: string | null
          cnpj: string
          cnpj_raiz?: string | null
          codigo_natureza_juridica?: string | null
          company_id: string
          created_at?: string | null
          data_abertura?: string | null
          data_primeiro_contato?: string | null
          data_ultimo_contato?: string | null
          descricao_natureza_juridica?: string | null
          endereco?: Json | null
          filial_numero?: number | null
          id?: string
          imported_at?: string | null
          matriz_filial?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          origem_consulta?: string | null
          porte_empresa?: Json | null
          prioridade?: string | null
          quadro_societario?: Json | null
          qualificacao_responsavel?: Json | null
          razao_social?: string | null
          responsavel_id?: string | null
          situacao_cadastral?: Json | null
          situacao_especial?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          capital_social?: number | null
          cnae_fiscal?: string | null
          cnae_fiscal_descricao?: string | null
          cnpj?: string
          cnpj_raiz?: string | null
          codigo_natureza_juridica?: string | null
          company_id?: string
          created_at?: string | null
          data_abertura?: string | null
          data_primeiro_contato?: string | null
          data_ultimo_contato?: string | null
          descricao_natureza_juridica?: string | null
          endereco?: Json | null
          filial_numero?: number | null
          id?: string
          imported_at?: string | null
          matriz_filial?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          origem_consulta?: string | null
          porte_empresa?: Json | null
          prioridade?: string | null
          quadro_societario?: Json | null
          qualificacao_responsavel?: Json | null
          razao_social?: string | null
          responsavel_id?: string | null
          situacao_cadastral?: Json | null
          situacao_especial?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      purchase_contracts: {
        Row: {
          company_id: string
          contract_type: string
          created_at: string
          delivery_terms: string | null
          end_date: string | null
          fixed_price: number | null
          freight_type: string | null
          id: string
          notes: string | null
          payment_terms: string | null
          price_formula: string | null
          product_id: string
          start_date: string
          status: string
          supplier_id: string
          updated_at: string
          variation_id: string | null
        }
        Insert: {
          company_id: string
          contract_type: string
          created_at?: string
          delivery_terms?: string | null
          end_date?: string | null
          fixed_price?: number | null
          freight_type?: string | null
          id?: string
          notes?: string | null
          payment_terms?: string | null
          price_formula?: string | null
          product_id: string
          start_date: string
          status?: string
          supplier_id: string
          updated_at?: string
          variation_id?: string | null
        }
        Update: {
          company_id?: string
          contract_type?: string
          created_at?: string
          delivery_terms?: string | null
          end_date?: string | null
          fixed_price?: number | null
          freight_type?: string | null
          id?: string
          notes?: string | null
          payment_terms?: string | null
          price_formula?: string | null
          product_id?: string
          start_date?: string
          status?: string
          supplier_id?: string
          updated_at?: string
          variation_id?: string | null
        }
        Relationships: []
      }
      quotation_suppliers: {
        Row: {
          company_id: string
          contact_name: string
          converted_to_client_supplier_id: string | null
          created_at: string
          email: string
          id: string
          name: string
          status: string
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          company_id: string
          contact_name: string
          converted_to_client_supplier_id?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          status?: string
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          company_id?: string
          contact_name?: string
          converted_to_client_supplier_id?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          status?: string
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      sector_suppliers: {
        Row: {
          company_id: string
          created_at: string
          id: string
          sector_id: string
          subsector_id: string | null
          supplier_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          sector_id: string
          subsector_id?: string | null
          supplier_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          sector_id?: string
          subsector_id?: string | null
          supplier_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sector_suppliers_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sector_suppliers_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sector_suppliers_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_basic"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sector_suppliers_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_full"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sector_suppliers_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_sensitive"
            referencedColumns: ["id"]
          },
        ]
      }
      service_categories: {
        Row: {
          code: string
          company_id: string
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          code: string
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          code?: string
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      service_modalities: {
        Row: {
          code: string
          company_id: string
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          code: string
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          code?: string
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      sheet_assembly_steps: {
        Row: {
          created_at: string
          id: string
          material_id: string | null
          material_quantity: number | null
          needs_quotation: boolean
          order_position: number
          production_time_hours: number | null
          quotation_image_url: string | null
          quotation_product_name: string | null
          quotation_unit_measure: string | null
          sheet_id: string
          step_name: string
          variation_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          material_id?: string | null
          material_quantity?: number | null
          needs_quotation?: boolean
          order_position?: number
          production_time_hours?: number | null
          quotation_image_url?: string | null
          quotation_product_name?: string | null
          quotation_unit_measure?: string | null
          sheet_id: string
          step_name: string
          variation_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          material_id?: string | null
          material_quantity?: number | null
          needs_quotation?: boolean
          order_position?: number
          production_time_hours?: number | null
          quotation_image_url?: string | null
          quotation_product_name?: string | null
          quotation_unit_measure?: string | null
          sheet_id?: string
          step_name?: string
          variation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sheet_assembly_steps_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_assembly_steps_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_assembly_steps_variation_id_fkey"
            columns: ["variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
        ]
      }
      sheet_attention_points: {
        Row: {
          created_at: string
          description: string
          id: string
          is_completed: boolean
          order_position: number
          sheet_id: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_completed?: boolean
          order_position?: number
          sheet_id: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_completed?: boolean
          order_position?: number
          sheet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sheet_attention_points_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
        ]
      }
      sheet_inspiration_images: {
        Row: {
          created_at: string
          id: string
          image_name: string
          image_url: string
          order_position: number
          sheet_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_name: string
          image_url: string
          order_position?: number
          sheet_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_name?: string
          image_url?: string
          order_position?: number
          sheet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sheet_inspiration_images_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
        ]
      }
      sheet_production_sequences: {
        Row: {
          created_at: string
          id: string
          parent_process_id: string | null
          process_version: string | null
          sector_id: string
          sequence_order: number
          sheet_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          parent_process_id?: string | null
          process_version?: string | null
          sector_id: string
          sequence_order: number
          sheet_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          parent_process_id?: string | null
          process_version?: string | null
          sector_id?: string
          sequence_order?: number
          sheet_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sheet_production_sequences_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_production_sequences_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
        ]
      }
      sheet_quotation_requests: {
        Row: {
          assembly_step_id: string
          created_at: string
          email_sent_at: string | null
          id: string
          prospect_supplier_id: string | null
          sheet_id: string
          status: string
          supplier_id: string | null
          supplier_type: string
          updated_at: string
        }
        Insert: {
          assembly_step_id: string
          created_at?: string
          email_sent_at?: string | null
          id?: string
          prospect_supplier_id?: string | null
          sheet_id: string
          status?: string
          supplier_id?: string | null
          supplier_type?: string
          updated_at?: string
        }
        Update: {
          assembly_step_id?: string
          created_at?: string
          email_sent_at?: string | null
          id?: string
          prospect_supplier_id?: string | null
          sheet_id?: string
          status?: string
          supplier_id?: string | null
          supplier_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_prospect_supplier"
            columns: ["prospect_supplier_id"]
            isOneToOne: false
            referencedRelation: "quotation_suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_assembly_step_id_fkey"
            columns: ["assembly_step_id"]
            isOneToOne: false
            referencedRelation: "sheet_assembly_steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_basic"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_full"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_quotation_requests_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "clients_suppliers_sensitive"
            referencedColumns: ["id"]
          },
        ]
      }
      sheet_variations: {
        Row: {
          color_id: string | null
          created_at: string
          id: string
          sheet_id: string
          size_id: string | null
        }
        Insert: {
          color_id?: string | null
          created_at?: string
          id?: string
          sheet_id: string
          size_id?: string | null
        }
        Update: {
          color_id?: string | null
          created_at?: string
          id?: string
          sheet_id?: string
          size_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sheet_variations_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "colors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_variations_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "product_technical_sheets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sheet_variations_size_id_fkey"
            columns: ["size_id"]
            isOneToOne: false
            referencedRelation: "sizes"
            referencedColumns: ["id"]
          },
        ]
      }
      size_categories: {
        Row: {
          company_id: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      sizes: {
        Row: {
          abbreviation: string | null
          category_id: string | null
          company_id: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          abbreviation?: string | null
          category_id?: string | null
          company_id: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          abbreviation?: string | null
          category_id?: string | null
          company_id?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "sizes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_movements: {
        Row: {
          allocated_quantity: number
          available_balance: number
          company_id: string
          created_at: string
          created_by: string | null
          id: string
          lot_number: string | null
          movement_date: string
          movement_type: string
          notes: string | null
          operation_type: string
          product_id: string
          quantity: number
          reference_document: string | null
          stock_balance: number
          total_cost: number | null
          unit_cost: number | null
          updated_at: string
          variation_id: string | null
        }
        Insert: {
          allocated_quantity?: number
          available_balance?: number
          company_id: string
          created_at?: string
          created_by?: string | null
          id?: string
          lot_number?: string | null
          movement_date?: string
          movement_type: string
          notes?: string | null
          operation_type: string
          product_id: string
          quantity: number
          reference_document?: string | null
          stock_balance?: number
          total_cost?: number | null
          unit_cost?: number | null
          updated_at?: string
          variation_id?: string | null
        }
        Update: {
          allocated_quantity?: number
          available_balance?: number
          company_id?: string
          created_at?: string
          created_by?: string | null
          id?: string
          lot_number?: string | null
          movement_date?: string
          movement_type?: string
          notes?: string | null
          operation_type?: string
          product_id?: string
          quantity?: number
          reference_document?: string | null
          stock_balance?: number
          total_cost?: number | null
          unit_cost?: number | null
          updated_at?: string
          variation_id?: string | null
        }
        Relationships: []
      }
      subsectors: {
        Row: {
          company_id: string
          created_at: string
          description: string | null
          id: string
          name: string
          sector_id: string
          sector_type: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          sector_id: string
          sector_type?: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          sector_id?: string
          sector_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      teste: {
        Row: {
          id: string
          nome: string | null
        }
        Insert: {
          id?: string
          nome?: string | null
        }
        Update: {
          id?: string
          nome?: string | null
        }
        Relationships: []
      }
      user_approvals: {
        Row: {
          approved_by: string
          created_at: string
          id: string
          reason: string | null
          status: string
          user_id: string
        }
        Insert: {
          approved_by: string
          created_at?: string
          id?: string
          reason?: string | null
          status: string
          user_id: string
        }
        Update: {
          approved_by?: string
          created_at?: string
          id?: string
          reason?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_approvals_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_approvals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          company_id: string
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      warehouse_addressing_rules: {
        Row: {
          access_method: string | null
          allows_product_mix: boolean | null
          code_pattern: string
          company_id: string
          created_at: string
          id: string
          structure_type: string
        }
        Insert: {
          access_method?: string | null
          allows_product_mix?: boolean | null
          code_pattern: string
          company_id: string
          created_at?: string
          id?: string
          structure_type: string
        }
        Update: {
          access_method?: string | null
          allows_product_mix?: boolean | null
          code_pattern?: string
          company_id?: string
          created_at?: string
          id?: string
          structure_type?: string
        }
        Relationships: []
      }
      warehouse_areas: {
        Row: {
          allows_stacking: boolean | null
          area_subtype: string | null
          area_type: string
          company_id: string
          coordinates_definition: string | null
          created_at: string
          equipment_required: string | null
          explosive_hazard: boolean | null
          humidity_controlled: boolean | null
          id: string
          is_mandatory: boolean | null
          max_stack_height: number | null
          name: string
          product_types_allowed: string[] | null
          size_m2: number | null
          temperature_controlled: boolean | null
          truck_access: boolean | null
          updated_at: string
        }
        Insert: {
          allows_stacking?: boolean | null
          area_subtype?: string | null
          area_type: string
          company_id: string
          coordinates_definition?: string | null
          created_at?: string
          equipment_required?: string | null
          explosive_hazard?: boolean | null
          humidity_controlled?: boolean | null
          id?: string
          is_mandatory?: boolean | null
          max_stack_height?: number | null
          name: string
          product_types_allowed?: string[] | null
          size_m2?: number | null
          temperature_controlled?: boolean | null
          truck_access?: boolean | null
          updated_at?: string
        }
        Update: {
          allows_stacking?: boolean | null
          area_subtype?: string | null
          area_type?: string
          company_id?: string
          coordinates_definition?: string | null
          created_at?: string
          equipment_required?: string | null
          explosive_hazard?: boolean | null
          humidity_controlled?: boolean | null
          id?: string
          is_mandatory?: boolean | null
          max_stack_height?: number | null
          name?: string
          product_types_allowed?: string[] | null
          size_m2?: number | null
          temperature_controlled?: boolean | null
          truck_access?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      warehouse_blocks: {
        Row: {
          block_type: string
          color: string
          company_id: string
          configured: boolean
          created_at: string
          depth: number
          description: string | null
          height: number
          id: string
          name: string
          position_x: number
          position_y: number
          position_z: number
          short_name: string | null
          updated_at: string
          width: number
        }
        Insert: {
          block_type: string
          color?: string
          company_id: string
          configured?: boolean
          created_at?: string
          depth?: number
          description?: string | null
          height?: number
          id?: string
          name: string
          position_x?: number
          position_y?: number
          position_z?: number
          short_name?: string | null
          updated_at?: string
          width?: number
        }
        Update: {
          block_type?: string
          color?: string
          company_id?: string
          configured?: boolean
          created_at?: string
          depth?: number
          description?: string | null
          height?: number
          id?: string
          name?: string
          position_x?: number
          position_y?: number
          position_z?: number
          short_name?: string | null
          updated_at?: string
          width?: number
        }
        Relationships: []
      }
      warehouse_equipment: {
        Row: {
          company_id: string
          compatible_structures: string[] | null
          created_at: string
          equipment_type: string
          id: string
          max_height: number | null
          max_weight: number | null
        }
        Insert: {
          company_id: string
          compatible_structures?: string[] | null
          created_at?: string
          equipment_type: string
          id?: string
          max_height?: number | null
          max_weight?: number | null
        }
        Update: {
          company_id?: string
          compatible_structures?: string[] | null
          created_at?: string
          equipment_type?: string
          id?: string
          max_height?: number | null
          max_weight?: number | null
        }
        Relationships: []
      }
      warehouse_location_occupancy: {
        Row: {
          allocated_at: string | null
          created_at: string
          expiry_date: string | null
          id: string
          location_id: string
          lot_number: string | null
          occupied_positions: number | null
          product_id: string | null
          quantity: number | null
          status: string
          updated_at: string
          variation_id: string | null
        }
        Insert: {
          allocated_at?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          location_id: string
          lot_number?: string | null
          occupied_positions?: number | null
          product_id?: string | null
          quantity?: number | null
          status?: string
          updated_at?: string
          variation_id?: string | null
        }
        Update: {
          allocated_at?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          location_id?: string
          lot_number?: string | null
          occupied_positions?: number | null
          product_id?: string | null
          quantity?: number | null
          status?: string
          updated_at?: string
          variation_id?: string | null
        }
        Relationships: []
      }
      warehouse_locations: {
        Row: {
          allows_mixed_products: boolean | null
          block_id: string
          column_number: string | null
          company_id: string
          corridor: string | null
          created_at: string
          description: string | null
          floor_number: string | null
          id: string
          is_active: boolean
          location_code: string
          location_type: string | null
          max_positions: number | null
          position_number: string | null
          structure_type: string
          updated_at: string
        }
        Insert: {
          allows_mixed_products?: boolean | null
          block_id: string
          column_number?: string | null
          company_id: string
          corridor?: string | null
          created_at?: string
          description?: string | null
          floor_number?: string | null
          id?: string
          is_active?: boolean
          location_code: string
          location_type?: string | null
          max_positions?: number | null
          position_number?: string | null
          structure_type: string
          updated_at?: string
        }
        Update: {
          allows_mixed_products?: boolean | null
          block_id?: string
          column_number?: string | null
          company_id?: string
          corridor?: string | null
          created_at?: string
          description?: string | null
          floor_number?: string | null
          id?: string
          is_active?: boolean
          location_code?: string
          location_type?: string | null
          max_positions?: number | null
          position_number?: string | null
          structure_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      warehouse_structure_types: {
        Row: {
          allows_stacking: boolean | null
          code: string
          company_id: string
          created_at: string
          depth_positions: number | null
          description: string | null
          equipment_required: string | null
          id: string
          lateral_access: boolean | null
          max_equipment_height: number | null
          max_stack_height: number | null
          name: string
          updated_at: string
        }
        Insert: {
          allows_stacking?: boolean | null
          code: string
          company_id: string
          created_at?: string
          depth_positions?: number | null
          description?: string | null
          equipment_required?: string | null
          id?: string
          lateral_access?: boolean | null
          max_equipment_height?: number | null
          max_stack_height?: number | null
          name: string
          updated_at?: string
        }
        Update: {
          allows_stacking?: boolean | null
          code?: string
          company_id?: string
          created_at?: string
          depth_positions?: number | null
          description?: string | null
          equipment_required?: string | null
          id?: string
          lateral_access?: boolean | null
          max_equipment_height?: number | null
          max_stack_height?: number | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      clients_suppliers_basic: {
        Row: {
          address: string | null
          bairro_geral: string | null
          cep_geral: string | null
          codigo: string | null
          company_id: string | null
          created_at: string | null
          fantasia: string | null
          id: string | null
          municipio_geral: string | null
          name: string | null
          notes: string | null
          situacao: string | null
          type: string | null
          uf_geral: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          bairro_geral?: string | null
          cep_geral?: string | null
          codigo?: string | null
          company_id?: string | null
          created_at?: string | null
          fantasia?: string | null
          id?: string | null
          municipio_geral?: string | null
          name?: string | null
          notes?: string | null
          situacao?: string | null
          type?: string | null
          uf_geral?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          bairro_geral?: string | null
          cep_geral?: string | null
          codigo?: string | null
          company_id?: string | null
          created_at?: string | null
          fantasia?: string | null
          id?: string | null
          municipio_geral?: string | null
          name?: string | null
          notes?: string | null
          situacao?: string | null
          type?: string | null
          uf_geral?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      clients_suppliers_full: {
        Row: {
          aceita_pedido_parcial: boolean | null
          aceita_produtos_parciais: boolean | null
          address: string | null
          bairro_cobranca: string | null
          bairro_geral: string | null
          categoria_financeira: string | null
          celular: string | null
          cep_cobranca: string | null
          cep_geral: string | null
          cnae_principal: string | null
          cnaes_secundarios: Json | null
          codigo: string | null
          codigo_filial: string | null
          codigo_master: string | null
          company_id: string | null
          complemento_cobranca: string | null
          complemento_geral: string | null
          condicao_pagamento: string | null
          condicoes_pagamento: string | null
          corporate_group_id: string | null
          created_at: string | null
          credito_em_uso: number | null
          data_nascimento: string | null
          descricao_cnae_principal: string | null
          document: string | null
          email: string | null
          email_nota_fiscal: string | null
          endereco_cobranca: string | null
          endereco_geral: string | null
          enderecos_entrega: Json | null
          fantasia: string | null
          formas_recebimento: Json | null
          grupo_empresarial_nome: string | null
          id: string | null
          indicador_ie: number | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          is_matriz: boolean | null
          limite_credito: number | null
          municipio_cobranca: string | null
          municipio_geral: string | null
          name: string | null
          naturalidade: string | null
          notes: string | null
          numero_cobranca: string | null
          numero_geral: string | null
          orgao_emissor: string | null
          pais: string | null
          pessoas_contato: Json | null
          phone: string | null
          prazo_maximo_atraso_dias: number | null
          produtos_fiscais: Json | null
          regime_tributario: string | null
          rg: string | null
          saldo_credito: number | null
          sexo: string | null
          situacao: string | null
          tabela_precos: string | null
          tipo_empresa: string | null
          tipo_pessoa: string | null
          tipos_contato: Json | null
          type: string | null
          uf_cobranca: string | null
          uf_geral: string | null
          updated_at: string | null
          vendedor_id: string | null
        }
        Insert: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id?: string | null
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string | null
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document?: string | null
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string | null
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name?: string | null
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type?: string | null
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string | null
          vendedor_id?: string | null
        }
        Update: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id?: string | null
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string | null
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document?: string | null
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string | null
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name?: string | null
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type?: string | null
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string | null
          vendedor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_suppliers_corporate_group_id_fkey"
            columns: ["corporate_group_id"]
            isOneToOne: false
            referencedRelation: "corporate_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      clients_suppliers_sensitive: {
        Row: {
          aceita_pedido_parcial: boolean | null
          aceita_produtos_parciais: boolean | null
          address: string | null
          bairro_cobranca: string | null
          bairro_geral: string | null
          categoria_financeira: string | null
          celular: string | null
          cep_cobranca: string | null
          cep_geral: string | null
          cnae_principal: string | null
          cnaes_secundarios: Json | null
          codigo: string | null
          codigo_filial: string | null
          codigo_master: string | null
          company_id: string | null
          complemento_cobranca: string | null
          complemento_geral: string | null
          condicao_pagamento: string | null
          condicoes_pagamento: string | null
          corporate_group_id: string | null
          created_at: string | null
          credito_em_uso: number | null
          data_nascimento: string | null
          descricao_cnae_principal: string | null
          document: string | null
          email: string | null
          email_nota_fiscal: string | null
          endereco_cobranca: string | null
          endereco_geral: string | null
          enderecos_entrega: Json | null
          fantasia: string | null
          formas_recebimento: Json | null
          grupo_empresarial_nome: string | null
          id: string | null
          indicador_ie: number | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          is_matriz: boolean | null
          limite_credito: number | null
          municipio_cobranca: string | null
          municipio_geral: string | null
          name: string | null
          naturalidade: string | null
          notes: string | null
          numero_cobranca: string | null
          numero_geral: string | null
          orgao_emissor: string | null
          pais: string | null
          pessoas_contato: Json | null
          phone: string | null
          prazo_maximo_atraso_dias: number | null
          produtos_fiscais: Json | null
          regime_tributario: string | null
          rg: string | null
          saldo_credito: number | null
          sexo: string | null
          situacao: string | null
          tabela_precos: string | null
          tipo_empresa: string | null
          tipo_pessoa: string | null
          tipos_contato: Json | null
          type: string | null
          uf_cobranca: string | null
          uf_geral: string | null
          updated_at: string | null
          vendedor_id: string | null
        }
        Insert: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id?: string | null
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string | null
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document?: string | null
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string | null
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name?: string | null
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type?: string | null
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string | null
          vendedor_id?: string | null
        }
        Update: {
          aceita_pedido_parcial?: boolean | null
          aceita_produtos_parciais?: boolean | null
          address?: string | null
          bairro_cobranca?: string | null
          bairro_geral?: string | null
          categoria_financeira?: string | null
          celular?: string | null
          cep_cobranca?: string | null
          cep_geral?: string | null
          cnae_principal?: string | null
          cnaes_secundarios?: Json | null
          codigo?: string | null
          codigo_filial?: string | null
          codigo_master?: string | null
          company_id?: string | null
          complemento_cobranca?: string | null
          complemento_geral?: string | null
          condicao_pagamento?: string | null
          condicoes_pagamento?: string | null
          corporate_group_id?: string | null
          created_at?: string | null
          credito_em_uso?: number | null
          data_nascimento?: string | null
          descricao_cnae_principal?: string | null
          document?: string | null
          email?: string | null
          email_nota_fiscal?: string | null
          endereco_cobranca?: string | null
          endereco_geral?: string | null
          enderecos_entrega?: Json | null
          fantasia?: string | null
          formas_recebimento?: Json | null
          grupo_empresarial_nome?: string | null
          id?: string | null
          indicador_ie?: number | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          is_matriz?: boolean | null
          limite_credito?: number | null
          municipio_cobranca?: string | null
          municipio_geral?: string | null
          name?: string | null
          naturalidade?: string | null
          notes?: string | null
          numero_cobranca?: string | null
          numero_geral?: string | null
          orgao_emissor?: string | null
          pais?: string | null
          pessoas_contato?: Json | null
          phone?: string | null
          prazo_maximo_atraso_dias?: number | null
          produtos_fiscais?: Json | null
          regime_tributario?: string | null
          rg?: string | null
          saldo_credito?: number | null
          sexo?: string | null
          situacao?: string | null
          tabela_precos?: string | null
          tipo_empresa?: string | null
          tipo_pessoa?: string | null
          tipos_contato?: Json | null
          type?: string | null
          uf_cobranca?: string | null
          uf_geral?: string | null
          updated_at?: string | null
          vendedor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_suppliers_corporate_group_id_fkey"
            columns: ["corporate_group_id"]
            isOneToOne: false
            referencedRelation: "corporate_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      employees_basic: {
        Row: {
          company_id: string | null
          created_at: string | null
          department: string | null
          full_name: string | null
          hire_date: string | null
          id: string | null
          position: string | null
          sector_id: string | null
          status: string | null
          subsector_id: string | null
          updated_at: string | null
          work_shift: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          department?: string | null
          full_name?: string | null
          hire_date?: string | null
          id?: string | null
          position?: string | null
          sector_id?: string | null
          status?: string | null
          subsector_id?: string | null
          updated_at?: string | null
          work_shift?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          department?: string | null
          full_name?: string | null
          hire_date?: string | null
          id?: string | null
          position?: string | null
          sector_id?: string | null
          status?: string | null
          subsector_id?: string | null
          updated_at?: string | null
          work_shift?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_subsector_id_fkey"
            columns: ["subsector_id"]
            isOneToOne: false
            referencedRelation: "subsectors"
            referencedColumns: ["id"]
          },
        ]
      }
      employees_full: {
        Row: {
          address: string | null
          address_complement: string | null
          address_number: string | null
          birth_date: string | null
          city: string | null
          company_id: string | null
          cpf: string | null
          created_at: string | null
          department: string | null
          email: string | null
          employment_type: string | null
          end_time: string | null
          full_name: string | null
          gender: string | null
          hire_date: string | null
          id: string | null
          lunch_end_time: string | null
          lunch_start_time: string | null
          marital_status: string | null
          mobile_phone: string | null
          neighborhood: string | null
          phone: string | null
          pis_pasep: string | null
          position: string | null
          rg: string | null
          salary: number | null
          sector_id: string | null
          start_time: string | null
          state: string | null
          status: string | null
          subsector_id: string | null
          termination_date: string | null
          updated_at: string | null
          work_card: string | null
          work_shift: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id?: string | null
          cpf?: string | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name?: string | null
          gender?: string | null
          hire_date?: string | null
          id?: string | null
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position?: string | null
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string | null
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string | null
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id?: string | null
          cpf?: string | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name?: string | null
          gender?: string | null
          hire_date?: string | null
          id?: string | null
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position?: string | null
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string | null
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string | null
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_subsector_id_fkey"
            columns: ["subsector_id"]
            isOneToOne: false
            referencedRelation: "subsectors"
            referencedColumns: ["id"]
          },
        ]
      }
      employees_sensitive: {
        Row: {
          address: string | null
          address_complement: string | null
          address_number: string | null
          birth_date: string | null
          city: string | null
          company_id: string | null
          cpf: string | null
          created_at: string | null
          department: string | null
          email: string | null
          employment_type: string | null
          end_time: string | null
          full_name: string | null
          gender: string | null
          hire_date: string | null
          id: string | null
          lunch_end_time: string | null
          lunch_start_time: string | null
          marital_status: string | null
          mobile_phone: string | null
          neighborhood: string | null
          phone: string | null
          pis_pasep: string | null
          position: string | null
          rg: string | null
          salary: number | null
          sector_id: string | null
          start_time: string | null
          state: string | null
          status: string | null
          subsector_id: string | null
          termination_date: string | null
          updated_at: string | null
          work_card: string | null
          work_shift: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id?: string | null
          cpf?: string | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name?: string | null
          gender?: string | null
          hire_date?: string | null
          id?: string | null
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position?: string | null
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string | null
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string | null
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          address_complement?: string | null
          address_number?: string | null
          birth_date?: string | null
          city?: string | null
          company_id?: string | null
          cpf?: string | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          employment_type?: string | null
          end_time?: string | null
          full_name?: string | null
          gender?: string | null
          hire_date?: string | null
          id?: string | null
          lunch_end_time?: string | null
          lunch_start_time?: string | null
          marital_status?: string | null
          mobile_phone?: string | null
          neighborhood?: string | null
          phone?: string | null
          pis_pasep?: string | null
          position?: string | null
          rg?: string | null
          salary?: number | null
          sector_id?: string | null
          start_time?: string | null
          state?: string | null
          status?: string | null
          subsector_id?: string | null
          termination_date?: string | null
          updated_at?: string | null
          work_card?: string | null
          work_shift?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "production_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_subsector_id_fkey"
            columns: ["subsector_id"]
            isOneToOne: false
            referencedRelation: "subsectors"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_cte_documentos: {
        Row: {
          chave_acesso: string | null
          cte_id: string | null
          data_emissao: string | null
          documento_numero: string | null
          documento_serie: string | null
          tipo_documento: string | null
          valor_documento: number | null
        }
        Relationships: []
      }
      vw_cte_resumo: {
        Row: {
          cfop: string | null
          chave_acesso: string | null
          company_id: string | null
          data_emissao: string | null
          destinatario_razao_social: string | null
          emitente_cnpj: string | null
          emitente_razao_social: string | null
          id: string | null
          modal: number | null
          natureza_operacao: string | null
          numero: number | null
          remetente_razao_social: string | null
          serie: number | null
          status: string | null
          tipo_cte: number | null
          valor_receber: number | null
          valor_total_prestacao: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cte_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_nfe_basica: {
        Row: {
          company_id: string | null
          data_emissao: string | null
          destinatario_cnpj: string | null
          destinatario_cpf: string | null
          destinatario_razao_social: string | null
          emitente_cnpj: string | null
          emitente_razao_social: string | null
          id: string | null
          natureza_operacao: string | null
          numero: number | null
          serie: number | null
          status: string | null
          valor_total: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_nfe_itens_impostos: {
        Row: {
          codigo_produto: string | null
          cofins_valor: number | null
          descricao: string | null
          icms_valor: number | null
          id: string | null
          ipi_valor: number | null
          nfe_id: string | null
          numero_item: number | null
          pis_valor: number | null
          quantidade_comercial: number | null
          valor_bruto: number | null
          valor_unitario_comercial: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_basica"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nfe_itens_nfe_id_fkey"
            columns: ["nfe_id"]
            isOneToOne: false
            referencedRelation: "vw_nfe_lista"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_nfe_lista: {
        Row: {
          data_emissao: string | null
          destinatario: string | null
          emitente: string | null
          icms_valor: number | null
          id: string | null
          numero: number | null
          serie: number | null
          status: string | null
          total_itens: number | null
          valor_produtos: number | null
          valor_total: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      can_access_warehouse_data: {
        Args: { target_company_id: string }
        Returns: boolean
      }
      can_manage_employee_data: {
        Args: { _company_id: string }
        Returns: boolean
      }
      can_view_sensitive_client_data: {
        Args: { _company_id: string }
        Returns: boolean
      }
      extract_codigo_filial_from_cnpj: {
        Args: { cnpj_value: string }
        Returns: string
      }
      generate_next_parallel_version: {
        Args: { base_version: string; sheet_uuid: string }
        Returns: string
      }
      generate_next_sequential_version: {
        Args: { parent_version?: string; sheet_uuid: string }
        Returns: string
      }
      generate_order_number: {
        Args: { company_uuid: string }
        Returns: string
      }
      generate_product_dev_code: {
        Args: { company_uuid: string }
        Returns: string
      }
      generate_sector_code: {
        Args: { company_uuid: string }
        Returns: string
      }
      generate_service_category_code: {
        Args: { company_uuid: string }
        Returns: string
      }
      generate_service_modality_code: {
        Args: { company_uuid: string }
        Returns: string
      }
      generate_sheet_code: {
        Args: { company_uuid: string }
        Returns: string
      }
      get_block_statistics: {
        Args: { block_uuid: string }
        Returns: {
          occupation_percentage: number
          occupied_locations: number
          total_locations: number
          total_products: number
        }[]
      }
      get_current_profile_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_company_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_role_in_company: {
        Args: {
          _company_id: string
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_company_admin_or_manager: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      is_company_member: {
        Args: { company_uuid: string; user_uuid: string }
        Returns: boolean
      }
      is_company_owner: {
        Args: { company_uuid: string; user_uuid: string }
        Returns: boolean
      }
      is_current_user_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      populate_default_chart_of_accounts: {
        Args: { company_uuid: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "hr_manager" | "finance_manager" | "member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "hr_manager", "finance_manager", "member"],
    },
  },
} as const
