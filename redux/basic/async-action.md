`redux-thunk`: An action creator can return a function instead of an action object. This way, the action creator becomes a thunk.

```js
export const actionCreator = () => (
  (dispatch, getState) => {
    dispatch()

    return promise
  }
)
```

```js
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)
```
