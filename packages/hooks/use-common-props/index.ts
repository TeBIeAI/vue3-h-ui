import { PropType } from 'vue'
import type { ComponentSize } from '@h-ui/constants'

export const useSizeProps = {
  type: String as PropType<ComponentSize>,
  required: false
}
