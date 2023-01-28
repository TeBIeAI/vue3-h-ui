import { withInstall } from '@h-ui/utils'
import Popper from './src/popper.vue'
import './style'

import HPopperTrigger from './src/trigger.vue'
import HPopperContent from './src/content.vue'

export { HPopperTrigger, HPopperContent }

export const HPopper = withInstall(Popper)
export default HPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
