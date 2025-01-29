<template>
  <h3>Saving...</h3>
  <LoadingModal v-if="isLoading" />

  <div>
    <h1>Client</h1>
    <form>
      <input type="text" placeholder="Name" />
      <br />
      <input type="text" placeholder="Address" />
      <br />
      <button type="submit">Save</button>
    </form>
  </div>

  <pre>{{ client }}</pre>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import useClient from '../composables/useClient'
import LoadingModal from '@/shared/components/LoadingModal.vue'

const route = useRoute()

const clientId = parseInt(route.params.id as string)

const { client, isLoading } = useClient(clientId)
</script>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
}
</style>
