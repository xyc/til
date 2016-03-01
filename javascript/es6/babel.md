# Babel 6
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
