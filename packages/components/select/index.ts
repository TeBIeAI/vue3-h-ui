import { withInstall, withNoopInstall } from '@h-ui/utils'

import select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const HSelect = withInstall(select, {
  Option,
  OptionGroup
})

export default HSelect
export const HOption = withNoopInstall(Option)
export const HOptionGroup = withNoopInstall(OptionGroup)
