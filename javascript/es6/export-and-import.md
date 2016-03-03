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
