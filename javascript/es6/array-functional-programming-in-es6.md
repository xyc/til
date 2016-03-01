# Array functional programming in ES6

ES6 adds many facilities like arrow functions, spread operator to make functional programming much easier.

## Concatenate multiple arrays
```js
// concatenate multiple arrays
// arr1 ++ arr2 ++ arr3
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]
[...arr1, ...arr2, ...arr1]

// or this:
// http://stackoverflow.com/questions/15327160/haskell-merging-multiple-lists
[arr1, arr2, arr3].reduce( (arr1, arr2) => arr1.concat(arr2) )
```

## Ranges
```js
// const range = (start, end, inc) => Array((end - start) / inc).reduce(
//     (xs, x) => {
//       
//     }
//   , start)

// [0..n-1]
const zeroToNMinusOne = (n) => ([...Array(n).keys()])

// [x..x]
// repeat x for n times
const repeat = (x, n) => Array(n).fill(x)
```
