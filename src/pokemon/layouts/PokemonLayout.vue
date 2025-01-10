<template>
  <NavBar :links="[]" :is-secondary="true" />

  <div>
    <h4>Pokemon Layout</h4>

    <RouterView />

    links: {{ links }}
  </div>
</template>

<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes'

import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'

const links: RouterLink[] =
  pokemonRoute.children?.map(() => {
    return { name: '', title: '', path: '' }
  }) || []
</script>
