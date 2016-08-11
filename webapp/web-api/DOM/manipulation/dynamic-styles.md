# Dynamic styles

## Load style link
Result to be inserted:
```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

```js
// <link rel="stylesheet" type="text/css" href="styles.css">
function loadStyles(url){
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  var head = document.getElementsByTagName("head")[0]; // var head = document.head || document.getElementsByTagName("head")[0] (HTML5 introduces document.head property)
  head.appendChild(link);
}

loadStyles("styles.css")
```

## Load style string
Result to be inserted:
```html
<style type=”text/css”>
  body {
    background-color: red;
  }
</style>
```

```js
function loadStyleString(css){
  var style = document.createElement("style");
  style.type = "text/css"; // optional attribute
  try{
    style.appendChild(document.createTextNode(css));
  } catch (ex) {
    style.styleSheet.cssText = css; // IE specific (IE throws error on appending child on <style> element), or we can use `if (style.styleSheet) {...} else {...}` instead of try-catch
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}

function loadStyleStringHTML5(css){
  var style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}

loadStyleString(`
  body{
    background-color: red;
  }
`)
```

## References
- https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
- https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
