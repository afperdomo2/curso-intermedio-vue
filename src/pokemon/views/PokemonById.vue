<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>

  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
    <button @click="invalidatePokemonQuery">Invalidar querie del pokemon actual</button>
    <br /><br />
    <button @click="invalidateAllQueries">Invalidar todos los queries</button>
  </div>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { useFindPokemon } from '../composables/useFindPokemon'

const route = useRoute()
const queryClient = useQueryClient()

const { id } = route.params
const { pokemon, isLoading, isError, error } = useFindPokemon(id.toString())

/**
 * Invalidar todas las queries. Esto es útil cuando se quiere forzar a que se
 * vuelvan a hacer todas las peticiones a la API.
 */
const invalidateAllQueries = () => {
  queryClient.invalidateQueries()
}

/**
 * Invalidar la query del pokemon actual. Esto es útil cuando se quiere forzar
 * a que se vuelva a hacer la petición a la API para obtener la información
 * más actualizada.
 */
const invalidatePokemonQuery = () => {
  queryClient.invalidateQueries({ queryKey: ['pokemon-id', id] })
}
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
