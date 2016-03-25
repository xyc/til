# [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

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
#### Series
```js
// Loop through our chapter urls
story.chapterUrls.reduce(function(sequence, chapterUrl) {
  // Add these actions to the end of the sequence
  return sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
}, Promise.resolve());
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

Parallel with ordering
```js
Promise.all(arrayOfPromises)
       .then(arrayOfValues)
       .catch()
```
