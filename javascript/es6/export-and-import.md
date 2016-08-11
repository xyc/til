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

//http://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function
// invalid: export default const MyComponent = () => {}
const MyComponent = () => {}
export default MyComponent

export default class MyComponent extends React.Component {}
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

## Further Readings:
- http://www.2ality.com/2014/09/es6-modules-final.html
- http://www.2ality.com/2015/07/es6-module-exports.html
- http://exploringjs.com/es6/ch_modules.html
- rollup.js (JavaScript module bundler) http://rollupjs.org/#%7B%22options%22%3A%7B%22format%22%3A%22cjs%22%2C%22moduleName%22%3A%22myBundle%22%2C%22globals%22%3A%7B%7D%2C%22moduleId%22%3A%22%22%7D%2C%22modules%22%3A%5B%7B%22name%22%3A%22main.js%22%2C%22code%22%3A%22import%20%7B%20cube%20%7D%20from%20'.%2Fmaths.js'%3B%5Cnconsole.log(%20cube(%205%20)%20)%3B%20%2F%2F%20125%22%7D%2C%7B%22name%22%3A%22maths.js%22%2C%22code%22%3A%22%2F%2F%20This%20function%20isn't%20used%20anywhere%2C%20so%5Cn%2F%2F%20Rollup%20excludes%20it%20from%20the%20bundle...%5Cnexport%20function%20square%20(%20x%20)%20%7B%5Cn%5Ctreturn%20x%20*%20x%3B%5Cn%7D%5Cn%5Cn%2F%2F%20This%20function%20gets%20included%5Cnexport%20function%20cube%20(%20x%20)%20%7B%5Cn%5Ct%2F%2F%20rewrite%20this%20as%20%60square(%20x%20)%20*%20x%60%5Cn%5Ct%2F%2F%20and%20see%20what%20happens!%5Cn%5Ctreturn%20x%20*%20x%20*%20x%3B%5Cn%7D%22%7D%5D%7D

## Real World Examples:
- https://github.com/reactjs/react-router/blob/master/modules/index.js
