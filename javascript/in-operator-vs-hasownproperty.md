# In operator vs Object.hasOwnProperty()
- `in` operator: searches prototype chain (own property and non-ownproperty)
- `hasOwnProperty()`: does not search prototype chain (own property)

```js
console.dir(Object.getPrototypeOf({}))

"valueOf" in {} // true
({}).hasOwnProperty() // false
```

## For-in loop
```js
for(let key in obj){
  if(obj.hasOwnProperty(key)){
    const value = obj[key]
  }
}
```

See also `Object.keys()` polyfill
