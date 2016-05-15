# EventTarget
`EventTarget` is an **interface** implemented by objects that can receive events and may have listeners for them.

- `Element`, `document`, and `window` are the most common event targets, but other objects can be event targets too, for example `XMLHttpRequest`, `AudioNode`, `AudioContext`, and others.
  - Many event targets (including elements, documents, and windows) also support setting event handlers via on... properties and attributes.


## [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

#### Capture
After initiating capture, all events of the specified type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.

Events that are bubbling upward through the tree **will not** trigger a listener designated to use capture.

## Implementation
```js
var EventTarget = function() {
this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback){
  if(!(type in this.listeners)) {
    this.listeners[type] = [];
  }
 this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback){
  if(!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for(var i = 0, l = stack.length; i < l; i++){
     if(stack[i] === callback){
       stack.splice(i, 1);
       return this.removeEventListener(type, callback);
      }
  }
};

EventTarget.prototype.dispatchEvent = function(event){
  if(!(event.type in this.listeners)) {
    return;
  }
    var stack = this.listeners[event.type];
    event.target = this;
    for(var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
    }
};
```

## API
```js
target.addEventListener(type, listener[, useCapture])
// target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only

cancelled = !target.dispatchEvent(event)

target.removeEventListener(type, listener[, useCapture])
```  

Examples:
```js
var div = document.getElementById('div');
var listener = function (event) {
  /* do something here */
};
div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
```
