import { buildProps, definePropType } from '@h-ui/utils'
import { ExtractPropTypes } from 'vue'
import type { Measurable } from './constants'

export const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType<Measurable>(Object)
  },
  virtualTriggering: Boolean,
  onClick: {
    type: definePropType<(e: Event) => void>(Function)
  },
  id: String,
  open: Boolean
} as const)

export type PopperTriggerProps = ExtractPropTypes<typeof popperTriggerProps>

export const usePopperTriggerProps = popperTriggerProps
