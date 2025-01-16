<template>
  <div>
    <h1>Pokemon List ({{ count }})</h1>

    <h3 v-if="isLoading">Loading...</h3>

    <div v-else-if="isError">
      {{ error }}
    </div>

    <ul v-else>
      <PokemonCardList :pokemonList="pokemonList ?? []" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue'
import { usePokemon } from '../composables/usePokemon'

const { pokemonList, isLoading, count, isError, error } = usePokemon()
</script>
