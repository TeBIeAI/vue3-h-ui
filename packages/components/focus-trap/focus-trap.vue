<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref } from 'vue'
import type { PropType } from 'vue'
import { FOCUS_TRAP_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'HFocusTrap',
  inheritAttrs: false,
  props: {
    trapped: Boolean,
    focusTrapEl: Object as PropType<HTMLElement>
  },
  emits: ['focusin', 'focusout'],
  setup(props, { emit }) {
    const forwardRef = ref<HTMLElement | undefined>()

    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef
    })

    onMounted(() => {
      if (props.trapped) {
      }
    })
  }
})
</script>
<style scoped></style>
