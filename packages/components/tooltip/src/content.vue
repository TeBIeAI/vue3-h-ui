<template>
  <teleport :to="appendTo">
    <h-popper-content
      v-if="shouldRender"
      v-show="shouldShow"
      v-bind="$attrs"
      ref="contentRef"
    >
      <slot />
    </h-popper-content>
  </teleport>
</template>

<script lang="ts" setup>
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent, inject, ref, unref, watch } from 'vue'
import { useTooltipContentProps } from './content'
import { HPopperContent } from '@h-ui/components/popper'
import { usePopperContainerId } from '@h-ui/hooks'

const props = defineProps(useTooltipContentProps)

const { selector } = usePopperContainerId()

const ns = createNameSpace('tooltip')
const contentRef = ref<any>()

const { controlled, open, onOpen, onShow, onHide, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined
)!

const shouldRender = computed(() => unref(open))

const shouldShow = computed(() => (props.disabled ? false : unref(open)))

const appendTo = computed(() => props.appendTo || selector.value)

watch(
  () => props.content,
  () => {
    contentRef.value
  }
)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HTooltipContent',
  inheritAttrs: false
})
</script>
