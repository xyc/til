# Array functional programming in ES6

ES6 adds many facilities like arrow functions, spread operator to make functional programming much easier.

## Map array to object whose keys are the array elements
```js
mapper = (x) => true /* example mapper: just set the values to true */

const mapArrayToObjectKeys = (mapper) =>
  arr.reduce((obj, x) => {
    obj[x] = mapper(x);
    return obj
  }, {}) /*starting with empty object*/
```

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
/**
 * Concatenate multiple arrays
 * @param  {array} arrays  must be array of arrays
 * @return {array}         concatenated array
 */
const concatArrays = (arrays) =>
  arrays.reduce( (as, a) => as.concat(a), [])
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

## Read more
http://davidarvelo.com/blog/array-number-range-sequences-in-javascript-es6/
