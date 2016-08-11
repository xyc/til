# Object Prototype Relationship

<figure>
<img src="http://kingsenglish.info/wp-content/uploads/2011/01/Adam.jpg"/>
<figcation>
Human.prototype
</figcaption>
</figure>

## `__proto__` vs `prototype`
> `__proto__` (deprecated property, use `Object.getPrototypeOf`) should not be confused with the `func.prototype` property of functions, which instead specifies the [[Prototype]] of all instances of the given function [[1]]

Example:
```js
"".__proto__ === String.prototype
```

#### Object/Prototype relationships
![Object/Prototype relationships](http://i.imgur.com/cCzkv.png)
- CF: Point (`typeof Point === "function"`)
- CF<sub>P</sub>: Point.prototype, look up the prototype chain if Point doesn't have own property `prototype` (`typeof Point.prototype === "object"`)
- cf1 - cf5: point1 - point5 (this can instead be the prototype of other objects)

Explanation:
- Explicit prototype property: `Point` has an **explicit** `prototype` own property. (only available on functions):
  ```js
  Point.__proto__ === Function.prototype
  Object.getOwnPropertyNames(Point /* or any function*/).includes('prototype') // true
  ```

- Implicit prototype link: `point1` - `point5` are created by the `new` operator, which **implicitly** links to `Point.prototype` (in some implementations it's `__proto__` property, but it should be internal property)

## Read More
- [[1]]
- [[2]]
- new operator

[1]: http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html "Vjeux's article"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
