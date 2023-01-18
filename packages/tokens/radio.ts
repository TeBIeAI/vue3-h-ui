import type { RadioGroupProps } from '@h-ui/components/radio'
import type { InjectionKey } from 'vue'

export interface RadioGroupContext extends RadioGroupProps {
  changeEvent: (val: RadioGroupProps['modelValue']) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol('radioGroupKey')
