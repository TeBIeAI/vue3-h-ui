<template>
  <h-input v-model="name" clearable @input="handleInput">
    <template #append> .com </template>
  </h-input>
</template>

<script setup lang="ts">
import { Calendar } from '@element-plus/icons-vue'
import { ref } from 'vue'

const name = ref('韩超')

const handleInput = (val) => {
  console.log('input-', val)
  console.log('modelValue', name.value)
}
</script>
<style scoped></style>
