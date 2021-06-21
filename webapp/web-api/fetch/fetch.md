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
Use with webpack:

1. First install `imports-loader` and `exports-loader`
```sh
npm i imports-loader exports-loader -S
```

2. and configure `webpack.config.js`:
```js
plugins: [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
```

## Read more
- [MDN fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [That's so fetch!](https://jakearchibald.com/2015/thats-so-fetch/)
- [Compose HTTP clients using JavaScript's fetch API](https://github.com/mjackson/http-client)
- [PWA working with the fetch API](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)