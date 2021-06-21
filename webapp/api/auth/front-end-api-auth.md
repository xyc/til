# Front End API Auth
- Fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/
- https://gomakethings.com/how-to-make-multiple-fetch-calls-with-the-same-oauth-token-in-vanilla-js/
- https://gomakethings.com/how-to-setup-a-middleman-api-with-vanilla-js/
- https://gomakethings.com/api-authentication-with-vanilla-js/
- https://gomakethings.com/api-credentials-and-security-with-vanilla-js/
- https://stackoverflow.com/questions/33860262/how-to-interact-with-back-end-after-successful-auth-with-oauth-on-front-end
- https://security.stackexchange.com/questions/36958/is-it-safe-to-store-password-in-html5-sessionstorage

## Example: Spotify
[Spotify Web API Auth examples](https://github.com/spotify/web-api-auth-examples)

Config:
```js
const api = {
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    clientId: '...',
    clientSecret: '...'
};
```

Using Fetch:
```js
export const auth = async () => {
    return fetch(api.authUrl, {
        method: 'POST',
        // mode: 'cors',
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded', // NOTE: this need to be set to URL encoded forms
            'Authorization': 'Basic ' + btoa(`${api.clientId}:${api.clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    }).then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(error => {
        console.error(error);
        return null;
    })
}

const NEW_RELEASES = 'https://api.spotify.com/v1/browse/new-releases';

export const fetchNewReleases = async (token) => {
    return fetch(NEW_RELEASES, {
        method: 'GET',
        headers: {
            'Authorization': token.token_type + ' ' + token.access_token,
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        return response.json();
    });
}
```

Using Axios:
```js
import axios from 'axios';
import querystring from 'querystring';

export const fetchNewReleases = async () => {
  const { data: { access_token: token } } = await axios.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify({ 'grant_type': 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`
      }
    }
  );

  const res = await axios.get(
    `${api.baseUrl}/browse/new-releases?locale=en_US`,
    {  headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data[resourceType].items;
}
```