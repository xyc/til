# StyleSheets

Check for DOM Level 2 style sheets support:
```js
var supportsDOM2StyleSheets = document.implementation.hasFeature("StyleSheets", "2.0");
```

## CSSStyleSheet
```js
var sheet = document.styleSheets[0];
```

## CSSRule
```js
// 0: insert position
sheet.insertRule("body { background-color: silver }", 0);

sheet.deleteRule(0);
```

## Adding `<style>` stylesheet
```js
var css = `* { margin: 0; padding: 0; }`
var style = document.createElement('style');

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);
```
