## [The JavaScript Interpreter, Interpreted]( http://2013.jsconf.eu/speakers/martha-girdler-the-javascript-interpreter-interpreted.html)

Function objects have two stages
- Creation
  - create variables, functions, arguments
  - create scope chain
  - determine value of this
- Execution
  - assign values
  - activation

### (Execution)Context
- Global
- Function
- Eval

```js
// pseudo code
var executionContext = {
  activationObject: {},
  scopeChain: {},
  this: {}
}
```

1. activationObject is created
2. scope is defined
3. variable instantiation happens
  a. parameters
  b. function declarations
  c. variable names
    - (hoisting)
4. "this" is defined

## Scope
Scope = this context's Variable object + the calling context's Variable object
