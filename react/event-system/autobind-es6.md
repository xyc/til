http://www.ian-thomas.net/autobinding-react-and-es6-classes/

## ES6

```js
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
