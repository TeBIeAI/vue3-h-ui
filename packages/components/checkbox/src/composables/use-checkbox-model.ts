import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { computed, getCurrentInstance, ref } from 'vue'
import { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()!

  const modelValue = computed({
    get() {
      return props.modelValue ?? selfModel.value
    },
    set(val: unknown) {
      emit(UPDATE_MODEL_EVENT, val)
      selfModel.value = val
    }
  })

  return {
    modelValue
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
