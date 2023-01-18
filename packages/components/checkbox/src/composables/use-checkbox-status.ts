import { isArray, isBoolean } from '@h-ui/utils'
import { computed, ref } from 'vue'
import { CheckboxProps } from '../checkbox'

export const useCheckboxStatus = (props: CheckboxProps) => {
  const isChecked = computed<boolean>(() => {
    const value = props.modelValue as any
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      return true
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  return {
    isChecked
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
