import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { useDisabled } from '@h-ui/hooks'
import { checkboxGroupKey } from '@h-ui/tokens'
import { isUndefined } from '@h-ui/utils'
import { computed, getCurrentInstance, inject, ref } from 'vue'
import { CheckboxProps } from '../checkbox'
import { CheckboxModel } from './use-checkbox-model'
import { CheckboxStatus } from './use-checkbox-status'

export const useCheckboxDisabled = ({
  modelValue,
  isChecked
}: Pick<CheckboxModel, 'modelValue'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupKey)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    return (
      !isUndefined(max) && modelValue.value.length >= max && !isChecked.value
    )
  })

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )
  // computed(() => {
  //   // return true
  // })

  return {
    isDisabled
  }
}
