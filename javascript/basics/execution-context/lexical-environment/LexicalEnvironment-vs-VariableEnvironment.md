## Execution Context

```js
ExecutionContextES5 = {
  ThisBinding: <this value>,
  VariableEnvironment: {
    environmentRecord: {
      type: "declarative",
      arguments: {arg1: 0, arg2: 1},
      a: 1,
    },
    outer: <outer environment>
    ...
  }, // VO from ES3
  LexicalEnvironment: {
    // Initially a copy of the VariableEnvironment
  },
}
```

An execution context has the following fields [ES5, 10.3]:
- Environments: two references to environments.
  - LexicalEnvironment (lookup and change existing): resolve identifiers.
  - VariableEnvironment (add new): hold bindings made by variable declarations and function declarations.
  Both are usually the same.
- ThisBinding: the current value of `this`.

## LexicalEnvironment, VariableEnvironment, Environment Record

> Lexical environments hold variables and parameters. The currently active environment is managed via a stack of execution contexts (which grows and shrinks in sync with the call stack). Nested scopes are handled by chaining environments: each environment points to its outer environment (whose scope surrounds its scope). In order to enable lexical scoping, functions remember the scope (=environment) they were defined in. When a function is invoked, a new environment is created for is arguments and local variables. That environment’s outer environment is the function’s scope.

A (lexical) environment is the following data structure [ES5, 10.2]:
- A reference to the outer environment (`null` in the global environment).
- An environment record maps identifiers to values. There are two kinds of environment records:
  - *declarative environment records*: store the effects of **variable declarations**, and **function declarations**.
  - *object environment records*: are used by the `with` statement and for the global environment. They turn an object into an environment. For `with`, that is **the argument** (`with(...) {}`) of the statement. For the global environment, that is **the global object**.

Hoisting: In JavaScript, any variable declaration `var x=v`; is split into two parts:
1. declaration: hoisted to the beginning of the surrounding function. `var x;`
2. initializer: becomes a simple assignment `x=v;`

## Temporary Scope
LexicalEnvironment temporarily points to a new environment that has been put in front of the old LexicalEnvironment. The new environment holds the temporary bindings of the inner scope.

- `with` statement [ES5, 12.10]: the object that is the argument of the statement becomes a temporary environment.
- `catch` clause [ES5, 12.14]: the exception that is the argument of this clause is made available via a temporary environment.

## Functions declarations vs Function expressions
- function declarations use the VariableEnvironment as scope
- function expressions use the LexicalEnvironment as scope


[1]: http://www.2ality.com/2011/04/ecmascript-5-spec-lexicalenvironment.html
[2]: http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/
[3]: http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/
