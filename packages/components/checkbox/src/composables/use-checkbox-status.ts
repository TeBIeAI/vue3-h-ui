import { isObject } from './../../../../utils/types'
import { isArray, isBoolean } from '@h-ui/utils'
import { computed, ref, toRaw } from 'vue'
import { CheckboxProps } from '../checkbox'
import { CheckboxModel } from './use-checkbox-model'

export const useCheckboxStatus = (
  props: CheckboxProps,
  { modelValue }: Pick<CheckboxModel, 'modelValue'>
) => {
  const isChecked = computed<boolean>(() => {
    const value = modelValue.value
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      if (isObject(props.label)) {
        return
      } else {
        return value.map(toRaw).includes(props.label)
      }
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
