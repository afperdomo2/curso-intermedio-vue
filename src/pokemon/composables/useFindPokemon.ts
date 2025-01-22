import { useQuery } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemon-by-id.helper'

export const useFindPokemon = (id: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon-id', id],
    queryFn: () => getPokemonById(id),
    retry: 1,
    retryDelay: 1000,
  })
  return { pokemon: data, isLoading, isError, error }
}
