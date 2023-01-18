<template>
  <label :class="[ns.b(), ns.is('checked', label === modelValue)]">
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', label === modelValue)
      ]"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        :value="label"
        :name="name"
        :disabled="disabled"
        type="radio"
        :class="[ns.e('original')]"
        @change="handleChange"
      />
      <span :class="[ns.e('inner')]"></span>
    </span>
    <span :class="[ns.e('label')]">
      <slot> {{ label }} </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { defineComponent, nextTick } from 'vue'
import { radioProps, radioEmits } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const ns = createNameSpace('radio')

const { radioRef, modelValue } = useRadio(props, emit)

const handleChange = () => {
  nextTick(() => emit('change', modelValue.value))
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'HRadio'
})
</script>
<style scoped></style>
