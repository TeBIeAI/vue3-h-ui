<template>
  <slot />
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { defineComponent, provide, ref } from 'vue'
import { popperProps } from './popper'
import type { Instance as PopperInstance } from '@popperjs/core'
import { POPPER_INJECTION_KEY } from './constants';

const props = defineProps(popperProps)

const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const role = computed(() => props.role)

const popperProvides = {
  triggerRef,
  popperInstanceRef,
  contentRef,
  referenceRef,
  role
}

defineExpose(popperProvides)

provide(POPPER_INJECTION_KEY, popperProvides)

</script>

<script lang="ts">
export default defineComponent({
  name: 'HlPopper',
  inheritAttrs: false
})
</script>
<style scoped></style>
