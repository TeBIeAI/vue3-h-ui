import { radioEmits } from './radio'
import { useSizeProps } from '@h-ui/hooks'
import type { ExtractPropTypes } from 'vue'
import RadioGroup from './radio-group.vue'

export const radioGroupProps = {
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * @description the size of radio buttons or bordered radios
   */
  size: useSizeProps,
  /**
   * @description whether the nesting raidos are disabled
   */
  disabled: Boolean,
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  /**
   * @description border and background color when button is active
   */
  fill: {
    type: String,
    default: ''
  },
  /**
   * @description same as `aria-label` in RaidoGroup
   */
  label: {
    type: String,
    default: undefined
  },
  /**
   * @description font color when button is active
   */
  textColor: {
    type: String,
    default: ''
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits

export type RadioGroupInstance = typeof RadioGroup
