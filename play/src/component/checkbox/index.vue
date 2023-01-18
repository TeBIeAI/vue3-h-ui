<template>
  <h-checkbox v-model="radio1" label="label1"></h-checkbox>
  <h-checkbox disabled v-model="radio2" label="label2"></h-checkbox>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const radio1 = ref(true)
const radio2 = ref(false)
</script>
<script lang="ts">
defineComponent({
  name: 'aaa'
})
</script>

<style scoped></style>
