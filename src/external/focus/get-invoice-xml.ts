import axios from 'axios'

export async function getInvoiceXML(invoiceKey: string, token: string) {
    const response = await axios(`https://api.focusnfe.com.br/v2/nfes_recebidas/${invoiceKey}.xml`, {
    auth: {
      username: token,
      password: ''
    },
    responseType: 'text'
  })
  return response.data
}
