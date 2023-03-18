import { buildProps, definePropType } from '@h-ui/utils'
import { ExtractPropType } from '@h-ui/utils/props/type'

export const useTooltipContentProps = buildProps({
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object])
  },
  content: {
    type: String,
    default: ''
  },
  disabled: Boolean
})

export type HTooltipContentProps = ExtractPropType<
  typeof useTooltipContentProps
>
