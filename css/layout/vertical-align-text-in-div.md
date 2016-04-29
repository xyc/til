# Vertical align text in <div>

#### Set line height
```js
<div style={{
              height: divHeight
              line-height: divHeight
            }}>
```  

```css
#box {
  height: 90px;
  line-height: 90px;
}
```

#### Container
```html
<div>
  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</div>
```

```css
div {
  width: 250px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
```
