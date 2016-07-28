## Prototypal inheritance
Inherit directly from an object literal (doesn't have a constructor)
```js
// typeof Point === ''
// object literal as prototype
var Point = {
  x: 0,
  y: 0,
  toString: function() {
    return '(' + this.x + ',' + this.y + ')'
  },
}

var p1 = { x: 1, y: 2, __proto__: Point }; // not recommended, controversial
var p2 = { x: 1, y: 2 }; Object.setPrototypeOf(p2, Point); // setting the prototype after initialization
var p3 = Object.create(Point, { x: { value: 1, writable: true }, y: { value: 2, writable: true} }) // Creates object with the specified prototype and properties (similar to Object.defineProperties)
```

## constructor
[For every function f the following equation should hold][1]:

    f.prototype.constructor === f

```js
// typeof Point === 'function'
function Point(x, y) {
  this.x = x
  this.y = y

  // creates function for every instance (not necessary)
  // this.dist = function() {...}
}

Point.prototype.dist = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

const point = new Point(1, 2)
point instanceof Point // true
point.constructor === Point // true
point.constructor.name === 'Point' // true, constructor is a function, and `Point` is its name
```

## Read more
- [JavaScript inheritance by example](http://www.2ality.com/2012/01/js-inheritance-by-example.html)
- [How Prototypal Inheritance really works](http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html)
- [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [What are the benefits of prototypal inheritance over traditional inheritance?](http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)

[1]: http://www.2ality.com/2011/06/constructor-property.html
[2]: http://www.ecma-international.org/ecma-262/7.0/index.html#sec-built-in-function-objects "Built-in Function objects"
