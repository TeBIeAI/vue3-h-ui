import Popper from './src/popper.vue'
import HPopperArrow from './src/arrow.vue'
import HPopperTrigger from './src/trigger.vue'
import HPopperContent from './src/content.vue'
import { withInstall } from '@h-ui/utils'
import './style'

export { HPopperArrow, HPopperTrigger, HPopperContent }

export const HPopper = withInstall(Popper)
export default HPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'

export type { Placement, Options } from '@popperjs/core'
