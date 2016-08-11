## Pseudo Implementation of `getProperty`
```js
function getProperty(obj, prop) {
  if (obj.hasOwnProperty(prop))
    return obj[prop]

  else if (obj.__proto__ !== null)
    return getProperty(obj.__proto__, prop)

  else
    return undefined
}
```

## `instanceof`
The result of the expression

    obj instanceof C

is determined by whether `C.prototype` is in the prototype chain of obj. The expression is thus equivalent to
    `C.prototype.isPrototypeOf(obj)`
