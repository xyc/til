# Mocha
```sh
npm i --save mocha babel-register

npm i --save react-addons-test-utils # for react
npm i --save expect
```

`package.json`:
```js
{
  "scripts": {
    "test": "cross-env BABEL_ENV=commonjs mocha --compilers js:babel-register --recursive",
    "test:watch": "npm test -- --watch"
  }
}

{
  "scripts": {
    "test": "mocha test --compilers js:babel-register",
  }
}
```
## Run test

```sh
npm run test
npm run test -- --watch
```

## Write tests
```js
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { MyComponent } from '../src'

const renderer = TestUtils.createRenderer()

beforeEach(() => {
})

it('should render', () => {
  console.log(ObjectDescription) // if 'undefined' means module is not correctly imported
  renderer.render(<ObjectDescription object={0} />)
  const tree = renderer.getRenderOutput()
  expect(1).toBe(1)
})
```

## Error
```
Reactjs : TypeError: Cannot read property 'propTypes' of undefined
```
Usually this is because the element cannot be found (module not correctly imported)

```js
export default const MyComponent = ( props ) => <div>{props.children}</div>
export default const MyComponent = ({ prop }) => <div></div>
export default class MyComponent extends React.Component {}
import MyComponent from '../src/MyComponent'`
```
