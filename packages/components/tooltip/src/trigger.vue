<template>
  <h-popper-trigger
    :virtual-ref="virtualRef"
    :open="open"
    @click="onClick"
    name="nihao"
    :class="ns.e('trigger')"
  >
    <slot />
  </h-popper-trigger>
</template>

<script lang="ts" setup>
import { defineComponent, inject } from 'vue'
import { HPopperTrigger } from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { createNameSpace } from '@h-ui/utils'
import { useTooltipTriggerProps } from './trigger'

const ns = createNameSpace('tooltip')

const props = defineProps(useTooltipTriggerProps)

const { controlled, open, onOpen, onShow, onHide, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined
)!

const onClick = () => {
  onToggle()
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'HTooltipTrigger'
})
</script>
<style scoped></style>
