import { definePropType } from '@h-ui/utils'
import type { ExtractPropTypes } from 'vue'
import { popperTriggerProps } from '@h-ui/components/popper'

export type TooltipTriggerType = 'hover' | 'focus' | 'click'

export const useTooltipTriggerProps = {
  ...popperTriggerProps,
  trigger: {
    type: definePropType<TooltipTriggerType[]>([String, Array]),
    default: 'hover'
  }
}

export type HTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>
