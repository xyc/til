# Strict Mode
> Strict mode is a way to opt in to a **restricted variant of JavaScript**. Strict mode isn't just a subset: it intentionally has **different semantics** from normal code.

`"use strict";` pragma

## Why
1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimization
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Restrictions:
- Octal extension for literals
- Assignment to an undeclared identifier
- Assignment to read-only properties (`Object.defineProperties(obj, { readOnlyKey: { value: 'readOnlyValue', writable: false })`)
- Creating a new property of non-extensible objects
- eval and arguments restrictions
- callee and caller restrictions
- Duplications
- `delete` operator restrictions
- `with` statement
- `this` value restrictions

#### Chrome warns when using block-scoped declarations
To work around Chrome's warning, use an IIFE:
```js
(() => {
  'use strict';
})()
```

## Read More
- [MDN Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict Mode = Static Scoping](https://blog.domenic.me/strict-mode-static-scoping/)
