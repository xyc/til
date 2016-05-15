# [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```js
new Promise( /* executor */ function(resolve, reject) { ... } );
```

A function that will be passed to other functions via the arguments `resolve` and `reject`. The `executor` function is executed **immediately** by the Promise implementation which provides the resolve and reject functions (the executor is called before the Promise constructor even returns the created object). The `resolve` and `reject` functions are bound to the promise and calling them fulfills or rejects the promise, respectively. The executor is expected to initiate some asynchronous work and then, once that completes, call either the resolve or reject function to resolve the promise's final value or else reject it if an error occurred.

## Promise states
- pending
- fulfilled (with a value)
- rejected (with an error)

## Example: use promise to implement ready()
document.readyState
- 'loading'
- 'interactive'
- 'complete'

```js
function ready(){
  return new Promise((resolve, reject) => {
    function checkState(){
      if(document.readyState !== 'loading'){
        resolve()
      }
    }

    document.addEventListener('readystatechange', checkState)
    checkState()
  })
}  
```

## thenable
Thenable is something that can be chained with a `then()` call.
- Promises
  - `Promise.resolve()`
- .then: `.then(resolveFunc)`
- .catch: shorthand for `.then(undefined, rejectFunc)`

## Chain
- rejectFunc not defined, JS engine skips to the defined rejectFunc in catch
- Resolve doesn't always mean success

## Async actions
#### Series (sequence)
```js
// Promise.resolve().then(() => getJSON(chapterUrl1)).then((chapter)=>addHTMLToPage(chapter.html))
//                  .then(() => getJSON(chapterUrl2)).then((chapter)=>addHTMLToPage(chapter2.html))

// Loop through our chapter urls
story.chapterUrls.reduce(function(sequence, chapterUrl) {
  // Add these actions to the end of the sequence
  return sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
}, Promise.resolve()); // Promise.resolve !== Promise.prototype.resolve 相当于 new Promise((resolve, reject) => resolve())
```

#### Parallel
```js
var sequence = Promise.resolve()
data.forEach(url){
  sequence.then(function() {
    return getJSON(url)
  })
  .then(doSomething)
}
```

#### Parallel with ordering
```js
Promise.all(arrayOfPromises)
       .then(arrayOfValues)
       .catch()
```
