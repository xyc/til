```js
// https://www.reddit.com/r/javascript/comments/wq0ve/mathfloor_vs_mathround_vs_parseint_vs_bitwise/

// bitwise tilde
~~3.14  // 3
Math.trunc(3.14) // 3
Math.floor(3.14) // 3
Math.round(1.618) // 2

parseInt("3.14", 10) // 3.14
parseInt("3.14pi") // 3.14
```
