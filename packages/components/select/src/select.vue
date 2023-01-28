<template>
  <div ref="selectWrapper" :class="wrapperCls">
    <h-tooltip ref="tooltipRef">
      <template #default>
        <div class="select-trigger">select-trigger</div>
      </template>
    </h-tooltip>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@h-ui/utils'
import { computed, defineComponent } from 'vue'
import { selectEmits, selectProps } from './select'
import { useSelect, useSelectStates } from './useSelect'
import HTooltip from '@h-ui/components/tooltip'

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const nsInput = createNameSpace('input')
const nsSelect = createNameSpace('select')

const states = useSelectStates(props)

const { selectWrapper, tooltipRef } = useSelect(props, states)

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
