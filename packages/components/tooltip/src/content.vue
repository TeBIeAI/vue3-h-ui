<template>
  <teleport :to="appendTo">
    <transition @after-enter="onAfterShow">
      <h-popper-content
        ref="contentRef"
        v-show="shouldShow"
        v-bind="$attrs"
        :visible="shouldShow"
        v-if="shouldRender"
        :popper-class="popperClass"
        :placement="placement"
      >
        <slot />
      </h-popper-content>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { HPopperContent } from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { computed, defineComponent, inject, ref, unref, watch } from 'vue'
import { useTooltipContentProps } from './content'
import { onClickOutside } from '@vueuse/core'
const props = defineProps(useTooltipContentProps)

const contentRef = ref<any>()

const { open, onShow, controlled, onClose } = inject(TOOLTIP_INJECTION_KEY)!

const shouldRender = computed(() => {
  return unref(open)
})

const shouldShow = computed(() => {
  return unref(open)
})

const appendTo = computed(() => {
  return props.appendTo || 'body'
})

let stopHandle: ReturnType<typeof onClickOutside>

const onAfterShow = () => {
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value
    }),
    () => {
      onClose()
    }
  )
}

watch(
  () => unref(open),
  (val) => {
    if (!val) {
      stopHandle?.()
    }
  }
)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HTooltipContent'
})
</script>
