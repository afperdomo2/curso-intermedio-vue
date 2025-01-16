<template>
  <div>
    <h1>Pokemon List ({{ count }})</h1>

    <h3 v-if="isLoading">Loading...</h3>

    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePokemon } from '../composables/usePokemon'

const { pokemonList, isLoading, count } = usePokemon()
</script>
