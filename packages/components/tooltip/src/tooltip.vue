<template>
  <h-popper ref="popperRef">
    <h-tooltip-trigger>
      <slot v-if="$slots.default" />
    </h-tooltip-trigger>
  </h-popper>
</template>

<script setup lang="ts">
import HPopper from '@h-ui/components/popper'
import { ref } from 'vue'
import HTooltipTrigger from './trigger.vue'

const popperRef = ref<any>()
</script>
