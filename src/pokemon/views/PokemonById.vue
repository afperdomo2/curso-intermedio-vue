<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>

  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFindPokemon } from '../composables/useFindPokemon'

const route = useRoute()

const { id } = route.params
const { pokemon, isLoading, isError, error } = useFindPokemon(id.toString())
</script>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}
img {
  width: 150px;
  border-radius: 5px;
}
</style>
