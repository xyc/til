# Higher order components

> A higher-order component is just a function that takes an existing component and returns another component that wraps it.

```haskell
-- Component is pure
-- Why ComposedComponent is **NOT** pure?
hoc :: Component -> ComposedComponent
```

```js
/**
 * https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.5qf4a5jyd
 */
function connectToStores(Component, stores, getStateFromStores /**/) {
  const StoreConnection = React.createClass({
    getInitialState() {
      return getStateFromStores(this.props); //
    },
    componentDidMount() {
      stores.forEach(store =>
        store.addChangeListener(this.handleStoresChanged)
      );
    },
    componentWillUnmount() {
      stores.forEach(store =>
        store.removeChangeListener(this.handleStoresChanged)
      );
    },
    handleStoresChanged() {
      if (this.isMounted()) {
        this.setState(getStateFromStores(this.props));
      }
    },
    render() {
      return <Component {...this.props} /* so that the props of the parent is also passed down to the wrapped component */
                        {...this.state} />;
    }
  });
  return StoreConnection;
};

var ProfilePage = React.createClass({
  propTypes: {
    userId: PropTypes.number.isRequired,
    user: PropTypes.object // note that user is now a prop
  },
  render() {
    var { user } = this.props; // get user from props
    return <div>{user ? user.name : 'Loading'}</div>;
  }
});
// Now wrap ProfilePage using a higher-order component:
ProfilePage = connectToStores(ProfilePage, [UserStore], props => ({
  user: UserStore.get(props.userId)
});
```

Read more:
- https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775
- Mixins are dead https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
- React decorators https://github.com/kriasoft/react-decorators

## Decorotors

Read more:
- decorator https://github.com/wycats/javascript-decorators
