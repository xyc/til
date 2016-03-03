# [HTMLElement.contentEditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable)

## Create a contentEditable element
```html
<div contentEditable></div>

<div contentEditable="true"></div>
<div contentEditable="false"></div>
<div contentEditable="inherit"></div> <!-- default -->
```

```js
element.isContentEditable
element.contentEditable = 'true'; // change contentEditable state
document.designMode = 'on'; // Making an Entire Page Editable
```

## Chrome DevTools' console uses [-webkit-user-modify: read-write-plaintext-only](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-user-modify)
