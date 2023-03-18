<template>
  <hl-only-child v-bind="$attrs">
    <slot />
  </hl-only-child>
</template>

<script lang="ts" setup>
import { useForwardRef } from '@h-ui/hooks'
import { defineComponent, inject, onMounted, useAttrs, watch } from 'vue'
import { POPPER_INJECTION_KEY } from './constants'
import { HlOnlyChild } from '@h-ui/components/slot'
import { popperTriggerProps } from './trigger'
import { unrefElement } from '@vueuse/core'
import { isElement } from '@h-ui/utils'

const attrs = useAttrs()
const props = defineProps(popperTriggerProps)

const { role, triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

onMounted(() => {
  watch(
    () => props.virtualRef,
    (virtualEl) => {
      if (virtualEl) {
        triggerRef.value = unrefElement(virtualEl as HTMLElement)
      }
    },
    {
      immediate: true
    }
  )

  watch(
    triggerRef,
    (el, prevEl) => {
      if (isElement(el)) {
        ;(['onClick'] as const).forEach((eventName) => {
          const handler = props[eventName]
          if (handler) {
            ;(el as HTMLElement).addEventListener(
              eventName.slice(2).toLowerCase(),
              handler
            )
          }
        })
      }
    },
    {
      immediate: true
    }
  )
})

defineExpose({
  triggerRef
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HlPopperTrigger',
  inheritAttrs: false
})
</script>
<style scoped></style>
