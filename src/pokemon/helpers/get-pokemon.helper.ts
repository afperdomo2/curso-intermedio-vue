import pokemonApi from '../api/pokemon.api'
import type { PokemonListResponse } from '../interfaces/pokemon-list-reponse.interface'
import type { PokemonResponse } from '../interfaces/pokemon-response.interface'
import type { Pokemon } from '../interfaces/pokemon.interface'
import { sleep } from './sleep.helper'

export const getPokemon = async (): Promise<Pokemon[]> => {
  await sleep(500)
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=20')

  const pokemonPromises: Promise<Pokemon>[] = []
  for (const { url } of data.results) {
    const pokemonPromise = pokemonApi.get<PokemonResponse>(url).then(({ data }) => {
      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }
      return pokemon
    })
    pokemonPromises.push(pokemonPromise)
  }

  return await Promise.all(pokemonPromises)
}
