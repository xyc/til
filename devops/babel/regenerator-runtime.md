http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await

```sh
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime
```

`.babelrc`

```js
{
  "plugins": [
    ["transform-runtime", {
      "polyfill": false,
      "regenerator": true
    }]
  ]
}
```
