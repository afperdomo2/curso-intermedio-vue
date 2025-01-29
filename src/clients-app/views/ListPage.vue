<template>
  <LoadingModal v-if="isLoading" />

  <ClientList :clients="clients" />

  <PaginationNumbers
    :current-page="currentPage"
    :total-pages="totalpages"
    @page-changed="setPage"
  />
</template>

<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue'
import ClientList from '../components/ClientList.vue'
import PaginationNumbers from '../components/PaginationNumbers.vue'
import useClientsAdapter from '../composables/useClientsAdapter'

const { isLoading, clients, currentPage, totalpages, setPage } = useClientsAdapter()
</script>

<style scoped></style>
