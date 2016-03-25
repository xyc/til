# Arrow functions

## Lexical this

## Lexical arguments
Arrow functions do not expose an arguments object. Rest parameters are a good alternative.
```js
function foo() {
  var f = (...args) => args[0];
  return f(2);
}

foo(1); // 2
```
