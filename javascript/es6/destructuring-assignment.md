# Destructuring assignment

[MDN Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Computed object property names and destructuring
Computed property names, like on object literals, can be used with destructuring.

```js
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"
```