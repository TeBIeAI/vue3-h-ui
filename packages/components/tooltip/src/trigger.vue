<template>
  <h-popper-trigger :class="ns.e('trigger')">
    <slot />
  </h-popper-trigger>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { HPopperTrigger } from '@h-ui/components/popper'

const ns = createNameSpace('tooltip')
</script>
<style scoped></style>
