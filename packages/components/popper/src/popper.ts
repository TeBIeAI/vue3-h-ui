import type { ExtractPropTypes } from 'vue'
import Popper from './popper.vue'

export const roleTypes = [
  'dialog',
  'grid',
  'group',
  'listbox',
  'menu',
  'navigation',
  'tooltip',
  'tree'
] as const

export const popperProps = {
  role: {
    type: String,
    values: roleTypes,
    default: 'tooltip'
  }
} as const

export type PopperType = ExtractPropTypes<typeof popperProps>
export type PopperInstance = InstanceType<typeof Popper>
