import { definePropType } from '@h-ui/utils'
import { isFunction } from 'lodash-es'
import { computed, ExtractPropTypes, getCurrentInstance, Ref } from 'vue'

const _prop = {
  type: definePropType<boolean | null>(Boolean),
  default: null
} as const

const _event = {
  type: definePropType<(val: boolean) => void>(Function)
} as const

export type UseModelTogglePropsRaw<T extends string> = {
  [K in T]: typeof _prop
} & {
  [K in `onUpdate:${T}`]: typeof _event
}

export type UseModelTogglePropsGeneric<T extends string> = {
  [K in T]: ExtractPropTypes<typeof _prop>
} & {
  [K in `onUpdate:${T}`]: typeof _event
}

export type ModelToggleParams = {
  indicator: Ref<boolean>
  toggleReason?: Ref<Event | undefined>
  shouldHideWhenRouteChanges?: Ref<boolean>
  shouldProceed?: () => boolean
  onShow?: (event?: Event) => void
  onHide?: (event?: Event) => void
}

export const createModelToggleComposable = <T extends string>(name: T) => {
  const updateEventKey = `update:${name}` as const
  const updateEventKeyRaw = `onUpdate:${name}` as const
  const useModelToggleEmits = [updateEventKey]

  const useModelToggleProps = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  } as UseModelTogglePropsGeneric<T>

  const useModelToggle = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }: ModelToggleParams) => {
    const instance = getCurrentInstance()!
    const { emit } = instance
    const props = instance.props as UseModelTogglePropsGeneric<T> & {
      disabled: boolean
    }

    const isModelBingingAbsent = computed(() => props[name] === null)

    const hasUpdateHandler = computed(() =>
      isFunction(props[updateEventKeyRaw])
    )

    const doShow = (event?: Event) => {
      if (indicator.value === true) {
        return
      }

      indicator.value = true

      if (toggleReason) {
        toggleReason.value = event
      }

      if (isFunction(onShow)) {
        onShow(event)
      }
    }

    const show = (event?: Event) => {
      if (props.disabled === true) return

      const shouldEmit = hasUpdateHandler.value

      if (shouldEmit) {
        emit(updateEventKey, true)
      }
      debugger
      if (isModelBingingAbsent.value || !shouldEmit) {
        doShow(event)
      }
    }

    return {
      show,
      hasUpdateHandler
    }
  }

  return {
    useModelToggle,
    useModelToggleProps,
    useModelToggleEmits
  }
}
