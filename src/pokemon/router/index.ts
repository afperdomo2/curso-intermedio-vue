import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemon'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemon/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'pokemon-list',
      props: { title: 'Pokémon List' },
      component: () => import('@/pokemon/views/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list-native`,
      name: 'pokemon-list-native',
      props: { title: 'Pokémon List with Native Store' },
      component: () => import('@/pokemon/views/PokemonListNativeStore.vue'),
    },
    {
      path: `/${ROUTE_NAME}/by/:id`,
      name: 'pokemon-by-id',
      props: { title: 'Pokémon By ID' },
      component: () => import('@/pokemon/views/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'pokemon-search',
      props: { title: 'Pokémon Search' },
      component: () => import('@/pokemon/views/PokemonSearch.vue'),
    },
  ],
}
