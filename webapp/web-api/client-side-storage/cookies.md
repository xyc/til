# HTTP Cookies

[MDN page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

Use cases: Session management, personalization, tracking

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

## Security
- Use `HttpOnly` attribute to prevent access from JavaScript
- Sensitive cookies should have a short lifetime, with `SameSite` attribute set to `Strict` or `Lax`
- Use `Secure` attribute to ensure cookie to only sent to server via HTTPS connection
- If your site authenticates users, it should regenerate and resend session cookies, even ones that already exist, whenever the user authenticates. It prevents [session fixation attacks](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#session_fixation).

## Life time
- session cookie: Set no `Expires` attribute
> some browsers use session restoring when restarting, which can cause session cookies to last indefinitely long.
- permanent cookie: deleted at the date specified by `Expires` attribute or after a period of time speicified by `Max-Age` attribute