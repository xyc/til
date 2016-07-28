# Reducers for array and object

## Array
```js
const removeFromArray = (list, index) => (
  [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
)

// f :: element -> element
const mutateArray = (list, index, f) => (
  [
    ...list.slice(0, index),
    f(list[index]),
    ...list.slice(index + 1)
  ]
)
```


## Object
```js
const objectReducer = (action) => (
  Object.assign({}, action, {
    mutatedKey: mutatedValue
  })
)
```

`Object.assign` is stage-3 feature.
