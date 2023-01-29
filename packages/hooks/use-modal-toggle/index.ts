import { isFunction } from '@h-ui/utils'
import { getCurrentInstance, Ref } from 'vue'

export const createModelToggleComposable = <T extends string>(name: T) => {
  const useModelToggle = ({ indicator, toggleReason }: ModelToggleParams) => {
    const instance = getCurrentInstance()
    const props = instance?.props

    const doShow = () => {
      if (indicator.value === true) return

      indicator.value = true
    }

    const doHide = () => {
      if (indicator.value === false) {
        return
      }

      indicator.value = false
    }

    const show = () => {
      doShow()
    }

    const hide = () => {
      doHide()
    }

    const onChange = () => {}

    const toggle = () => {}

    return {
      show,
      hide,
      toggle
    }
  }

  return {
    useModelToggle
  }
}

export type ModelToggleParams = {
  indicator: Ref<boolean>
  toggleReason?: Ref<Event | undefined>
  shouldHideWhenRouteChanges?: Ref<boolean>
  shouldProceed?: () => boolean
  onShow?: (event?: Event) => void
  onHide?: (event?: Event) => void
}
