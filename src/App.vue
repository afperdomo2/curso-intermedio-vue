<template>
  <header>
    <NavBar title="Pokémon App" :links="routerLinks" />
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/link-routes'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
