<template>
  <div>
    <h1>Pokemon List</h1>
    <pre>{{ pokemonList }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getPokemon } from '../helpers/get-pokemon.helper'
import type { Pokemon } from '../interfaces/pokemon.interface'

const pokemonList = ref<Pokemon[]>([])

onMounted(async () => {
  pokemonList.value = await getPokemon()
})
</script>
