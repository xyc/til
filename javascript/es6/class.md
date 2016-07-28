```js
class Point {
  /**
   * Constructor, static methods, prototype methods
   */

  /**
   * 1. the pseudo-method `constructor`.
   *
   * 		Point === Point.prototype.constructor // true
   * 		typeof Point // 'function'
   *
   * It has features that normal constructor functions don’t have (mainly the ability to constructor-call its superconstructor via `super()`)
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * 2. Static methods
   *
   * Static properties (or class properties) are properties of `Point` itself. If you prefix a method definition with static, you create a class method:
   * typeof Point.add // 'function'
   * Point.add(new Point(1, 2), new Point(3, 4)) // Point {x: 4, y: 6}
   */
  static add(p1, p2) {
    return new Point(p1.x + p2.x, p1.y + p2.y)
  }

  /**
   * 3. prototype methods.
   * The prototype properties of Point are the properties of Point.prototype.
   *
   * 		typeof Point.prototype.toString // 'function'  
   *
   * They are usually methods and inherited by instances of Point.
   */
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  /**
   * Static data properties. (NOTE: not in ES6/7)
   * - workarounds:
   * (1) define `Point.ZERO = new Point(0, 0);` outside of class body: the same instance is returned every time
   * (2) static getter like below: a new instance is returned every time.
   * 			static get ZERO() {
   *   			return new Point(0, 0);
   *      }
   */
  // static ZERO = new Point(0, 0)

  /**
   * Getters and setters.
   * The syntax for getters and setters is just like in ECMAScript 5 object literals:
   */
  get prop() {
    return 'getter';
  }

  set prop(value) {
    // console.log('setter: ' + value);
  }

  /**
   * Computed method names
   */
  ['expression']() {}  
  [Symbol.iterator]() {
    /*...*/
  }

  /**
   * Generator methods
   *
   * 		for(const coord of new Point(1,2)) {
   * 			console.log(coord)
   *    }
   *    // 1
   *    // 2
   */
  * [Symbol.iterator]() {
    for (const coord of [this.x, this.y]) {
      yield coord;
    }
  }
}
```

## Read more
![object diagram](http://exploringjs.com/es6/images/classes----methods.jpg)
- http://exploringjs.com/es6/ch_classes.html
- See also: prototypal inheritance
