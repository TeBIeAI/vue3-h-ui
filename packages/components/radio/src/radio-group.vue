<template>
  <div ref="radioGroupRef" :class="ns.b('group')" role="radiogroup">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import {
  computed,
  defineComponent,
  nextTick,
  provide,
  reactive,
  ref,
  watch,
  toRefs
} from 'vue'
import {
  radioGroupEmits,
  RadioGroupProps,
  radioGroupProps
} from './radio-group'
import { radioGroupKey } from '@h-ui/tokens'
import { UPDATE_MODEL_EVENT } from '@h-ui/constants'

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const ns = createNameSpace('radio')

const radioGroupRef = ref<HTMLDivElement>()

watch(
  () => props.modelValue,
  (val) => {}
)

const name = computed(() => props.name)

const changeEvent = (val: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, val)
  nextTick(() => emit('change', val))
}

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    name,
    changeEvent
  })
)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HRadioGroup'
})
</script>
