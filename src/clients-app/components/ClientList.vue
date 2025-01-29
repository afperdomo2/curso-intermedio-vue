<template>
  <div>
    <h5 v-if="isLoading">Fetching...</h5>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <RouterLink :to="{ name: 'client-by-id', params: { id: client.id } }">
          {{ client.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useClientsAdapter from '../composables/useClientsAdapter'

const { clients, isLoading } = useClientsAdapter()
</script>

<style scoped></style>
