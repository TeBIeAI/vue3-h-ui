import { ExtractPropTypes } from 'vue'
import { usePopperTriggerProps } from '@h-ui/components/popper/src/trigger'
import { Arrayable, buildProps, definePropType } from '@h-ui/utils'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array])
  }
} as const)

export type HlTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>
