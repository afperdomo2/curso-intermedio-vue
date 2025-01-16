<template>
  <div class="card-list">
    <PokemonCard v-for="pokemon of pokemonList" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon.interface'
import PokemonCard from './PokemonCard.vue'

interface Props {
  pokemonList: Pokemon[]
}

defineProps<Props>()
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
