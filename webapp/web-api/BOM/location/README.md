# `location`

The `location` object is a property of **both** `window` and `document`: `window.location === document.location`

```js
location.hash // "#contents": the URL hash, or empty string if URL doesn't have a hash
location.host // "example.com:80": name of the server and port number if present
location.hostname // "example.com": name of the server without port number
location.href // "http://www.example.com": full URL of current loaded page. `location.toString()` returns `location.href`
location.pathname // "/path/file": the directory and/or filename of the URL
location.port // "8080": port of the request if specified in the URL, returns empty string if URL doesn't contain a port
location.protocol // "http:"
location.search // "?q=ecmascript": the query string of the URL. Returns a string beginning with "?"
```

## Parse query string
```js
split('=')
decodeURIComponent
```

## Manipulate the location
- Navigate to the URL and make an entry in history stack:

  ```js
  location.assign("http://www.new-location.com")
  window.location = "http://www.new-location.com"
  location.href = "http://www.new-location.com"
  ```

  Each time a property on location is changed, **with the exception of `hash`**, the page **reloads** with the new URL. Example: `search`, `hostname`, `pathname`.

  > Changing the value of hash causes a new entry in the browser’s history to be recorded as of Internet Explorer 8+, Firefox, Safari 2+, Opera 9+, and Chrome.

- No history:

  ```js
  location.replace("http://won-t-going-back.com")
  ```

- Reload current page:
  ```js
  location.reload() // possibly from cache
  location.reload(true) // force reload from server
  ```
