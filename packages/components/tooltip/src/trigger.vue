<template>
  <h-popper-trigger :class="ns.e('trigger')" :open="open" @click="onClick">
    <slot />
  </h-popper-trigger>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { HPopperTrigger } from '@h-ui/components/popper'
import { useTooltipTriggerProps } from './trigger'
import { inject } from 'vue'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'

const props = defineProps(useTooltipTriggerProps)

const ns = createNameSpace('tooltip')
const { open, onOpen, onClose } = inject(TOOLTIP_INJECTION_KEY, undefined)!

const onClick = () => {
  debugger
}
</script>
<style scoped></style>
