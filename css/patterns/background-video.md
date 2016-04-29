# [Background Video](http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video)

```js
<video autoplay loop poster="polina.jpg" id="bgvid">
    <source src="polina.webm" type="video/webm">
    <source src="polina.mp4" type="video/mp4">
</video>
```

```css
video#bgvid {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background: url(polina.jpg) no-repeat;
    background-size: cover;
}
```
