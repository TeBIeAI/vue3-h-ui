<template>
  <h-popper ref="popperRef" :role="role">
    <h-tooltip-trigger :trigger="trigger">
      <slot v-if="$slots.default" />
    </h-tooltip-trigger>
    <h-tooltip-content
      ref="contentRef"
      :popper-class="popperClass"
      v-bind="$attrs"
      :placement="placement"
      :effect="effect"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content"></span>
        <span v-else>{{ content }}</span>
      </slot>
      <h-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
    </h-tooltip-content>
  </h-popper>
</template>

<script setup lang="ts">
import { HPopper, HPopperArrow } from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { computed, provide, readonly, ref, defineComponent, unref } from 'vue'
import { useTooltipModalToggle, useTooltipProps } from './tooltip'
import HTooltipTrigger from './trigger.vue'
import HTooltipContent from './content.vue'
import { isBoolean } from '@h-ui/utils'
import { useDelayedToggle } from '@h-ui/hooks'

const popperRef = ref<any>()

const props = defineProps(useTooltipProps)

const open = ref(false)
const toggleReason = ref<Event>()
const contentRef = ref<any>(null)

const { hide, show } = useTooltipModalToggle({
  indicator: open,
  toggleReason
})

const { onOpen, onClose } = useDelayedToggle({
  open: show,
  close: hide
})

const controlled = computed(() => isBoolean(props.visible))

provide(TOOLTIP_INJECTION_KEY, {
  controlled,
  open: readonly(open),
  onOpen: (event?: Event) => {
    onOpen()
  },
  onClose: (event?: Event) => {
    onClose()
  },
  onToggle: () => {
    if (unref(open)) {
      onClose()
    } else {
      onOpen()
    }
  },
  onShow: () => {},
  onHide: () => {}
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HTooltip'
})
</script>
