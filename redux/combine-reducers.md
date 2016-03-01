Implement combineReducers from scratch:
```js
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    // apply each reducer on their part of the state tree (reducer key as the key of the state tree object) to generate the next state
    // note that initially state[key] will be undefined (the initial value of state is `{}`), so each reducer will start with its default initial state
    return Object.keys(reducers).reduce(
      // nextState is the intermediate nextState when each of the reducers are being applied to the state
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {} // empty state
    )
  }
}

// // combineReducers :: {reducers} -> reducer
//
// const reducers = {
//   todos,
//   visibilityFilter
// }
//
// Object.keys(reducers) === ['todos', 'visibilityFilter']
// // reducers[key] gets the reducer
// //  reducers[key]: todos reducer, visibilityFilter reducer
// // state[key] gets part of the state tree
// //  state[key]: state['todos'], state['visibilityFilter']

const todoApp = combineReducers({
  todos,
  visibilityFilter
})
```
