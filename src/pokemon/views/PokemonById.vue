<template>
  <div>
    <h1>Pokemon By ID</h1>
    <pre>{{ id }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const { id } = route.params
</script>
