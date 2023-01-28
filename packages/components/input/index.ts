import { withInstall } from '@h-ui/utils'
import Input from './src/input.vue'
import './style'

export const HInput = withInstall(Input)

export default HInput

export * from './src/input'

export type InputInstance = InstanceType<typeof Input>
