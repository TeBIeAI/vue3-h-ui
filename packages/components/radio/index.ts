import { withInstall, withNoopInstall } from '@h-ui/utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import './style'

export const HRadio = withInstall(Radio, {
  RadioGroup
})

export const HRadioGroup = withNoopInstall(RadioGroup)

export default HRadio

export * from './src/radio'
export * from './src/radio-group'
