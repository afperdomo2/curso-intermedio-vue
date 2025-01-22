<template>
  <header>
    <NavBar title="Pokémon App" :links="routerLinks" />
  </header>

  <RouterView />
  <VueQueryDevtools />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/link-routes'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
