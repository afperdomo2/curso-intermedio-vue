<template>
  <div>
    <ul>
      <RouterLink :to="{ name: 'client-by-id', params: { id: 1 } }">Client 1</RouterLink>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
