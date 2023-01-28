<template>
  <h-popper-content
    v-if="shouldRender"
    :popper-class="popperClass"
  ></h-popper-content>
</template>

<script lang="ts" setup>
import { HPopperContent } from '@h-ui/components/popper'
import { TOOLTIP_INJECTION_KEY } from '@h-ui/tokens'
import { computed, inject, unref } from 'vue'
import { useTooltipContentProps } from './content'

const props = defineProps(useTooltipContentProps)

const { open } = inject(TOOLTIP_INJECTION_KEY)!

const shouldRender = computed(() => {
  return !unref(open)
})
</script>

<style scoped></style>
