## string => number
```js
+str // ['3','2','1'].sort((a,b) => +a - +b)
Number(str)
parseInt(str)
```

## Trunc numbers
```js
Math.trunc(num)
~~num
Math.floor
Math.round
parseInt
```
See also numbers

## falsy => boolean
```js
possibleUndefined === undefined ? false : possibleUndefined
```

We can just use
```js
!!possibleUndefined
```
