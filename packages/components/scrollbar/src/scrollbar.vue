<template>
  <div ref="scrollbarRef" :class="ns.b()">
    <div ref="wrapRef" :class="wrapCls" :style="style" @scroll="handleScroll">
      <component
        :is="tag"
        ref="resizeRef"
        :class="resizeCls"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>

    <bar
      ref="barRef"
      :always="always"
      :width="sizeWidth"
      :height="sizeHeight"
      :ratio-x="ratioX"
      :ratio-y="ratioY"
    />
  </div>
</template>

<script lang="ts" setup>
import { addUnit, createNameSpace, isNumber, isObject } from '@h-ui/utils'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch
} from 'vue'
import Bar from './bar.vue'
import type { CSSProperties } from 'vue'
import { scrollbarEmits, scrollbarProps } from './scrollbar'
import { BarInstance } from './bar'
import { GAP } from './util'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { scrollbarContextKey } from '@h-ui/tokens'

const COMPONENT_NAME = 'ElScrollbar'

const props = defineProps(scrollbarProps)
const emit = defineEmits(scrollbarEmits)

const scrollbarRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
const resizeRef = ref<HTMLElement>()

const sizeHeight = ref('0')
const sizeWidth = ref('0')
const barRef = ref<BarInstance>()
const ratioY = ref(1)
const ratioX = ref(1)

const ns = createNameSpace('scrollbar')

let stopResizeObserver: (() => void) | undefined = undefined
let stopResizeListener: (() => void) | undefined = undefined

const wrapCls = computed(() => [
  props.wrapClass,
  ns.e('wrap'),
  ns.em('wrap', 'hidden-default')
])

const resizeCls = computed(() => [props.viewClass, ns.e('view')])

const style = computed(() => {
  const style: CSSProperties = {}
  if (props.height) style.height = addUnit(props.height)
  if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)

  return [props.wrapStyle, style]
})

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value)
  }
}

// TODO: refactor method overrides, due to script setup dts
// @ts-nocheck
function scrollTo(xCord: number, yCord?: number): void
function scrollTo(options: ScrollToOptions): void
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrapRef.value!.scrollTo(arg1)
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrapRef.value!.scrollTo(arg1, arg2)
  }
}

const setScrollTop = (value: number) => {
  if (!isNumber(value)) {
    console.warn(COMPONENT_NAME, 'value must be a number')
    return
  }
  wrapRef.value!.scrollTop = value
}

const update = () => {
  if (!wrapRef.value) return
  const offsetHeight = wrapRef.value.offsetHeight - GAP
  const offsetWidth = wrapRef.value.offsetWidth - GAP

  const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight
  const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth
  const height = Math.max(originalHeight, props.minSize)
  const width = Math.max(originalWidth, props.minSize)

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height))
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width))

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
}

watch(
  () => props.noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.()
      stopResizeListener?.()
    } else {
      ;({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update))
      stopResizeListener = useEventListener('resize', update)
    }
  },
  { immediate: true }
)

watch(
  () => [props.maxHeight, props.height],
  () => {
    nextTick(() => {
      debugger
      update()
      if (wrapRef.value) {
        barRef.value?.handleScroll(wrapRef.value)
      }
    })
  }
)

onMounted(() => {
  nextTick(() => {
    update()
  })
})

provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbarRef,
    wrapElement: wrapRef
  })
)
</script>

<script lang="ts">
export default defineComponent({
  name: 'HScrollbar',
  inheritAttrs: false
})
</script>
<style scoped></style>
