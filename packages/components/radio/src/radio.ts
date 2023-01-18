import { CHANGE_EVENT } from './../../../constants/event'
import type { ExtractPropTypes } from 'vue'
import { useSizeProps } from '@h-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@h-ui/constants'
import { isBoolean, isNumber, isString } from '@h-ui/utils'

export const radioPropsBase = {
  size: useSizeProps,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ''
  }
}

export const radioProps = {
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
}

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
