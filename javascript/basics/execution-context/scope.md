# Scope
> Scope is an enclosing context in which a variable is associated with a value. [[1]]

An important feature of JavaScript to note, is that the interpreter uses **Lexical Scoping**, as opposed to Dynamic Scoping.

Lexical Environments - a mechanism to manage static scoping.

```js
(function first(){
    var x = 1;
    second();
    function second(a){
        x
        console.dir(second)
        // <function scope>
        //    > Closure      
        //      > second: function second()
        //      > x: 1
        //    > Global: Window        
    }   
})()
```

## Scope issues
http://stackoverflow.com/questions/1007340/javascript-function-aliasing-doesnt-seem-to-work
```js
q = document.querySelector // would not work
q = document.querySelector.bind(document)
```

[1]: http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/#scope
[2]: https://gist.github.com/paulirish/4158604#closures
