<template>
  <i :class="ns.b()" v-bind="$attrs" :style="style">
    <slot />
  </i>
</template>
<script lang="ts" setup>
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'

const props = defineProps(iconProps)
const ns = createNameSpace('icon')

const style = computed(() => {
  const { size, color } = props
  if (!size && !color) return

  return {
    '--color': color,
    fontSize: `${size}px`
  }
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HIcon'
})
</script>
