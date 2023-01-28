import { ExtractPropTypes } from 'vue'
import { popperProps } from '@h-ui/components/popper'

export const useTooltipProps = {
  ...popperProps
}

export type HTooltipProps = ExtractPropTypes<typeof useTooltipProps>
