<template>
  <h-popper ref="popperRef" :role="role">
    <h-tooltip-trigger :trigger="trigger">
      <slot v-if="$slots.default" />
    </h-tooltip-trigger>
    <h-tooltip-content :popper-class="popperClass"></h-tooltip-content>
  </h-popper>
</template>

<script setup lang="ts">
import HPopper from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { provide, readonly, ref } from 'vue'
import { useTooltipProps } from './tooltip'
import HTooltipTrigger from './trigger.vue'
import HTooltipContent from './content.vue'

const popperRef = ref<any>()

const props = defineProps(useTooltipProps)

const open = ref(false)

provide(TOOLTIP_INJECTION_KEY, {
  open: readonly(open),
  onOpen: (event?: Event) => {},
  onClose: (event?: Event) => {},
  onShow: () => {},
  onHide: () => {}
})
</script>
