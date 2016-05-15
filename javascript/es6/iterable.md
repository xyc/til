# [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## @@iterator method
In order to be iterable, an object must implement the @@iterator method.

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
- https://blog.domenic.me/es6-iterators-generators-and-iterables/
