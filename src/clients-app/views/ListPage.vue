<template>
  <LoadingModal v-if="isLoading" />

  <ClientList />

  <PaginationNumbers />
</template>

<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue'
import ClientList from '../components/ClientList.vue'
import PaginationNumbers from '../components/PaginationNumbers.vue'
import useClientsAdapter from '../composables/useClientsAdapter'

const { isLoading } = useClientsAdapter()
</script>

<style scoped></style>
