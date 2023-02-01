<template>
  <h-scrollbar height="300px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </h-scrollbar>
</template>

<script lang="ts" setup></script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: ''
})
</script>
<style scoped></style>
