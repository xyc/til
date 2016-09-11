`curl https://api.github.com/users/caspyin`

`curl --include https://api.github.com/users/caspyin`

## OAuth
[OAuth instructions](https://developer.github.com/v3/oauth/)

1. redirects to GitHub
`GET https://github.com/login/oauth/authorize` client_id

2. If the user accepts your request, GitHub redirects back to your site with a temporary code in a code parameter. Exchange this for an access token:

`POST https://github.com/login/oauth/access_token` client_id client_secret code
3. `GET https://api.github.com/user?access_token=...`

client_id from [registered apps](https://github.com/settings/developers)

#### OAuth browser side
var code = window.location.toString().replace(/.+code=/, '');
window.opener.postMessage(code, window.location);
window.close();

## References
[1]: https://gist.github.com/technoweenie/419219
[2]: http://blog.vjeux.com/2012/javascript/github-oauth-login-browser-side.html
