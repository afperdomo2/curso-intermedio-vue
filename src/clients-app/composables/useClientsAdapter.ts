import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import { sleep } from '@/pokemon/helpers/sleep.helper'
import clientsApi from '../api/clients.api'
import { useClientStore } from '../stores/client.store'

const getClients = async (page: number) => {
  await sleep(1500)
  const { data } = await clientsApi.get(`/clients?_page=${page}`)
  return data.data
}

/**
 * Tiene la misma funcionalidad que el composable de useClients.ts, pero
 * en este caso se utiliza el store de pinia para manejar el estado de la
 * aplicación.
 */
const useClientsAdapter = () => {
  const store = useClientStore()
  const { clients, currentPage, totalpages } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?_page=', currentPage],
    queryFn: () => getClients(currentPage.value),
    retry: 1,
    retryDelay: 1000,
    staleTime: 1000 * 10, // Tiempo en el que los datos se consideran frescos
  })

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients)
    }
  })

  const setPage = (page: number) => store.setPage(page)

  return {
    clients,
    currentPage,
    isLoading,
    totalpages,

    setPage,
  }
}

export default useClientsAdapter
