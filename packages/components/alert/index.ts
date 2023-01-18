import { withInstall } from '@h-ui/utils'
import Alert from './src/alert.vue'
import './style/css'

export const HAlert = withInstall(Alert)
export default HAlert

export * from './src/alert'

export type { AlertInstance } from './src/instance'
