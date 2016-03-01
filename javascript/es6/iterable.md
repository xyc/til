# [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## @@iterator method
In order to be iterable, an object must implement the @@iterator method.

## Iterable types
Builtin types: String, Array, TypedArray, Map and Set

Iterable to array:
```js
const iterable;

[...iterable]

Array.from[iterable]

for(let e of iterable){
  // do something with `e`
}
```
