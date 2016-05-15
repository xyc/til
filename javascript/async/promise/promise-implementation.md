```js
// https://github.com/tildeio/rsvp.js/tree/master/lib/rsvp/promise
// polyfill https://github.com/stefanpenner/es6-promise#readme

new Promise(executor)

Promise.prototype.constructor = function(executor) {
  // executor is invoked immediately
  executor()

  this.state = undefined
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  // return Promise
}

// not handling onFulfilled
// Promise.prototype.then(undefined, onRejected)
Promise.prototype.catch = function(onRejected) {
  return Promise.prototype.then(undefined, onRejected).bind(this)
}

// enumerate
Promise.all

// subscribe
Promise.race
```
