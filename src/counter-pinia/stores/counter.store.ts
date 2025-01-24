import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const lastChanged = ref<Date>()

  const squareCount = computed(() => count.value * count.value)

  const incrementBy = (value: number) => {
    count.value += value
    lastChanged.value = new Date()
  }

  const increment = () => incrementBy(1)

  const reset = () => {
    count.value = 0
    lastChanged.value = undefined
  }

  return {
    // state
    count,
    lastChanged,
    squareCount,

    //  actions
    incrementBy,
    increment,
    reset,
  }
})
