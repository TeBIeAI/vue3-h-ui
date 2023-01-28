import { withInstall } from '@h-ui/utils'
import Popper from './src/popper.vue'

import HPopperTrigger from './src/trigger.vue'

export { HPopperTrigger }

export const HPopper = withInstall(Popper)
export default HPopper

export * from './src/popper'
export * from './src/trigger'
