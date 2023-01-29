<template>
  <teleport :to="appendTo">
    <transition @after-enter="onAfterShow">
      <h-popper-content
        :v-show="shouldShow"
        :visible="shouldShow"
        v-if="shouldRender"
        :popper-class="popperClass"
      >
        <slot />
      </h-popper-content>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { HPopperContent } from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { computed, defineComponent, inject, unref } from 'vue'
import { useTooltipContentProps } from './content'

const props = defineProps(useTooltipContentProps)

const { open, onShow, controlled } = inject(TOOLTIP_INJECTION_KEY)!

const shouldRender = computed(() => {
  return unref(open)
})

const shouldShow = computed(() => {
  return unref(open)
})

const appendTo = computed(() => {
  return props.appendTo || 'body'
})

const onAfterShow = () => {
  onShow()
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'HTooltipContent'
})
</script>
