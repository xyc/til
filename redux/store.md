# Store

```js
import { createStore } from 'redux'

const store = createStore(myReducer)

console.log(store.getState())

store.subscribe(callback) // called when action is dispatched

store.dispatch(action)
```
