# Store Passing
> Use a special React Redux component called `<Provider>` to magically make the store available to all container components in the application without passing it explicitly.

`<Provider>` make use of **[React context](https://facebook.github.io/react/docs/context.html)**. Context let you pass the data through the component tree (without manually passing down at every level).

- See redux book
[Usage with React: Passing the Store](http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)

```js
const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
)
```

## Presentational Component (Dumb Component)
- Used for visual hierarchy, markup, styles
- doesn't depend on redux
- props: data and handlers

```js
const PresentationalComponent = ({data, onSomeEvent}) => (
  <div onEvent={(data)=>onSomeEvent()}>
    {data}
  </div>
)

class PresentationalComponent extends Component {
  render(){
    const {data} = this.props
  }
}
```

## Container Component (Smart Component)
- Used for data fetching and state updates
- subscribe to redux state to read data from props
- dispatch redux actions to change data
```js
const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalComponent)
```

## `mapStateToProps`
A function that is needed by the wrapper container component creator (`connect()`) for passing a specific part of the state tree to presentational components.

```js
const mapStateToProps = (state) => {
  return {
    prop1: stateToProp1(state),
    prop2: stateToProp2(state)
  }
}
```

## `mapDispatchToProps`
A function that is needed by the wrapper container component creator (`connect()`) for dispatching actions on specific handlers.

```js
import actionCreator from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    // arg is some argument from presentational component (as one of the sources of data to create actions)
    onSomeEvent: (arg) => {
      dispatch(actionCreator(arg))
    }
  }
}
```

## `connect()`
```js
import { connect } from 'react-redux'

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalComponent)

export default ContainerComponent
```
