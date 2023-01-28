import { ComponentSize, UPDATE_MODEL_EVENT } from '@h-ui/constants'
import {
  iconPropType,
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
  isValidComponentSize
} from '@h-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'

export const selectProps = {
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined
  },
  automaticDropdown: Boolean,
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize
  },
  effect: {
    type: String as PropType<'light' | 'dark' | string>,
    default: 'light'
  },
  disabled: Boolean,
  clearable: Boolean,
  loading: Boolean,
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: false
  },
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: CircleClose
  },
  fitInputWidth: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType,
    default: ArrowDown
  },
  // eslint-disable-next-line vue/require-prop-types
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: {
    type: Boolean,
    default: false
  },
  suffixTransition: {
    type: Boolean,
    default: true
  }
}

export type SelectProps = ExtractPropTypes<typeof selectProps>

type SelectValueType = any[] | string | number | boolean | object
export const selectEmits = {
  [UPDATE_MODEL_EVENT]: (val: SelectValueType) =>
    isArray(val) ||
    isString(val) ||
    isNumber(val) ||
    isBoolean(val) ||
    isObject(val)
}

export type SelectEmits = typeof selectEmits
