## Loaders
- List of loaders https://github.com/webpack/docs/wiki/list-of-loaders

#### Example loader:
```js
module: {
 loaders: [{
  test: /\.js$/, // Test for ".js" file, if it passes, use the loader
  exclude: /node_modules/, // Exclude node_modules folder
  loader: 'babel' // use babel (short for ‘babel-loader’)
 }]
}
```

#### Chaining Loaders (works right to left)
```js
module: {
 loaders: [{
  test: /\.css$/,
  loader: ‘style!css’ // (short for style-loader!css-loader)
 }]
}
```
#### Loaders queries
```js
{  // inline base64 URLs for <=8k images, direct URLs for the rest
  test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
},
```
