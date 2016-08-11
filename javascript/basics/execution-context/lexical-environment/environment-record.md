# Environment Record

```
GetBindingValue (N, S)
HasThisBinding ()
```

## declarative Environment Records
store the effects of **variable declarations**, and **function declarations**.

## object Environment Records
are used by the `with` statement and for the global environment. They turn an object into an environment. For `with`, that is **the argument** (`with(...) {}`) of the statement. For the global environment, that is **the global object**.
