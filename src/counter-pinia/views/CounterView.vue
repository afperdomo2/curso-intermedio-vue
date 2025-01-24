<template>
  <h1>Pinia</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>

  <br />

  <button @click="increment()">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="counterStore.reset()">Reset</button>

  <br /><br />
  <hr />
  <br />

  <div v-if="counterStore.lastChanged">
    <h4>El valor es: {{ counterStore.count }}</h4>
    <h4>Fue modificado: {{ counterStore.lastChanged }}</h4>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter.store'

const counterStore = useCounterStore()

// Destrucción de propiedades
const { count, squareCount } = storeToRefs(counterStore)

// Destrucción de métodos
const { increment, incrementBy } = counterStore
</script>

<style scoped></style>
