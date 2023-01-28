<template>
  <component
    :class="[
      ns.b(),
      ns.is('checked', isChecked),
      ns.is('disabled', isDisabled)
    ]"
    is="label"
  >
    <span :class="[ns.e('input'), ns.is('checked', isChecked)]">
      <input
        v-model="modelValue"
        :value="label"
        :disabled="isDisabled"
        :name="name"
        :tabindex="tabindex"
        type="checkbox"
        :class="[ns.e('original')]"
      />
      <span :class="[ns.e('inner')]"></span>
    </span>
    <span :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script lang="ts" setup>
import { createNameSpace } from '@h-ui/utils'
import { defineComponent } from 'vue'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './composables/use-checkbox'

const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

const { modelValue, isChecked, isDisabled } = useCheckbox(props)

console.log(modelValue)
const ns = createNameSpace('checkbox')
</script>

<script lang="ts">
export default defineComponent({
  name: 'HCheckbox'
})
</script>
<style scoped></style>
