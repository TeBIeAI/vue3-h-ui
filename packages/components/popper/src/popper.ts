import { ExtractPropTypes } from 'vue'

export const roleTypes = [
  'dialog',
  'grid',
  'group',
  'listbox',
  'menu',
  'tooltip',
  'tree'
]

export const popperProps = {
  role: {
    type: String,
    values: roleTypes,
    default: 'tooltip'
  }
} as const

export type PopperProps = ExtractPropTypes<typeof popperProps>
