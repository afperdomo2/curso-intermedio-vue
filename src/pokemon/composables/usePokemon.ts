import { useQuery } from '@tanstack/vue-query'
import { computed, watchEffect } from 'vue'

import { initialPokemon } from '../data/initial-pokemon'
import { getPokemon } from '../helpers/get-pokemon.helper'

export const usePokemon = () => {
  const {
    isLoading,
    data: pokemonList,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemon-list'],
    queryFn: getPokemon,
    initialData: initialPokemon,
    retry: 1,
    retryDelay: 1000,
  })

  watchEffect(() => {
    console.log('isLoading: ', isLoading.value)
  })

  return {
    pokemonList,
    isLoading,
    isError,
    error,
    count: computed(() => pokemonList.value?.length ?? 0),
  }
}
