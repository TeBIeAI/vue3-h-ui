import type { ExtractPropTypes } from 'vue'

export const optionProps = {
  value: {
    required: true,
    type: [String, Number, Boolean, Object]
  },
  label: [String, Number],
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false
  }
}

export type OptionProps = ExtractPropTypes<typeof optionProps>
