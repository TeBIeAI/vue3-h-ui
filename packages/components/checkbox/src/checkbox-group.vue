<template>
  <component
    aria-label="checkbox-group"
    :is="tag"
    :class="[ns.b('group')]"
    role="group"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { checkboxGroupKey } from '@h-ui/tokens'
import { createNameSpace } from '@h-ui/utils'
import { provide, toRefs, defineComponent, computed, nextTick } from 'vue'
import {
  checkboxGroupEmits,
  checkboxGroupProps,
  CheckboxGroupValueType
} from './checkbox-group'
import { pick } from 'lodash-es'
import { UPDATE_MODEL_EVENT } from '@h-ui/constants'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const changeEvent = async (val: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, val)
  await nextTick()
  emit('change', val)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    changeEvent(val)
  }
})
const ns = createNameSpace('checkbox')
provide(checkboxGroupKey, {
  ...pick(toRefs(props), [
    'size',
    'min',
    'max',
    'disabled',
    'validateEvent',
    'fill',
    'textColor'
  ]),
  modelValue,
  changeEvent
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HCheckboxGroup'
})
</script>
