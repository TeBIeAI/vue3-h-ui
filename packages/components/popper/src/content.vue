<template>
  <div :class="contentCls">popper-content</div>
</template>

<script lang="ts" setup>
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent } from 'vue'
import { popperContentProps } from './content'

const props = defineProps(popperContentProps)

const ns = createNameSpace('popper')

const contentCls = computed(() => [ns.b(), props.popperClass])
</script>

<script lang="ts">
export default defineComponent({
  name: ''
})
</script>
<style scoped></style>
