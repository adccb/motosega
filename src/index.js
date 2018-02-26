const lookup = new Map([
  [ '`', { tag: 'code', rec: false } ],
  [ '*', { tag: 'b', rec: true } ], 
  [ '_', { tag: 'i', rec: true } ],
])

export const convert = str =>
  str.replace(new RegExp('(\\`|\\*|\\_)([^\s]*?)\\1', 'g'), 
    (match, g1, g2) => {
      return [
        `<${ lookup.get(g1).tag }>`,
        `${ lookup.get(g1).rec ? convert(g2) : g2 }`,
        `</${ lookup.get(g1).tag }>`
      ].join('')
    })

