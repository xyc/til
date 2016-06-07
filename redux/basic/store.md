# Store

```js
import { createStore } from 'redux'

const store = createStore(myReducer)

console.log(store.getState())

store.subscribe(callback) // called when action is dispatched

store.dispatch(action)
```

## Read more
- Single store http://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not
  - normalizr https://github.com/paularmstrong/normalizr

> There are edge cases when you might use multiple stores (e.g. if you have performance problems with updating lists of thousands of items that are on screen at the same time many times per second). That said it's an exception, and in most apps you never need more than a single store.

> Why do we stress this in the docs? Because most people coming from Flux will **assume multiple stores is the solution to making update code modular. However Redux has a different solution for this: reducer composition.**

> Having multiple reducers that are further split into a reducer tree is how you keep updates modular in Redux. If you don't recognize this, and go for multiple stores without fully understanding reducer composition first, you will miss many benefits of Redux single store architecture:

> Using reducer composition makes it easy to implement "dependent updates" a la waitFor in Flux by writing a reducer manually calling other reducers with additional information and in a specific order.
With a single store, it's very easy to persist, hydrate, and read the state. Server rendering and data prefetching is trivial because there is just one data storage that needs to be filled and rehydrated on the client, and JSON can describe its contents without worrying about store's ID or name.
A single store makes Redux DevTools time travel features possible. It also makes community extensions like redux-undo or redux-optimist easy because they operate on the reducer level. Such "reducer enhancers" can't be written for stores.
Single store guarantees that the subscriptions are called only after the dispatch has been processed. That is, by the time listeners are notified, the state has been fully updated. With many stores, there is no such guarantees. This is one of the reasons Flux needs the waitFor crutch. With a single store, this is not a problem you see in the first place.
Above all, multiple stores are unnecessary in Redux (except for performance edge cases which you are supposed to profile first anyway). We make it an important point in the docs so you are encouraged to learn reducer composition and other Redux patterns instead of using Redux as if it was Flux, and losing its benefits.
