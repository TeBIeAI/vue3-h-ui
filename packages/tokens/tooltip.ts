import type { InjectionKey, Ref } from 'vue'

export type HTooltipInjectionContent = {
  open: Ref<boolean>
  onOpen: (e: Event) => void
  onClose: (e: Event) => void
  onShow: () => void
  onHide: () => void
}

export const TOOLTIP_INJECTION_KEY: InjectionKey<HTooltipInjectionContent> =
  Symbol('hTooltip')
