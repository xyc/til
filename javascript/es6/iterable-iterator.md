# [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## The iterable protocol
The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a `for..of` construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

In order to be **iterable**, an object must implement the **@@iterator** method, meaning that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.iterator` key:

```js
class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }
  [Symbol.iterator]() {
    // return this.messages.values();
    let i=0;
    const messages = this.messages; return {
      next() {
        if(i >= messages.length)
          return { value: undefined, done: true };
      return { value: messages[i++], done: false };
      }
    }
  }
}

const log = new Log(); log.add("first day at sea"); log.add("spotted whale"); log.add("spotted another vessel"); //...
    // iterate over log as if it were an array!
for(let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}
```

## The iterator protocol
The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).

An object is an iterator when it implements a next() method with the following semantics:

next: A zero arguments function that returns an object with two properties:
- done
- value

A [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object is both, **iterator** and **iterable**.

## Iterable types
Builtin types: String, Array, TypedArray, Map and Set

Iterable to array:
```js
const iterable;

[...iterable]

Array.from[iterable]

for(let e of iterable){
  // do something with `e`
}
```

## Read More
- Iteration Protocols https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
- https://blog.domenic.me/es6-iterators-generators-and-iterables/
