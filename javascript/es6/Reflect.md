```js
var target = { foo: 'bar', baz: 'wat' }
Reflect.deleteProperty(target, 'foo')
console.log(target)
// <- { baz: 'wat' }
```
