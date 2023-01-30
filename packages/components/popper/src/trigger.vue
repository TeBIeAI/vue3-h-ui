<template>
  <h-only-child v-bind="$attrs">
    <slot />
  </h-only-child>
</template>

<script setup lang="ts">
import { defineComponent, inject, onMounted, useAttrs, watch } from 'vue'
import { HOnlyChild } from '@h-ui/components/slot'
import { popperTriggerProps } from './trigger'
import { useForwardRef } from '@h-ui/hooks'
import { POPPER_INJECTION_KEY } from '@h-ui/tokens'

const props = defineProps(popperTriggerProps)

const { triggerRef } = inject(POPPER_INJECTION_KEY)!

useForwardRef(triggerRef)

onMounted(() => {
  debugger
  console.log(triggerRef)
  watch(triggerRef, () => {
    debugger
  })
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HPopperTriiger'
})
</script>
