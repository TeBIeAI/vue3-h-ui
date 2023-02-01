import { definePropType, isNumber } from '@h-ui/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import Scrollbar from './scrollbar.vue'

export const scrollbarProps = {
  /**
   * @description height of scrollbar
   */
  height: {
    type: [String, Number],
    default: ''
  },
  /**
   * @description max height of scrollbar
   */
  maxHeight: {
    type: [String, Number],
    default: ''
  },
  /**
   * @description style of wrap
   */
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: ''
  },
  /**
   * @description class of wrap
   */
  wrapClass: {
    type: [String, Array],
    default: ''
  },
  /**
   * @description class of view
   */
  viewClass: {
    type: [String, Array],
    default: ''
  },
  /**
   * @description style of view
   */
  viewStyle: {
    type: [String, Array, Object],
    default: ''
  },
  /**
   * @description do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
   */
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * @description always show
   */
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }: {
    scrollTop: number
    scrollLeft: number
  }) => [scrollTop, scrollLeft].every(isNumber)
}

export type ScrollbarEmits = typeof scrollbarEmits

export type ScrollbarInstance = InstanceType<typeof Scrollbar>
