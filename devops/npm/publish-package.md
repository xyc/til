# Publish package

```sh
cd /path/to/your-project
npm init

# this shows you dependencies as you `require`d them
npm install -g pakmanager
pakmanager deps

# now edit `package.json` and add any deps you forgot about
# vi package.json

# before publish

#  build: src/ -> lib/
#  npm run lint && npm run test && npm run clean && npm run build
npm run prerelease





# change package.json version https://docs.npmjs.com/cli/version
# semver
npm version 1.2.3

# publish changes
npm publish ./

# update gh-pages
update examples

# push to github
git push origin master
```

Read more
- https://gist.github.com/coolaj86/1318304
- http://blog.izs.me/post/1675072029/10-cool-things-you-probably-didnt-realize-npm
