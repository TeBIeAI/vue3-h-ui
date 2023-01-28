import type { ExtractPropTypes } from 'vue'
import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { CheckboxValueType } from './checkbox'
import { useSizeProps } from '@h-ui/hooks'
import { definePropType, isArray } from '@h-ui/utils'
import checkboxGroup from './checkbox-group.vue'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const checkboxGroupProps = {
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => []
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @description minimum number of checkbox checked
   */
  min: Number,
  /**
   * @description maximum number of checkbox checked
   */
  max: Number,
  /**
   * @description size of checkbox
   */
  size: useSizeProps,
  /**
   * @description label for screen reader
   */
  label: String,
  /**
   * @description border and background color when button is active
   */
  fill: String,
  /**
   * @description font color when button is active
   */
  textColor: String,
  /**
   * @description element tag of the checkbox group
   */
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
}

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>
