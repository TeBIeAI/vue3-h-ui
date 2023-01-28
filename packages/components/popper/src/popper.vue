<template>
  <slot />
</template>

<script setup lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { popperProps } from './popper'
import type { Instance as PopperInstance } from '@popperjs/core'
import { POPPER_INJECTION_KEY } from '@h-ui/tokens'
import { createNameSpace } from '@h-ui/utils'

const props = defineProps(popperProps)

const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()

const popperProvieds = {
  triggerRef,
  contentRef,
  popperInstanceRef
}

provide(POPPER_INJECTION_KEY, popperProvieds)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HPopper'
})
</script>
