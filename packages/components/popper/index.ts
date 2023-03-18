export * from './src/popper'
import { withInstall } from '@h-ui/utils'
import Popper from './src/popper.vue'
import HPopperTrigger from './src/trigger.vue'
import HPopperContent from './src/content.vue'

export { HPopperTrigger, HPopperContent }

export const HlPopper = withInstall(Popper)
export type PopperInstance = InstanceType<typeof Popper>
export default HlPopper
