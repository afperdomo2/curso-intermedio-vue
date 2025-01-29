import { useQuery } from '@tanstack/vue-query'

import clientsApi from '../api/clients.api'

const getClients = async () => {
  const { data } = await clientsApi.get('/clients?_page=1')
  return data.data
}

const useClients = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['clients?_page=', 1],
    queryFn: getClients,
    retry: 1,
    retryDelay: 1000,
    staleTime: 1000 * 60, // 1 minute: Tiempo en el que los datos se consideran frescos
  })
  return {
    clients: data,
    isLoading,
  }
}

export default useClients
