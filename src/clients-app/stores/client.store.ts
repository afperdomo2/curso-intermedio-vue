import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Client } from '../interfaces/client.interface'

export const useClientStore = defineStore('client-store', () => {
  const currentPage = ref<number>(1)
  const totalpages = ref<number>(5)
  const clients = ref<Client[]>([])

  const setClients = (newClients: Client[]) => {
    console.log('Nuevos clientes cargados ----->')
    clients.value = newClients
  }

  const setPage = (page: number) => {
    if (currentPage.value === page) return
    if (page < 1 || page > totalpages.value) return
    currentPage.value = page
  }

  return {
    // state
    currentPage,
    totalpages,
    clients,

    //  actions
    setClients,
    setPage,
  }
})
