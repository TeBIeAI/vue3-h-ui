import { ExtractPropTypes } from 'vue'
import { popperProps } from '@h-ui/components/popper'
import { useTooltipTriggerProps } from './trigger'
import { useTooltipContentProps } from './content'
import { createModelToggleComposable } from '@h-ui/hooks'
import { popperArrowProps } from '@h-ui/components/popper'

export const { useModelToggle: useTooltipModalToggle } =
  createModelToggleComposable('visible' as const)

export const useTooltipProps = {
  ...popperProps,
  ...useTooltipTriggerProps,
  ...useTooltipContentProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
}

export type HTooltipProps = ExtractPropTypes<typeof useTooltipProps>
