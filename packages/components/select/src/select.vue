<template>
  <div ref="selectWrapper" :class="wrapperCls">
    <h-tooltip
      ref="tooltipRef"
      :popper-class="[nsSelect.e('popper')]"
      :visible="dropMenuVisible"
    >
      <template #default>
        <div class="select-trigger">
          <h-input @focus="handleFocus" @blur="handleBlur"></h-input>
        </div>
      </template>
    </h-tooltip>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent, getCurrentInstance } from 'vue'
import { selectEmits, selectProps } from './select'
import { useSelect, useSelectStates } from './useSelect'
import { HInput } from '@h-ui/components'
import HTooltip from '@h-ui/components/tooltip'

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const nsInput = createNameSpace('input')
const nsSelect = createNameSpace('select')

const states = useSelectStates(props)
const ctx = getCurrentInstance()

const { selectWrapper, tooltipRef, dropMenuVisible, handleFocus, handleBlur } =
  useSelect(props, states, ctx!)

const wrapperCls = computed(() => [
  nsSelect.b(),
  nsSelect.is('disabled', props.disabled)
])
</script>

<script lang="ts">
export default defineComponent({
  name: 'HSelect'
})
</script>
