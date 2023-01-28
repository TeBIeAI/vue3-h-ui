import { CheckboxGroupProps } from '@h-ui/components'
import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<
  Pick<
    CheckboxGroupProps,
    'size' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'fill' | 'textColor'
  >
>

export const checkboxGroupKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupKey')
