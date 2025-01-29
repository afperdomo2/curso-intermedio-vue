<template>
  <div>
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

const { clients } = useClientsAdapter()
</script>

<style scoped></style>
