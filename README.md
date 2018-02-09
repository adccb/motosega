# motosega

motosega (italian for chainsaw, following the tradition of ruby land's nokogiri) is a markdown to html parser.

## usage

```
const motosega = require('motosega')

const input = 'this is some _markdown_ formatted *text*'
const output = motosega(input)

console.log(output)
  => 'this is some <i>markdown</i> formatted <b>text</b>'
```

