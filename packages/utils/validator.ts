import { componentSize, ComponentSize } from './../constants'
export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSize].includes(val)
