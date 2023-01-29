<template>
  <h-popper-trigger :class="ns.e('trigger')" :open="open" @click="onClick">
    <slot />
  </h-popper-trigger>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { HPopperTrigger } from '@h-ui/components/popper'
import { useTooltipTriggerProps } from './trigger'
import { defineComponent, inject } from 'vue'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'

const props = defineProps(useTooltipTriggerProps)

const ns = createNameSpace('tooltip')
const { open, onOpen, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined
)!

const onClick = (e: MouseEvent) => {
  if (e.button === 0) {
    onToggle(e)
  }
}
</script>
<script lang="ts">
export default defineComponent({
  name: 'HTooltipTrigger'
})
</script>
