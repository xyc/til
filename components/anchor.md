- http://tympanus.net/codrops/2014/06/04/inspiration-for-inline-anchor-styles/
- http://tympanus.net/Development/CreativeLinkEffects/

# Animated underline
- http://tobiasahlin.com/blog/css-trick-animating-link-underlines/
- different types (middle out, left, right): http://bradsknutson.com/blog/css-sliding-underline/

```css
div > a .item {
	position: relative;
}

div > a .item:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

div > a .item:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
```
