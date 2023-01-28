import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { useSizeProps } from '@h-ui/hooks'
import { definePropType, isString, mutable, iconPropType } from '@h-ui/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import Input from './input.vue'

export const inputProps = {
  /**
   * @description native input id
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * @description input box size
   */
  size: useSizeProps,
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object
    ]),
    default: ''
  },
  /**
   * @description type of input
   */
  type: {
    type: String,
    default: 'text'
  },
  /**
   * @description control the resizability
   */
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical']
  },
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off'
  },
  /**
   * @description format content
   */
  formatter: {
    type: Function
  },
  /**
   * @description parse content
   */
  parser: {
    type: Function
  },
  /**
   * @description placeholder
   */
  placeholder: {
    type: String
  },
  /**
   * @description native input form
   */
  form: {
    type: String
  },
  /**
   * @description native input readonly
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @description native input readonly
   */
  clearable: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: iconPropType
  },
  suffixIcon: {
    type: iconPropType
  },
  /**
   * @description toggleable password input
   */
  showPassword: {
    type: Boolean,
    default: false
  },
  /**
   * @description word count
   */
  showWordLimit: {
    type: Boolean,
    default: false
  },
  /**
   * @description container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: undefined
  },
  /**
   * @description native input aria-label
   */
  label: {
    type: String,
    default: undefined
  },
  /**
   * @description input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
   * @description input or texearea element style
   */
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const)
  }
}

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (val: string) => isString(val),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
