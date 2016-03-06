# Export and Import

Exporting and importing names (Destructuring assignment)
```js
// module.js
export const key1 = value1
export const key2 = value2
export const key3 = value3

// app.js
import { key1, key2, key3 } from './module'
```

Exporting and importing functions
```js
// module.js
export function f1(){}

// app.js
import f1 from './module'
```

Exporting and importing all names
```js
// module.js
export const key1 = value1
export const key2 = value2
export const key3 = value3

// app.js
import * as module from './module'
module.key1 // value1
module.key2 // value2
module.key3 // value3
```

## Exporting and importing defaults

```js
// module.js
export default {
  key1: value1,
  key2: value2,
  key3: value3
}

// app.js
import defaults from './module'
defaults.key1 // value1
defaults.key2 // value2
defaults.key3 // value3
```

## Index pattern
`my-package`:
```js
// module.js (NOTE: default)
export default class MyClass{}

// module2.js
export { name1, name2 }

// index.js
export Module from 'module'
// export { Module } from 'module' // this doesn't work (because module.js doesn't export Module)
export { name1 } from 'module2'
```
Import:
```js
import {Module} from 'my-package'
```


Further Readings:
- http://www.2ality.com/2014/09/es6-modules-final.html
- http://www.2ality.com/2015/07/es6-module-exports.html
- http://exploringjs.com/es6/ch_modules.html

Real World Examples:
- https://github.com/reactjs/react-router/blob/master/modules/index.js
