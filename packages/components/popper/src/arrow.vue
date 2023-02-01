<template>
  <span ref="arrowRef" :class="ns.e('arrow')" data-popper-arrow="" />
</template>

<script lang="ts" setup>
import { defineComponent, inject, onBeforeUnmount, watch } from 'vue'
import { POPPER_CONTENT_INJECTION_KEY } from '@h-ui/tokens'
import { popperArrowProps } from './arrow'
import { createNameSpace } from '@h-ui/utils'

const props = defineProps(popperArrowProps)

const ns = createNameSpace('popper')
const { arrowOffset, arrowRef } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val
  }
)
onBeforeUnmount(() => {
  arrowRef.value = undefined
})

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HPopperArrow',
  inheritAttrs: false
})
</script>
