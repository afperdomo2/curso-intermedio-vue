<template>
  <div>Client list</div>

  <ClientList />

  <pre>{{ clients }}</pre>
</template>

<script setup lang="ts">
import ClientList from '../components/ClientList.vue'
import useClients from '../composables/useClients'

const { clients } = useClients()
</script>

<style scoped></style>
