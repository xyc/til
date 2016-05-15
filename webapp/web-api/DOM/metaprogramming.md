Examples:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
<link rel="stylesheet" href="css/custom.css">
```

## Converting `NodeList` to `Array`
https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Converting_a_NodeList_to_an_Array

#### Node deletes itself
```js
n.parentNode.removeChild(n)
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

## Read more
- http://jspm.io/

- Styles:
  - https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
  - https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
  - See my Frontend metamorphosis projects
