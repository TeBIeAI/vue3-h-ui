<template>
  <div class="play-container">
    <h-a v-model="radio"> 11 </h-a>
    <h-radio-group v-model="radio" name="aaa">
      <h-radio :label="3"> Option A </h-radio>
      <h-radio :label="6"> Option B </h-radio>
      <h-radio :label="9"> Option C </h-radio>
    </h-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref(3)
</script>

<style scoped></style>
