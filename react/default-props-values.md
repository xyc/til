# [Default prop values](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)

ES5:
```js
var ComponentWithDefaultProps = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  }
  /* ... */
});
```

ES6:
```js
class ComponentWithDefaultProps extends Component{
  constructor(props) {
    super(props)
  }

  static defaultProps = {
  }
}
```
