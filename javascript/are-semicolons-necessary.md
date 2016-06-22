# Are Semicolons Necessary in JavaScript?

See [http://standardjs.com/#javascript-standard-style](JavaScript Standard Style)
- "[Are Semicolons Necessary in JavaScript?](https://www.youtube.com/watch?v=gsfbh17Ax9I)": This talk explains some cases where semicolons is necessary.

```js
// cases: without semicolons it doesn't work
console.log('works')

(function () {
  console.log('grr')
}())

[1,2,3].forEach(function (n) {
  console.log(n)
})
```

## [semicolons](http://standardjs.com/rules.html#semicolons)
- Never start a line with (, [, or `. This is the only gotcha with omitting semicolons, and standard protects you from this potential issue.
