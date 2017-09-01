# tabular-to-object

[![Greenkeeper badge](https://badges.greenkeeper.io/jrop/tabular-to-object.svg)](https://greenkeeper.io/)

Convert tabular arrays to associative Objects

## Installation

```sh
npm install --save tabular-to-object
# or
yarn add tabular-to-object
```

## Use

```js
import {toObjects, toRows} from 'tabular-to-object'

toObjects([
	['x', 'y'],
	[1, 2],
	[3, 4],
])
// => [{x: 1, y: 2}, {x: 3, y: 4}]

toRows([{x: 1, y: 2}, {x: 3, y: 4}])
// => [['x', 'y'], [1, 2], [3, 4]]
```

## License

ISC License (ISC) Copyright (c) 2017, Jonathan Apodaca jrapodaca@gmail.com

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
