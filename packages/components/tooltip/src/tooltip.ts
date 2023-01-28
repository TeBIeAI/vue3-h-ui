import { ExtractPropTypes } from 'vue'
import { popperProps } from '@h-ui/components/popper'
import { useTooltipTriggerProps } from './trigger'
import { useTooltipContentProps } from './content'

export const useTooltipProps = {
  ...popperProps,
  ...useTooltipTriggerProps,
  ...useTooltipContentProps
}

export type HTooltipProps = ExtractPropTypes<typeof useTooltipProps>
