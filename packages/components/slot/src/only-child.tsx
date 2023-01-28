import {
  cloneVNode,
  defineComponent,
  Fragment,
  inject,
  withDirectives
} from 'vue'
import type { VNode } from 'vue'
import { createNameSpace, isObject } from '@h-ui/utils'
import { FORWARD_REF_INJECTION_KEY, useForwardRefDirective } from '@h-ui/hooks'
import { NOOP } from '@vue/shared'

const NAME = 'HOnlyChild'

export const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    return () => {
      const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY)
      const forwardRefDirective = useForwardRefDirective(
        forwardRefInjection?.setForwardRef ?? NOOP
      )

      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        console.warn(NAME, 'requires exact only one valid child.')
        return
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        console.warn(NAME, 'no valid child node found')
      }
      return withDirectives(cloneVNode(firstLegitNode!, attrs), [
        [forwardRefDirective]
      ])
    }
  }
})

const findFirstLegitChild = (node: VNode[] | undefined): VNode | null => {
  if (!node) return null
  const children = node

  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
        case 'svg':
          return wrapTextContent(child)
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return child
      }
    }
    return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(s: string | VNode) {
  debugger
  const ns = createNameSpace('only-child')
  return <span class={ns.e('content')}>{s}</span>
}
