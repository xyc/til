## Context
- Global
- Function
- Eval

## `execution stack`
- Single threaded.
- Synchronous execution.
- 1 Global context.
- Infinite function contexts.
- Each function call creates a new execution context, even a call to itself.

## 1. Creation Stage [when the function is called, but before it executes any code inside]:
1. Create the Scope Chain.
2. Create variables, functions and arguments.
3. Determine the value of "this".

Creates the executionContextObj.
```js
executionContextObj = {
  scopeChain: { /* variableObject + all parent execution context's variableObject */ },

  /*
  Activation / Variable Object [AO/VO]
  scanning the function for parameters or arguments passed in, local function declarations and local variable declarations.
  */
  variableObject: { /* function arguments / parameters, inner variable and function declarations */ },
    arguments, arg1: 1, arg2: "arg2",/* Create the arguments object, check the context for parameters, initialize the name and value and create a reference copy. */    
    f1: function pointer, f2, f3/* 1. For each function found, create a property in the variable object that is the exact function name, which has a reference pointer to the function in memory. 2. If the function name exists already, the reference pointer value will be _overwritten_. */
    v1: undefined, v2: undefined/* 1. For each variable declaration found, create a property in the variable object that is the variable name, and initialize the value as undefined. 2. If the variable name already exists in the variable object, do nothing and continue scanning. */

  this: {}
}
```

The creation stage handles defining the names of the properties,
**not assigning a value to them (undefined)**, with the exception of formal arguments / parameters.

## 2. Activation / Code Execution Stage
Assign values, references to functions and interpret / execute code.

```js
function f(){function a(){}; var a = 1; console.log(a);} f()

// hoisting
(function() {
  console.log(typeof foo) // function
  console.log(typeof bar) // undefined

  var foo = 'hello',
      bar = function() {
        return 'world'
      }

  function foo() {
    return 'hello'
  }
}())

// example 2
(function() {
  console.log(foo) // function  

  function foo() {
    return 'hello'
  }

  var foo = 'hello',
      bar = function() {
        return 'world'
      }

  console.log(foo) // 'hello'  
}())
```

## Read more
- http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/#more-137
- Let’s Learn JavaScript Closures https://medium.freecodecamp.com/lets-learn-javascript-closures-66feb44f6a44#.78we07ywt
- Scope chain and closure http://davidshariff.com/blog/javascript-scope-chain-and-closures/
- http://dmitrysoshnikov.com/ecmascript/chapter-2-variable-object/
- ECMA-262-5 in detail. Chapter 3.1. Lexical environments: Common Theory. http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/#codewithcode-and-codeevalcode-as-dynamic-scope-features-in-ecmascript
- Understanding Scope and Context in JavaScript http://ryanmorr.com/understanding-scope-and-context-in-javascript/
- Martha Girdler: The JavaScript Interpreter, Interpreted http://2013.jsconf.eu/speakers/martha-girdler-the-javascript-interpreter-interpreted.html
  - slides: http://www.slideshare.net/marthakelly/this-in-javascript

## Scope
An important feature of JavaScript to note, is that the interpreter uses **Lexical Scoping**, as opposed to Dynamic Scoping.

Lexical Environments - a mechanism to manage static scoping.

> Scope is an enclosing context in which a variable is associated with a value.


```js
(function first(){
    second();
    function second(){
        console.dir(second)
        // <function scope>
        //    > Closure
        //      > second
        //    > Global
        //      > Window
    }   
})
```

## Closure
A closure, as Crockford says, is simply:
> An inner function always has access to the vars and parameters of its outer function, even after the outer function has returned…
