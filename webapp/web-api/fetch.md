# fetch()

```js
// fetch results of a page
fetch(`/posts/?offset=${offset}&limit=${limit}`)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    this.setState({author: data.author});    
  })
  .catch((error)=>{
    console.warn(error);
  });
```

## polyfill
```sh
npm i imports-loader exports-loader -S
```

`webpack.config.js`
```js
plugins: [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
```

## Read more
- https://jakearchibald.com/2015/thats-so-fetch/
- Compose HTTP clients using JavaScript's fetch API https://github.com/mjackson/http-client
