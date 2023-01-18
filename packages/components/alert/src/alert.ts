import { PropType } from 'vue'
import type { ExtractPropTypes } from 'vue'

const alertEffects = ['light', 'dark'] as const

export const alertProps = {
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
    default: 'info'
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ''
  },
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: 'light'
  }
} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmit = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type AlertEmit = typeof alertEmit
