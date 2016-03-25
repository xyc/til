# [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

## `@keyframes`

```css
.progressBar {
  width: 200px;
  height: 20px;
  background: #A6DAEC;
  /*transition: width 5s;*/
  animation: expandWidth 5s ease-in-out;
}

@keyframes expandWidth {
   0% { width: 0; }
   100% { width: 200px; }
}
```

## Read more
- [Controlling CSS Animations and Transitions with JavaScript](https://css-tricks.com/controlling-css-animations-transitions-javascript/)
- [Restart CSS animation](https://css-tricks.com/restart-css-animation/)
  - `offsetWidth` triggers reflow
