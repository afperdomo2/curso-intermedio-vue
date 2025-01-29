import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import clientsApi from '../api/clients.api'
import { useClientStore } from '../stores/client.store'

const getClients = async () => {
  console.log('Obteniendo clientes')
  const { data } = await clientsApi.get('/clients?_page=1')
  return data.data
}

/**
 * Tiene la misma funcionalidad que el composable de useClients.ts, pero
 * en este caso se utiliza el store de pinia para manejar el estado de la
 * aplicación.
 */
const useClientsAdapter = () => {
  const store = useClientStore()
  const { clients } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?_page=', 1],
    queryFn: getClients,
    retry: 1,
    retryDelay: 1000,
  })

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients)
    }
  })

  return {
    clients,
    isLoading,
  }
}

export default useClientsAdapter
