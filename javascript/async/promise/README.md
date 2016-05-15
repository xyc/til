# Why Promises
https://blog.domenic.me/youre-missing-the-point-of-promises/

## Sync
- there are two very important aspects of synchronous functions:
  - They return values
  - They throw exceptions

You can feed the return value of one function straight into another, and keep doing this indefinitely. More importantly, **if at any point that process fails, one function in the composition chain can throw an exception, which then bypasses all further compositional layers until it comes into the hands of someone who can handle it with a catch**

## Async
> Now, in an asynchronous world, you can no longer return values: they simply aren’t ready in time. Similarly, you can’t throw exceptions, because nobody’s there to catch them. So we descend into the so-called “callback hell,” where composition of return values involves nested callbacks, and composition of errors involves passing them up the chain manually

The point of promises is to give us back **functional composition** and **error bubbling** in the async world.

## Read More
- ECMA262 https://tc39.github.io/ecma262/#sec-promise-objects
- http://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript
  - Callbacks are CPS
    - Doing things in sequence
      ```js
      asyncCall1(args1, function(){
        asyncCall2(args2, function(){

        })
      })
      ```
    - Doing things in parallel
- https://blog.domenic.me/youre-missing-the-point-of-promises/
- HTML5 rocks tutorial http://www.html5rocks.com/en/tutorials/es6/promises/
- workflowy notes

# Thoughts
Both callbacks and promises uses CPS.

- [Promise is a Monad](https://gist.github.com/briancavalier/3296186).
  - It's actually a functional programming pattern: [Chaining callbacks with continuations](http://www.slideshare.net/ScottWlaschin/fp-patterns-ndc-london2014#85).
    - [Composing Switches (bind)](http://www.slideshare.net/ScottWlaschin/fp-patterns-ndc-london2014#106)

- If a promise has succeeded or failed and ***you later add a success/failure callback, the correct callback will be called, even though the event took place earlier*** (The later promises is "tainted" with state of previous promises like it's a monad)

Q: why promises can be chained?

A: Because `Promise.prototype.then` and `Promise.prototype.` returns `Promise`.
