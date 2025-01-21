import type { Pokemon } from '@/pokemon/interfaces/pokemon.interface'
import { reactive } from 'vue'

interface Store {
  // State
  pokemonList: {
    data: Pokemon[]
    count: number
    isLoading: boolean
    hasError: boolean
    errorMessage?: string
  }
  // Actions
  startLoadingPokemonList: () => void
  loadedPokemonList: (data: Pokemon[]) => void
  loadFailedPokemonList: (error: string) => void
}

const store = reactive<Store>({
  pokemonList: {
    data: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errorMessage: undefined,
  },
  startLoadingPokemonList: function (): void {
    throw new Error('Function not implemented.')
  },
  loadedPokemonList: function (data: Pokemon[]): void {
    throw new Error('Function not implemented.')
  },
  loadFailedPokemonList: function (error: string): void {
    throw new Error('Function not implemented.')
  },
})

export default store
