import { companies } from './companies'
import { nfes } from './nfes'
import { xml } from './xmls'
import {
  nfeEmitente,
  nfeDestinatario,
  nfeItens,
  nfeTotais,
  nfeImpostosIcms,
  nfeImpostosIpi,
  nfeImpostosPis,
  nfeImpostosCofins,
  nfeImpostosIi,
  nfeImpostosIssqn,
  nfeIcmsUfDestino
} from './nfe-related'

export const schema = {
  companies,
  xml,
  nfes,
  nfeEmitente,
  nfeDestinatario,
  nfeItens,
  nfeTotais,
  nfeImpostosIcms,
  nfeImpostosIpi,
  nfeImpostosPis,
  nfeImpostosCofins,
  nfeImpostosIi,
  nfeImpostosIssqn,
  nfeIcmsUfDestino
}
