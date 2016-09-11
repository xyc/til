## IIFE

recursive helper functions can be simplified using IIFE

```js
function helper(arg) {
  // recursive calls
  // helper()
}
helper(initialArg)

// IIFE
;(function helper(arg) {
})(arg)
```
