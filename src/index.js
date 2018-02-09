// @flow

const stripChars = (str: string, chr: string): string => 
  str.replace(new RegExp(`\\${ chr }`, 'g'), '')

const pipe = <T>(init: T, ...funcs: Array<Function>): T => 
  funcs.reduce((val: T, func: Function): T => func(val), init)

const replace = (str: string, chr: string, tag: string): string => 
  str.match(new RegExp(`\\${ chr }.+\\${ chr }`))
    ? `<${ tag }>${ stripChars(str, chr) }</${ tag }>`
    : str

export const convert = (str: string): string => pipe(
  str, 
  str => replace(str, '*', 'b'),
  str => replace(str, '_', 'i'), 
  str => replace(str, '`', 'code')
)
