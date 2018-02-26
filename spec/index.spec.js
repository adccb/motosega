const { convert } = require('../dist/index.js')

describe('motosega', () => {
  it('should return the same string if no valid md is passed', () => {
    expect(convert('hello')).toEqual('hello')
    expect(convert('~hello')).toEqual('~hello')
    expect(convert('_hello')).toEqual('_hello')
    expect(convert('`hello')).toEqual('`hello')
  })

  it('should correctly convert md', () => {
    const o = {
      'foo `bar` baz': 'foo <code>bar</code> baz',
      '*foo* bar *baz*': '<b>foo</b> bar <b>baz</b>',
      '* foo *': '* foo *',
      '**': '<b></b>',
      'foo *bar _baz* qux _zum_': 'foo <b>bar _baz</b> qux <i>zum</i>',
      '`*this* is a *****bunch of literals** inside a _code__ tag**__`':
        '<code>*this* is a *****bunch of literals** inside a _code__ tag**__</code>'
    }

    Object.keys(o).forEach(k => expect(convert(k)).toEqual(o[k]))
  })

  it('should correctly convert nested md', () => {
    expect(convert('*_hello!_*')).toEqual('<b><i>hello!</i></b>')
    expect(convert('_hi *hello*_')).toEqual('<i>hi <b>hello</b></i>')
    expect(convert('`*hello*`')).toEqual('<code>*hello*</code>')
  })
})

