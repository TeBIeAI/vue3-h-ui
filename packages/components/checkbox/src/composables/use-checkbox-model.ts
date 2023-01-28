import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { checkboxGroupKey } from '@h-ui/tokens'
import { isUndefined } from '@h-ui/utils'
import { computed, getCurrentInstance, inject, ref } from 'vue'
import { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupKey)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)

  const modelValue = computed({
    get() {
      return isGroup
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },
    set(val: unknown) {
      if (isGroup) {
        checkboxGroup?.changeEvent!(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    }
  })

  return {
    modelValue,
    isGroup
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
