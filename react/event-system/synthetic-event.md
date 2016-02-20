## SyntheticEvent (wrapper around the browser's native event)
Your event handlers will be passed instances of `SyntheticEvent`, a cross-browser **wrapper around the browser's native event**. It has the same interface as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

Every SyntheticEvent object has the following attributes:
```js
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent // browser native event
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
```
