import type { HTooltip } from '@h-ui/components/tooltip'
import { computed, nextTick, reactive, ref, SetupContext } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { SelectEmits, SelectProps } from './select'

type States = ReturnType<typeof useSelectStates>

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
    query: '',
    softFocus: false
  })
}

export const useSelect = (
  props: SelectProps,
  state: States,
  ctx: ComponentInternalInstance
) => {
  const selectWrapper = ref<HTMLSelectElement | null>(null)
  const tooltipRef = ref<InstanceType<typeof HTooltip> | null>(null)

  const handleFocus = (event: FocusEvent) => {
    if (!state.softFocus) {
      state.visible = true
      ctx.emit('focus', event)
    } else {
      state.softFocus
    }
  }

  const handleBlur = (event: FocusEvent) => {
    // nextTick(() => {
    //   ctx.emit('blur')
    // })
    // state.softFocus = false
  }

  const toggleMenu = () => {
    state.visible = !state.visible
  }

  const dropMenuVisible = computed({
    get() {
      return state.visible
    },
    set(val: boolean) {
      state.visible = val
    }
  })

  return {
    selectWrapper,
    tooltipRef,
    dropMenuVisible,
    handleFocus,
    handleBlur,
    toggleMenu
  }
}
