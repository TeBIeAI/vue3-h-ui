<template>
  <hl-popper :role="role" ref="popperRef">
    <h-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :virtual-ref="virtualRef"
    >
      <slot v-if="$slots.default" />
    </h-tooltip-trigger>
    <h-tooltip-content :content="content">
      <slot name="content">
        <span>{{ content }}</span>
      </slot>
    </h-tooltip-content>
  </hl-popper>
</template>

<script lang="ts" setup>
import { computed, defineComponent, provide, readonly, ref, unref } from 'vue'
import { HlPopper, PopperInstance } from '@h-ui/components'
import { tooltipEmits, useTooltipModelToggle, useTooltipProps } from './tooltip'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { isBoolean } from '@h-ui/utils'
import HTooltipTrigger from './trigger.vue'
import HTooltipContent from './content.vue'
import { useId, usePopperContainer } from '@h-ui/hooks'

const props = defineProps(useTooltipProps)
const emit = defineEmits(tooltipEmits)

usePopperContainer()
const id = useId()
debugger
const popperRef = ref<PopperInstance>()

const open = ref(false)
const toggleReason = ref<Event>()

const { show, hasUpdateHandler } = useTooltipModelToggle({
  indicator: open,
  toggleReason
})

const controlled = computed(() => isBoolean(props.visible))

const shouldRender = computed(() => {
  return unref(open)
})

const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})

provide(TOOLTIP_INJECTION_KEY, {
  controlled,
  open: readonly(open),
  onOpen: (event?: Event) => {
    setTimeout(() => {
      show()
    })
  },
  onClose: () => {},
  onToggle: (event?: Event) => {
    if (unref(open)) {
      debugger
    } else {
      setTimeout(() => {
        show(event)
      })
    }
  },
  onShow: () => {
    emit('show', toggleReason.value)
  },
  onHide: () => {}
})
</script>
<script lang="ts">
export default defineComponent({
  name: 'HTooltip'
})
</script>
