# HTTP Cookies

Server to browser:
```
HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; path=/; domain=.google.com; secure
Other-header: other-header-value
```

Browser to server:
```
GET /index.html HTTP/1.1
Cookie: name=value
Other-header: other-header-value
```

## Cookie in DOM
`document.cookie`
