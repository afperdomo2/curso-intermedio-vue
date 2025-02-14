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
  startLoadingPokemonList: () => Promise<void>
  loadPokemonList: (data: Pokemon[]) => void
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
  startLoadingPokemonList: async function (): Promise<void> {
    this.pokemonList = {
      ...this.pokemonList,
      isLoading: true,
      hasError: false,
      errorMessage: undefined,
    }
  },
  loadPokemonList: function (data: Pokemon[]): void {
    this.pokemonList = {
      data,
      count: data.length,
      isLoading: false,
      hasError: false,
      errorMessage: undefined,
    }
  },
  loadFailedPokemonList: function (error: string): void {
    this.pokemonList = {
      ...this.pokemonList,
      isLoading: false,
      hasError: true,
      errorMessage: error,
    }
  },
})

store.startLoadingPokemonList()

export default store
