<template>
  <nav>
    <template v-if="!isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <span>{{ title }}</span>
    </template>

    <RouterLink v-for="(link, i) in links" :key="i" :to="link.path">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes'

interface Props {
  title?: string
  links: RouterLink[]
  isSecondary?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Composition App',
  isSecondary: false,
})
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
