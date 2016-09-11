## Coerce string values into numbers
```js
+str
Number(str)
parseInt(str)
```

## Trunc numbers
```js
Math.trunc(num)
~~num
```

## Coerce non-true (falsy) values into booleans
```js
possibleUndefined === undefined ? false : possibleUndefined
```

We can just use
```js
!!possibleUndefined
```
