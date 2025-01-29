import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

import clientsApi from '../api/clients.api'
import { useClientStore } from '../stores/client.store'
import { sleep } from '@/pokemon/helpers/sleep.helper'

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
    staleTime: 1000 * 60, // 1 minute: Tiempo en el que los datos se consideran frescos
  })

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients)
    }
  })

  const setPage = (page: number) => store.setPage(page)

  // [1, 2, 3, 4, 5]
  const totalPageNumbers = computed(() => {
    return Array.from({ length: totalpages.value }, (_, i) => i + 1)
  })

  return {
    clients,
    currentPage,
    isLoading,
    totalpages,
    totalPageNumbers,

    setPage,
  }
}

export default useClientsAdapter
