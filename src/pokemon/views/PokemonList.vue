<template>
  <div>
    <h1>Pokemon List</h1>
    <pre>{{ pokemonList }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import pokemonApi from '../api/pokemon.api'
import type { PokemonListResponse } from '../interfaces/pokemon-list-reponse.interface'

const pokemonList = ref<any[]>([])

onMounted(async () => {
  pokemonList.value = await fetchPokemon()
})

const fetchPokemon = async () => {
  const response = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=20')
  return response.data.results
}
</script>
