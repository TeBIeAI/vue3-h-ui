import { FORWARD_REF_INJECTION_KEY, useForwardRefDirective } from '@h-ui/hooks'
import { createNameSpace, isObject } from '@h-ui/utils'
import { NOOP } from '@vue/shared'
import type { VNode, Ref } from 'vue'
import {
  cloneVNode,
  defineComponent,
  inject,
  withDirectives,
  Fragment
} from 'vue'

export const OnlyChild = defineComponent({
  name: 'HlOnlyChild',
  setup(_, { slots, attrs }) {
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY)
    const forwardRefDirective = useForwardRefDirective(
      forwardRefInjection?.setForwardRef ?? NOOP
    )

    return () => {
      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        console.warn('HlOnlyChild', 'requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        console.warn('HlOnlyChild', 'no valid child node found')
        return null
      }

      return withDirectives(cloneVNode(firstLegitNode!, attrs), [
        [forwardRefDirective]
      ])
    }
  }
})

function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null
  const children = node as VNode[]
  for (const child of children) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
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
  const ns = createNameSpace('only-child')
  return <span class={ns.e('content')}>{s}</span>
}

export type OnlyChildExpose = {
  forwardRef: Ref<HTMLElement>
}
