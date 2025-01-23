<template>
  <div class="pokemon-card" @click="goToPokemon" @mouseenter="prefetchPokemon">
    <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { getPokemonById } from '../helpers/get-pokemon-by-id.helper'
import type { Pokemon } from '../interfaces/pokemon.interface'

const router = useRouter()
const queryClient = useQueryClient()

interface Props {
  pokemon: Pokemon
}
const props = defineProps<Props>()

const goToPokemon = () => {
  router.push({ name: 'pokemon-by-id', params: { id: props.pokemon.id } })
}

const prefetchPokemon = () => {
  const id = props.pokemon.id.toString()
  queryClient.prefetchQuery({
    queryKey: ['pokemon-id', id],
    queryFn: () => getPokemonById(id),
  })
}
</script>

<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
img {
  width: 150px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}
img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
