import type { ExtractPropTypes } from 'vue'
import { definePropType } from '@h-ui/utils'
import type Icon from './icon.vue'

export const iconProps = {
  size: {
    type: definePropType<number | string>([Number, String])
  },
  color: String
}

export type IconProps = ExtractPropTypes<typeof iconProps>

export type IconInstance = InstanceType<typeof Icon>
