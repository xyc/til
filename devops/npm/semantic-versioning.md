# Semantic versioning

```sh
npm i -g semver

semver 1.0.0
semver 1.0.0-alpha.0

semver -i major 1.0.0
semver -i minor 1.0.0
semver -i patch 1.0.0
```


#### Use with NPM scripts?
```js
  "release:major": "semver -i major $(node -e \"console.log(require('./package.json').version);\") && npm publish . "
```
