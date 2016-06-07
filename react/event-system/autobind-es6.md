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
