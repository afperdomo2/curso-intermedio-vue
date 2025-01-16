import { computed, ref } from 'vue'

import { getPokemon } from '../helpers/get-pokemon.helper'
import type { Pokemon } from '../interfaces/pokemon.interface'

export const usePokemon = () => {
  const pokemonList = ref<Pokemon[]>([])
  const isLoading = ref(true)

  getPokemon().then((data) => {
    isLoading.value = false
    pokemonList.value = data
  })

  const count = computed(() => pokemonList.value.length)

  return { pokemonList, isLoading, count }
}
