import { computed } from 'vue'

export const useOption = (props: any, states) => {
  const currentLable = computed(() => {
    return props.label || props.value || ''
  })

  return {
    currentLable
  }
}
