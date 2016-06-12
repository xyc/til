## [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

```js
var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }
```

```js
var obj = {}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
// Any non-string object, including a number, is typecasted into a string via the toString method.
// ([[['k']]]).toString() === 'k'
ojb[[[['k']]]] = 'v'
```
