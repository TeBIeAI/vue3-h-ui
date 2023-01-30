import { InjectionKey, ObjectDirective, provide, Ref } from 'vue'

type ForwardRefSetter = <T>(el: T) => void

export type ForwardRefInjectionContext = {
  setForwardRef: ForwardRefSetter
}

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> =
  Symbol('HForwardRef')

export const useForwardRef = <T>(forwardRef: Ref<T | null>) => {
  const setForwardRef = (el: T) => {
    forwardRef.value = el
  }

  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  })
}

export const useForwardRefDirective = (
  setForwardRef: ForwardRefSetter
): ObjectDirective => {
  return {
    mounted(el) {
      debugger
      setForwardRef(el)
    },
    updated(el) {
      debugger
      setForwardRef(el)
    },
    unmounted() {
      debugger
      setForwardRef(null)
    }
  }
}
