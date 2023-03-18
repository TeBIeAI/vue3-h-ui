import { useGetDerivedNamespace } from '@h-ui/utils'
import { isClient } from '@vueuse/core'
import { computed, onBeforeMount } from 'vue'
import { useIdInjection } from '../use-id'

let cachedContainer: HTMLElement

export const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace()
  debugger
  const idInjection = useIdInjection()

  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`
  })

  const selector = computed(() => `#${id.value}`)

  return { id, selector }
}

const createContainer = (id: string) => {
  const container = document.createElement('div')
  container.id = id
  document.body.appendChild(container)
  return container
}

export const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId()
  onBeforeMount(() => {
    if (!isClient) return

    if (!cachedContainer && !document.body.querySelector(selector.value)) {
      cachedContainer = createContainer(id.value)
    }
  })

  return {
    id,
    selector
  }
}
