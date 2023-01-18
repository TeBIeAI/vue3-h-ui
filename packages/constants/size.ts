export const componentSize = ['', 'default', 'small', 'large'] as const

export type ComponentSize = (typeof componentSize)[number]

export const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
} as const
