<template>
  <div
    v-show="visible"
    :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
  >
    <div :class="[ns.e('content')]">
      <span v-if="title || $slots.title" :class="[ns.e('title'), isBlodTitle]">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="$slots.default || description" :class="ns.e('description')">
        <slot>{{ description }}</slot>
      </p>
      <template v-if="closable">
        <div
          v-if="closeText"
          :class="[ns.e('close-btn'), ns.is('customed')]"
          @click="close"
        >
          {{ closeText }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent, ref, useSlots } from 'vue'
import { alertEmit, alertProps } from './alert'

const props = defineProps(alertProps)
const emit = defineEmits(alertEmit)
const slots = useSlots()

const ns = createNameSpace('alert')

const visible = ref(true)

const isBlodTitle = computed(() => {
  return { [ns.is('bold')]: props.description || slots.default }
})

const close = (e: MouseEvent) => {
  visible.value = false
  emit('close', e)
}
</script>
<script lang="ts">
export default defineComponent({
  name: 'HAlert'
})
</script>
<style scoped></style>
