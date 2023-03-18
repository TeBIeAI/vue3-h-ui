export const isObject = (val: unknown): val is Record<any, any> => {
  return val !== null && typeof val === 'object'
}

export const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function'
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isArray = (val: any): val is any[] => Array.isArray(val)

export const isBoolean = (val: unknown) => typeof val === 'boolean'

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false
  }
  return !Number.isNaN(Number(val))
}

export type Arrayable<T> = T | T[]

export { hasOwn } from '@vue/shared'
