import { ExtractPropTypes } from 'vue'
import { popperProps } from '@h-ui/components/popper'
import { useTooltipTriggerProps } from './trigger'
import { useTooltipContentProps } from './content'
import { createModelToggleComposable } from '@h-ui/hooks'

export const { useModelToggle: useTooltipModalToggle } =
  createModelToggleComposable('visible' as const)

export const useTooltipProps = {
  ...popperProps,
  ...useTooltipTriggerProps,
  ...useTooltipContentProps
}

export type HTooltipProps = ExtractPropTypes<typeof useTooltipProps>
