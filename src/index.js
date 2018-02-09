const stripChars = (str, chr) => str.replace(new RegExp(`\\${ chr }`, 'g'), '')
const pipe = (init, ...funcs) => funcs.reduce((val, func) => func(val), init)

const bold = str => str.match(/\*.+\*/) ? `<b>${ stripChars(str, '*') }</b>` : str
const italic = str => str.match(/_.+_/) ? `<i>${ stripChars(str, '_') }</i>` : str
const code = str => str.match(/`.+`/)  ? `<code>${ stripChars(str, '`') }</code>` : str

export const convert = str => pipe(str, bold, italic, code)
