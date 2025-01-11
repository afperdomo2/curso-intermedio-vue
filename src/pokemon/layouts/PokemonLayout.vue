<template>
  <NavBar :links="links" :is-secondary="true" />

  <div>
    <h4>Pokemon Layout</h4>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes'

import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'

const links: RouterLink[] =
  pokemonRoute.children?.map((link) => {
    const { name, path, props } = link
    return {
      name: name?.toString() ?? '',
      title: (props as { title: string }).title,
      path,
    }
  }) || []
</script>
