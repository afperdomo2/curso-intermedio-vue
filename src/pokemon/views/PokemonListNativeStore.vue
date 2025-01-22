<template>
  <div>
    <h1>Pokemon List ({{ store.pokemonList.count }}) (With Native Store)</h1>

    <h3 v-if="store.pokemonList.isLoading">Loading...</h3>

    <div v-else-if="store.pokemonList.hasError">
      {{ store.pokemonList.errorMessage }}
    </div>

    <ul v-else>
      <PokemonCardList :pokemonList="store.pokemonList.data ?? []" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import store from '@/stores/pokemon.store.ts'
import PokemonCardList from '../components/PokemonCardList.vue'
import { getPokemon } from '../helpers/get-pokemon.helper.ts'

useQuery({
  queryKey: ['pokemon-list'],
  queryFn: getPokemon,
  select: (data) => store.loadPokemonList(data),
})
</script>
