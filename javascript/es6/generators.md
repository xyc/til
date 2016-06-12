# Generators

```js
function* gen(){

}
```

## Caveats
- yield is not allowed inside non-generator functions, which is why the previous code causes a syntax error. For example, you can't yield inside a forEach callback. See [this link](http://www.2ality.com/2015/03/es6-generators.html)

## Read more
- https://news.ycombinator.com/item?id=11710306
