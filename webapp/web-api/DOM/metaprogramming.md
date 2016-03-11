Examples:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
<link rel="stylesheet" href="css/custom.css">
```

```js

// Add style to document

// Delete element

// Change element style
  // dye React component (inline style)
  (function() {
    // convert NodeList to array
    Array.prototype.slice.call(document.querySelectorAll('[data-reactid]'))
                                       .forEach(function(element) {
                                         element.style.background = 'rgba(255,0,0,0.1)';
                                       })}());

  // dye React component (NOTE that React 15 removes reactid)
  (function() {
    var style = document.createElement( 'style' );
    style.innerHTML = "[data-reactid] { background: rgba(0,0,255,0.1); }";
    document.head.appendChild( style );
  }());

  // dye general page (div, span, a)
  (function() {
    var style = document.createElement( 'style' );
    style.innerHTML = "div, span, a { background: rgba(0,0,255,0.1); }";
    document.head.appendChild( style );
  }());  
```
