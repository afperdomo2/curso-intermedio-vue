import pokemonApi from '../api/pokemon.api'
import type { PokemonResponse } from '../interfaces/pokemon-response.interface'
import type { Pokemon } from '../interfaces/pokemon.interface'

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonResponse>(`pokemon/${id}`)
  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default,
  }
}
