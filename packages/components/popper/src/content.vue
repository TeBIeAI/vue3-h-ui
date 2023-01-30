<template>
  <div ref="popperContentRef" :class="contentCls">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { POPPER_INJECTION_KEY } from '@h-ui/tokens'
import { createNameSpace } from '@h-ui/utils'
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  ref,
  unref,
  watch
} from 'vue'
import { popperContentProps } from './content'
debugger
const props = defineProps(popperContentProps)

const ns = createNameSpace('popper')

const { triggerRef, contentRef, popperInstanceRef } =
  inject(POPPER_INJECTION_KEY)!

const popperContentRef = ref<HTMLElement>()

const contentCls = computed(() => [
  ns.b(),
  props.popperClass,
  ns.is(props.effect)
])

const computedReference = computed(() => {
  return props.referenceEl || unref(triggerRef)
})

let updateHandle
onMounted(() => {
  debugger
  watch(
    () => computedReference.value,
    (referenceEl) => {
      debugger
      console.log(referenceEl)
      debugger
    }
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: ''
})
</script>
<style scoped></style>
