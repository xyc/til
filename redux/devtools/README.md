## [Guide](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md)

```sh
npm i -S redux-devtools
npm i -S redux-devtools-log-monitor redux-devtools-dock-monitor
```

`containers/DevTools.js`
```js
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w">
    <LogMonitor />
  </DockMonitor>
)

```

`containers/Root.js`
```js
const Root = ({ store }) =>
  <Provider store={store}>
    <App />
    <DevTools />
  </Provider>
```

`store/configureStore.js`
```js
import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools'

import createLogger from 'redux-logger'
import rootReducer from '../reducers'


const finalCreateStore = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
```

## Read more
- how Redux DevTools work https://github.com/facebook/react/issues/4595#issuecomment-129786951
> If you look at how Redux DevTools work, we keep a "lifted state" (initial app state + debug UI + "staged" actions which will be replayed on hot reload + current state index useful for slider monitors), but the app only sees "unlifted state". (Which makes it behave normally as it's unaware that the state is backed by computation.)

- https://github.com/zalmoxisus/redux-devtools-extension
- https://github.com/zalmoxisus/remote-redux-devtools
