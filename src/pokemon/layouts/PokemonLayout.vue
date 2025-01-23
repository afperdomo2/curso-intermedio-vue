<template>
  <NavBar :links="links" :is-secondary="true" />

  <div>
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
    const { title, visible } = props as { title: string; visible: boolean }
    return {
      name: name?.toString() ?? '',
      title,
      path,
      visible,
    }
  }) || []
</script>
