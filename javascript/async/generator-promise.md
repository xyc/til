# https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch4.md#generators--promises
yield-a-promise-resume-the-generator pattern

```js
function* theFutureIsNow() {
  const data = yield Promise.all([ nfcall(fs.readFile, 'a.txt'), nfcall(fs.readFile, 'b.txt'), nfcall(fs.readFile, 'c.txt'),
]);
  yield ptimeout(60*1000);
  yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
}
```

generator runner `co`
```js
function grun(g) {
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if(!x.done) {
      if(x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err)); // generators that call yield will pause until next is called on their iterator. This function does so recursively. If the iterator returns a promise, it waits for the promise to be fulfilled before resuming the iterator.
      } else {
        setTimeout(iterate, 0, x.value); // You may be wondering why we call setTimeout instead of just calling iterate directly; the reason is that we gain a little efficiency by avoiding synchronous recursion (asynchronous recursion allows the JavaScript engine to free resources more quickly).
      }
    }
  })();
}
```

Exception handling works with synchronous semantics, as enabled by generator
runners.
