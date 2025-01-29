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
import type { Client } from '../interfaces/client.interface'

interface Props {
  clients: Client[]
}

defineProps<Props>()
</script>

<style scoped></style>
