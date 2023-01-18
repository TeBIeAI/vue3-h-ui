import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { computed, inject, ref } from 'vue'
import { RadioEmits, RadioProps } from './radio'
import type { SetupContext } from 'vue'
import { radioGroupKey } from '@h-ui/tokens'

export const useRadio = (
  props: {
    label: RadioProps['label']
    modelValue?: RadioProps['modelValue']
  },
  emit?: SetupContext<RadioEmits>['emit']
) => {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const modelValue = computed<RadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup?.modelValue : props.modelValue
    },
    set(val) {
      if (isGroup.value) {
        radioGroup?.changeEvent(val)
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val)
      }
      radioRef.value!.checked = props.modelValue === props.label
    }
  })

  return {
    radioRef,
    modelValue
  }
}
