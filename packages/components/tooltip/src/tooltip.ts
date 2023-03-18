import { ExtractPropTypes } from 'vue'
import { popperProps } from '@h-ui/components/popper'
import { createModelToggleComposable } from '@h-ui/hooks'
import { buildProps } from '@h-ui/utils'
import { useTooltipTriggerProps } from './trigger'
import { useTooltipContentProps } from './content'

export const {
  useModelToggle: useTooltipModelToggle,
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits
} = createModelToggleComposable('visible' as const)

export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipTriggerProps,
  ...useTooltipContentProps
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'show',
  'hide',
  'open',
  'close'
]

export type TooltipProps = ExtractPropTypes<typeof useTooltipProps>
