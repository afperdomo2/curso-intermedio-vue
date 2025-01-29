import { useQuery } from '@tanstack/vue-query'
import { ref, watch } from 'vue'

import { sleep } from '@/pokemon/helpers/sleep.helper'
import clientsApi from '../api/clients.api'
import type { Client } from '../interfaces/client.interface'

const getClient = async (id: number) => {
  await sleep(2000)
  const { data } = await clientsApi.get(`/clients/${id}`)
  return data
}

const useClient = (id: number) => {
  const client = ref<Client>()

  const { isLoading, data } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClient(id),
  })

  watch(
    data,
    () => {
      if (data.value) {
        client.value = data.value
      }
    },
    { immediate: true },
  )

  return {
    isLoading,
    client,
  }
}

export default useClient
