http://www.ian-thomas.net/autobinding-react-and-es6-classes/

## ES6

```js
export default class MyComponent extends Component {
  constructor(props, context) {
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {    
  }

  render() {
    return <div onClick={this.handleClick}></div>;
  }
}  
```

```js
// shouldComponentUpdate
export default class MyComponent extends Component {  
  handleClick(e) {    
  }

  render() {
    return <div onClick={this.handleClick.bind(this)}></div>;
  }
}  
```

```js
export default class MyComponent extends Component {  
  handleClick = (e) => { ... }

  render() {
    return <div onClick={this.handleClick}></div>;
  }
}  
```

## Read more
- React and ES6 - Part 3, Binding to methods of React class (ES7 included) http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
- 把 Facebook 内部使用 React.createClass 的 React 代码大批量重构至使用 Property Initializer 的 ES201x Class (React.Component) https://zhuanlan.zhihu.com/p/21345964
  - https://github.com/reactjs/react-codemod/blob/master/transforms/class.js
- Binding in React https://github.com/facebook/react/issues/7385#issuecomment-236684699
  > Don’t stress over binding in render() too much. In my experience it makes a real difference in maybe 10% of cases. (https://mobile.twitter.com/dan_abramov/status/760199672824815616)
