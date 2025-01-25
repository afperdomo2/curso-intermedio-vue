import { useQuery } from '@tanstack/vue-query'

import clientsApi from '../api/clients.api'

const getClients = async () => {
  const { data } = await clientsApi.get('/clients?page_1')
  return data
}

const useClients = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['clients?_page=', 1],
    queryFn: getClients,
    retry: 1,
    retryDelay: 1000,
  })
  return {
    clients: data,
    isLoading,
  }
}

export default useClients
