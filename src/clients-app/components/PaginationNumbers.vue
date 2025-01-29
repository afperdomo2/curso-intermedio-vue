<template>
  <div>
    <button :disabled="currentPage === 1" @click="setPage(currentPage - 1)">Anterior</button>

    <button
      v-for="pageNumber in totalPageNumbers"
      :key="pageNumber"
      @click="setPage(pageNumber)"
      :class="{ active: currentPage === pageNumber }"
    >
      {{ pageNumber }}
    </button>

    <button :disabled="currentPage === totalPages" @click="setPage(currentPage + 1)">
      Siguiente
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}
interface Emits {
  (event: 'page-changed', page: number): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const totalPageNumbers = computed(() => Array.from({ length: props.totalPages }, (_, i) => i + 1))

const setPage = (page: number) => emits('page-changed', page)
</script>

<style scoped>
div {
  margin-top: 10px;
}
button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.5s;
  margin-right: 5px;
}
button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all 0.5s;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
