import { computed, PropType, unref } from 'vue'
import type { ComponentSize } from '@h-ui/constants'
import type { Ref } from 'vue'
import { useProp } from '../use-prop'

declare type MaybeRef<T> = T | Ref<T>

export const useSizeProps = {
  type: String as PropType<ComponentSize>,
  required: false
}

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  return computed(() => disabled.value || unref(fallback) || false)
}
