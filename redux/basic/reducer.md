# Reducer
`type Reducer<S, A> = (state: S, action: A) => S`

the type of function is same as reducer in Array.prototype.reduce(reducer, ?initialValue)


## The boilerplate

Root reducer: `reducers/index.js`

```js
import { combineReducers } from 'redux'
import counter from './counter' /* specific reducer */

const rootReducer = combineReducers({
  counter
})

export default rootReducer
```

Reducer with initialState
```js
const initialState = {  
  data: "hello"
}

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACTION:
      return state
    case READ_ACTION:
      return state
    case UPDATE_ACTION:
      return state
    case DELETE_ACTION:
      return state
    default:
      return state
  }
}

```

## Read more
- using a hashmap (pattern matching) reducer https://gist.github.com/deanius/f380994d117dffb5b625a7871a4fa893
- Pureness: don't dispatch in a reducer https://github.com/reactjs/redux/issues/368
