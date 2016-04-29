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

## Example

```css
header {
  -moz-animation-name: dropHeader;
  -moz-animation-iteration-count: 1;
  -moz-animation-timing-function: ease-out;
  -moz-animation-duration: 0.6s;

  -webkit-animation-name: dropHeader;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-out;
  -webkit-animation-duration: 0.6s;

  animation-name: dropHeader;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 0.6s;
}  

@-moz-keyframes dropHeader {
    0% {
        -moz-transform: translateY(-80px);
    }
    100% {
        -moz-transform: translateY(0);
    }
}
@-webkit-keyframes dropHeader {
    0% {
        -webkit-transform: translateY(-80px);
    }
    100% {
        -webkit-transform: translateY(0);
    }
}
@keyframes dropHeader {
    0% {
        transform: translateY(-80px);
    }
    100% {
        transform: translateY(0);
    }
}        
```

## Read more
- [Controlling CSS Animations and Transitions with JavaScript](https://css-tricks.com/controlling-css-animations-transitions-javascript/)
- [Restart CSS animation](https://css-tricks.com/restart-css-animation/)
  - `offsetWidth` triggers reflow
