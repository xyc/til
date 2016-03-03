# Merge multiple inline styles

Use ES6 spread operator
```js
const styles = {
  firstStyle: {
    color: 'white'
  },
  secondStyle: {
    backgroundColor: 'rgb(1,0,0)'
  }
}

<div style={{...styles.firstStyle, ...styles.secondStyle}}>
</div>
```
