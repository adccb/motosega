const { convert } = require('../dist/index.js')

describe('motosega', () => {
  it('should return the same string if no valid md is passed', () => {
    expect(convert('hello')).toEqual('hello')
    expect(convert('~hello')).toEqual('~hello')
    expect(convert('_hello')).toEqual('_hello')
    expect(convert('`hello')).toEqual('`hello')
  })

  it('should correctly convert bold', () => {
    expect(convert('*hello!*')).toEqual('<b>hello!</b>')
  })

  it('should correctly convert italics', () => {
    expect(convert('_hello!_')).toEqual('<i>hello!</i>')
  })

  it('should correctly convert code', () => {
    expect(convert('`hello!`')).toEqual('<code>hello!</code>')
  })

  it('should correctly convert nested md', () => {
    expect(convert('`*hello!*`')).toEqual('<code><b>hello!</b></code>')
  })
})

