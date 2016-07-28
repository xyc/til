## Scope issues
http://stackoverflow.com/questions/1007340/javascript-function-aliasing-doesnt-seem-to-work
```js
q = document.querySelector // would not work
q = document.querySelector.bind(document)
```
