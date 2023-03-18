import type { Instance } from "@popperjs/core"
import type { InjectionKey, Ref, ComputedRef } from "vue"

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

export type HlPopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  popperInstanceRef: Ref<Instance | undefined>
  referenceRef: Ref<Measurable | undefined>
  role: ComputedRef<string>
}

export const POPPER_INJECTION_KEY: InjectionKey<HlPopperInjectionContext> = Symbol('popper')
