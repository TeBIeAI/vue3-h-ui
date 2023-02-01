<template>
  <li v-show="visible">
    <slot>{{ currentLable }}</slot>
  </li>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { optionProps } from './options'
import { useOption } from './useOption'

const props = defineProps(optionProps)

const states = reactive({
  visible: true
})

const { visible } = toRefs(states)

const { currentLable } = useOption(props, states)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HOption'
})
</script>
<style scoped></style>
