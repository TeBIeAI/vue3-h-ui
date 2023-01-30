import { definePropType } from '@h-ui/utils'

export const popperContentProps = {
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  placement: {
    type: String,
    default: 'bottom'
  },
  effect: {
    type: String,
    default: 'dark'
  },
  referenceEl: {
    type: definePropType<HTMLElement>(Object)
  }
}
