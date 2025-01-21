<template>
  <div>
    <h1>Pokemon List ({{ store.pokemonList.count }}) (With Native Store)</h1>

    <pre>{{ store }}</pre>

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
import PokemonCardList from '../components/PokemonCardList.vue'

import store from '../../stores/pokemon.store.ts'
</script>
