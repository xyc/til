# [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
1. **Create the instance of the class**: Empty object with its [[Prototype]] property set to `F.prototype`.
2. **Initialize the instance.**: The function `F` is called with the arguments passed and `this` set to be the instance.
3. **Return the instance**

```js
/**
 * New polyfill:
 * this is a higher order function that takes one argument (the constructor function `f`) and returns a function that takes the constructor function's arguments. In the function the instance is initialized by `f`.
 * NOTE that `f.prototype` might not be an own property of `f`. (it might need to look up the prototype chain)
 *
 * always followed by invocation:
 * 		New(Foo)(fooArgs)
 *
 * @param f constructor
 */
function New (f) {
  assert(typeof f === 'function')

  /* 1: create instance (create empty object `cf`, set up the implicit link from `cf` to CF<sub>P</sub> ) */
  var n = { '__proto__': f.prototype };
  return function () {
    /* 2: init instance (invoke `CF`, with `this` set to `cf`. So `CF` can setup `cf`'s initial state. NOTE: this doesn't work on ES6 classes http://stackoverflow.com/a/30689872/626126) */
    f.apply(n, arguments);
    /* 3: return instance (return `cf`)
      NOTE: if step 2 explicit returns, returns step 2's result (Normally constructors don't return a value)
    */
    return n;
  };
}
```

Using our `New`:
```js
function Point(x, y) {
  this.x = x
  this.y = y  
}

var p1 = new Point(10, 20);
var p2 = New (Point)(10, 20);
```

## Read more
- [How Prototypal Inheritance really works](http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html)
- NOTE: calling `new Foo` is equivalent to calling `new Foo()`
- [TypeError: "x" is not a constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor): Some built-in **objects** are not a constructor: Math, JSON, Symbol, Reflect, Intl, SIMD, Atomics; Generator functions cannot be used as constructors.
