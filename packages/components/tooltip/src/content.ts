import { popperContentProps } from '@h-ui/components/popper'
import { definePropType } from '@h-ui/utils'

export const useTooltipContentProps = {
  ...popperContentProps,
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object])
  },
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null
  }
}
