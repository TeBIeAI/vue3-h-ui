import type { InjectionKey, Ref } from 'vue'

export type FocusTrapInjectionContent = {
  focusTrapRef: Ref<HTMLElement | undefined>
  onKeydown?: (e: KeyboardEvent) => void
}

export const FOCUS_TRAP_INJECTION_KEY: InjectionKey<FocusTrapInjectionContent> =
  Symbol('hFocusTrap')
