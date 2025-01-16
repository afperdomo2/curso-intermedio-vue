<template>
  <div>
    <h1>Pokemon List ({{ count }})</h1>

    <!-- <h3 v-if="isFetching">Loading...</h3> -->

    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getPokemon } from '../helpers/get-pokemon.helper'
import { computed } from 'vue'

// import { usePokemon } from '../composables/usePokemon'

// const { pokemonList, isLoading, count } = usePokemon()

const { data: pokemonList } = useQuery({
  queryKey: ['pokemon-list'],
  queryFn: getPokemon,
})

const count = computed(() => pokemonList.value?.length ?? 0)
</script>
