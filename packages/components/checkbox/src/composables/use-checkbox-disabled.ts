import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { useDisabled } from '@h-ui/hooks'
import { computed, getCurrentInstance, ref } from 'vue'
import { CheckboxProps } from '../checkbox'
import { CheckboxModel } from './use-checkbox-model'
import { CheckboxStatus } from './use-checkbox-status'

export const useCheckboxDisabled = ({
  modelValue,
  isChecked
}: Pick<CheckboxModel, 'modelValue'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const isDisabled =
    useDisabled()
    // computed(() => {
    //   // return true
    // })

  return {
    isDisabled
  }
}
