import type { MaybeRef } from '@vueuse/core'
import { inject, getCurrentInstance, computed, unref } from 'vue'
import { InjectionKey, Ref } from 'vue'
import { isClient } from '@vueuse/core'
import { createNameSpace, useGetDerivedNamespace } from '@h-ui/utils'

export type HInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0
}

export const ID_INJECTION_KEY: InjectionKey<HInjectionContext> =
  Symbol('hIdinjection')

export const useIdInjection = (): HInjectionContext => {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = useIdInjection()
  if (!isClient && idInjection === defaultIdInjection) {
    console.warn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
prefix: number,
current: number,
})`
    )
  }
  const namespace = useGetDerivedNamespace()
  const idRef = computed(
    () =>
      unref(deterministicId) ||
      `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`
  )

  return idRef
}
