# Generators

```js
function* gen(){

}
```

## Caveats
- yield is not allowed inside non-generator functions, which is why the previous code causes a syntax error. For example, you can't yield inside a forEach callback. See [this link](http://www.2ality.com/2015/03/es6-generators.html)

## Read more
- https://news.ycombinator.com/item?id=11710306
- https://medium.com/javascript-inside/generators-and-channels-in-javascript-594f2cf9c16e#.1owp795i0
- http://swannodette.github.io/2013/08/24/es6-generators-and-csp
