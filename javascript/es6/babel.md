# Babel

## Upgrade Babel 5 to 6
Upgrade globally: `npm i -g babel`

Upgrade project: `npm i --save`

`.babelrc`
```
{
  presets: ['es2015', 'react']
}
```

`package.json`
```js
"babel-core": "^6.0.0",
"babel-loader": "^6.0.0",
"babel-preset-es2015": "^6.0.0",
"babel-preset-react": "^6.0.0",
```

Read more: https://medium.com/@malyw/how-to-update-babel-5-x-6-x-d828c230ec53#.xmpw0r6d7


## Babel 6
Babel npm package has been split into multiple packages:
- babel-cli
- babel-core
- babel-polyfill

Babel 6 adds presets, or collections of plugins (Every single transform is now a plugin, including ES2015 and JSX.):

`npm install babel-preset-es2015 babel-preset-react --save-dev`

## `.babelrc` specifies presets
Put `.babelrc` in project directory.
```js
{
  "presets": ["es2015", "react"]
}
```

## Stage 0 is a separate preset
Enable ES7 features like decorators and async/await: `npm i babel-preset-stage-0`

## Read more
- [The Complete Guide to ES6 with Babel 6](http://jamesknelson.com/the-complete-guide-to-es6-with-babel-6/)
