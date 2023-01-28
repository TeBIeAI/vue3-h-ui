import { ExtractPropTypes } from 'vue'
import { Measurable } from '@h-ui/tokens'
import { definePropType } from '@h-ui/utils'

export const popperTriggerProps = {
  virtualRef: definePropType<Measurable>(Object),
  virtualTriggering: Boolean,
  onClick: {
    type: definePropType<(e: Event) => void>(Function)
  },
  id: String,
  open: Boolean
} as const

export type PopperTriggerProps = ExtractPropTypes<typeof popperTriggerProps>
