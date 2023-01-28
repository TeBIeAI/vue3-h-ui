import { withInstall, withNoopInstall } from '@h-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'
import './style'

export const HCheckbox = withInstall(Checkbox, {
  CheckboxGroup
})

export default HCheckbox

export const HCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox'
export * from './src/checkbox-group'
