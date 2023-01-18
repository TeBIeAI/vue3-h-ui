import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { useSizeProps } from '@h-ui/hooks'
import { isBoolean, isNumber, isString } from '@h-ui/utils'
import { ExtractPropTypes } from 'vue'
import checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  /**
   * @description binding value
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined
  },
  /**
   * @description value of the Checkbox when used inside a `checkbox-group`
   */
  label: {
    type: [String, Boolean, Number, Object]
  },
  /**
   * @description whether the Checkbox is disabled
   */
  disabled: Boolean,
  /**
   * @description if the Checkbox is checked
   */
  checked: Boolean,
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: undefined
  },
  /**
   * @description value of the Checkbox if it's checked
   */
  trueLabel: {
    type: [String, Number],
    default: undefined
  },
  /**
   * @description value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: undefined
  },
  /**
   * @description input id
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * @description size of the Checkbox
   */
  size: useSizeProps,
  /**
   * @description input tabindex
   */
  tabindex: [String, Number],
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof checkbox>
