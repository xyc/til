# CSS transition
Specifiy a transition attribute, when the styles/other animatable properties of the element changes, it will start a transition.


```css
div {
  transition: background-color 1s ease
}
```

```js
// set transition
transition: background-color 1s ease

// change element style

// (optional) listen for transitionEnd event and handles the event (change back, start new animation etc.)
```

## API

Initial State -> Transition -> Final State
- List of animatable properties: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties


```js
'transition':'transitionend',
'OTransition':'oTransitionEnd',
'MozTransition':'transitionend',
'WebkitTransition':'webkitTransitionEnd'
```

```js
color: 'white',
backgroundImage: 'url(' + imgUrl + ')',
WebkitTransition: 'all', // note the capital 'W' here
msTransition: 'all' // 'ms' is the only lowercase vendor prefix
```

## Transition on page load
- http://stackoverflow.com/questions/6805482/css3-transition-animation-on-load
  - CSS3 Keyframes

## Read more
- http://www.chloechen.io/react-animation-done-in-two-ways/

```js
var myImg = myEl.getElementsByTagName("img");
myImg.addEventListener(transitionend, handler)

event.propertyName === "transform"

/* The only tricky bit with the transitionend method is that it needs browser prefixes, This following method used by Modernizr  will do the trick: */
function whichTransitionEvent(){
   var t;
   var el = document.createElement('fakeelement');
   var transitions = {
     'transition':'transitionend',
     'OTransition':'oTransitionEnd',
     'MozTransition':'transitionend',
     'WebkitTransition':'webkitTransitionEnd'
      }
   for(t in transitions){
     if( el.style[t] !== undefined ){
     return transitions[t];
     }
   }
 }
```
