<template>
  <div :class="containerCls">
    <template v-if="type !== 'textarea'">
      <div :class="wrapperCls">
        <input
          :class="nsInput.e('inner')"
          ref="input"
          type="text"
          :disabled="inputDisabled"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <!-- suffix-icon slot -->
        <template v-if="suffixVisible">
          <span :class="nsInput.e('suffix-inner')" @click="focus">
            <template v-if="!showClear || !showPwdVisible">
              <slot name="suffix" />
              <h-icon v-if="suffixIcon" :class="nsInput.e('icon')">
                <component :is="suffixIcon" />
              </h-icon>
            </template>
            <h-icon v-if="showClear" :class="nsInput.e('icon')" @click="clear">
              <circle-close></circle-close>
            </h-icon>
          </span>
        </template>
      </div>
      <div v-if="$slots.append" :class="nsInput.be('group', 'append')">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { useDisabled } from '@h-ui/hooks'
import { createNameSpace } from '@h-ui/utils'
import { onMounted, ref, useSlots, watch } from 'vue'
import { computed, defineComponent, nextTick, shallowRef } from 'vue'
import { inputEmits, inputProps } from './input'
import { CircleClose } from '@element-plus/icons-vue'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()

const nsInput = createNameSpace('input')
const nsTextarea = createNameSpace('textarea')

const inputDisabled = useDisabled()

const containerCls = computed(() => [
  props.type === 'text' ? nsInput.b() : nsTextarea.b(),
  nsInput.is('disabled', inputDisabled.value),
  {
    [nsInput.b('group')]: slots.append,
    [nsInput.bm('group', 'append')]: slots.append,
    [nsInput.m('suffix')]:
      slots.suffix || props.suffixIcon || props.clearable || props.showPassword
  }
])

const showClear = computed(() => {
  return (
    props.clearable &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value
  )
})

const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value
)

const suffixVisible = computed(() => {
  return (
    !!slots.suffix ||
    !!props.suffixIcon ||
    showClear.value ||
    props.showPassword
  )
})

const wrapperCls = computed(() => [
  nsInput.e('wrapper'),
  nsInput.is('focus', focused.value)
])

const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()

const focused = ref(false)

const _ref = computed(() => input.value || textarea.value)

const nativeInputValue = computed(() => String(props.modelValue))

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement

  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)

  await nextTick()
  // 设置本地input值
  setNativeInputValue()
}

const handleFocus = () => {
  focused.value = true
}

const handleBlur = () => {
  focused.value = false
}

const focus = async () => {
  await nextTick()
  _ref.value?.focus()
}

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

onMounted(() => {
  setNativeInputValue()
})

watch(
  () => props.modelValue,
  () => {
    // console.log(props.modelValue)
  }
)

watch(nativeInputValue, () => {
  setNativeInputValue()
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'HInput'
})
</script>
