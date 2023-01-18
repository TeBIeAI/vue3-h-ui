// block 代码块
// element 元素
// modifier 装饰
// state 状态
/**
 * z-button
 * z-button__primary
 * z-button__primary--disabled
 * is-checked
 *
 * :class=[bem].b('button)
 */

function _bem(
  nameSpace: string,
  prefixName: string,
  block: string,
  element: string,
  modifier: string
) {
  let cls = `${nameSpace}-${prefixName}`
  if (block) cls += `-${block}`
  if (element) cls += `__${element}`
  if (modifier) cls += `--${modifier}`

  return cls
}

export function createBEM(prefixName: string) {
  const nameSpace = 'h'

  const b = (blockSuffix = '') =>
    _bem(nameSpace, prefixName, blockSuffix, '', '')
  const e = (element = '') => _bem(nameSpace, prefixName, '', element, '')
  const m = (modifier = '') => _bem(nameSpace, prefixName, '', '', modifier)
  const be = (blockSuffix = '', element = '') =>
    prefixName && element
      ? _bem(nameSpace, prefixName, blockSuffix, element, '')
      : ''
  const bm = (blockSuffix = '', modifier = '') =>
    prefixName && modifier
      ? _bem(nameSpace, prefixName, blockSuffix, '', modifier)
      : ''
  const em = (element = '', modifier = '') =>
    element && modifier
      ? _bem(nameSpace, prefixName, '', element, modifier)
      : ''
  const bem = (blockSuffix: string, element = '', modifier = '') =>
    blockSuffix && element && modifier
      ? _bem(nameSpace, prefixName, blockSuffix, element, modifier)
      : ''
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `is-${name}` : ''
  }

  return {
    b,
    e,
    m,
    bm,
    em,
    be,
    bem,
    is
  }
}

export function createNameSpace(nameSpace: string) {
  const prefixName = nameSpace
  return createBEM(prefixName)
}

const ns = createNameSpace('button')
// console.log(bem.b("content"));
// console.log(bem.bm("content", 'aaa'));
console.log(ns.m('content'))
// console.log(bem.em("primary", "aaa"));
// console.log(bem.is("disabled", 11));
