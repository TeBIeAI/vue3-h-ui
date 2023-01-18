import { CheckboxProps } from '../checkbox'
import { useCheckboxDisabled } from './use-checkbox-disabled'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'

const setStoreValue = (
  props: CheckboxProps,
  { modelValue }: Pick<CheckboxProps, 'modelValue'>
) => {
  props.checked
}

export const useCheckbox = (props: CheckboxProps) => {
  const { modelValue } = useCheckboxModel(props)
  const { isChecked } = useCheckboxStatus(props)
  const { isDisabled } = useCheckboxDisabled({ modelValue, isChecked })

  return { modelValue, isChecked, isDisabled }
}
