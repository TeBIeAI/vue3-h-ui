<template>
  <div ref="contentRef">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { popperContentProps } from './content'

const props = defineProps(popperContentProps)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HPopperContent'
})
</script>
<style scoped></style>
