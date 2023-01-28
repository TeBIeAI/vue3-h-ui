<template>
  <h-only-child v-bind="$attrs">
    <slot />
  </h-only-child>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { HOnlyChild } from '@h-ui/components/slot'
import { popperTriggerProps } from './trigger'

const props = defineProps(popperTriggerProps)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HPopperTriiger'
})
</script>
