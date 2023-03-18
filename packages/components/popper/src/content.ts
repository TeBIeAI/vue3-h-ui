import { buildProps, definePropType } from '@h-ui/utils'
import { ExtractPropType } from '@h-ui/utils/props/type'

export const popperContentProps = buildProps({
  visible: Boolean,
  referenceEl: {
    type: definePropType<HTMLElement>(Object)
  },
  triggerTargetEl: {
    type: definePropType<HTMLElement>(Object)
  }
} as const)

export type PopperContentProps = ExtractPropType<typeof popperContentProps>
