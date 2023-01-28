import type { HTooltip } from '@h-ui/components/tooltip'
import { reactive, ref, SetupContext } from 'vue'
import { SelectEmits, SelectProps } from './select'

export const useSelectStates = (props: SelectProps) => {
  return reactive({
    options: new Map(),
    cachedOptions: new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: ''
  })
}

type States = ReturnType<typeof useSelectStates>

export const useSelect = (props: SelectProps, state: States) => {
  const selectWrapper = ref<HTMLSelectElement | null>(null)
  const tooltipRef = ref<InstanceType<typeof HTooltip> | null>(null)

  return {
    selectWrapper,
    tooltipRef
  }
}
