import axios from 'axios'

export async function setManifest(invoiceKey: string, token: string) {
  const response = await axios(`https://api.focusnfe.com.br/v2/nfes_recebidas/${invoiceKey}/manifesto`, {
    method: 'POST',
    data: {
      tipo: 'ciencia',
    },
    auth: {
      username: token,
      password: ''
    },
  })
  console.log('FocusAPI manifest response status:', response.data)
}
