import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemon'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemon/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/list`,
      component: () => import('@/pokemon/views/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      component: () => import('@/pokemon/views/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      component: () => import('@/pokemon/views/PokemonSearch.vue'),
    },
  ],
}
