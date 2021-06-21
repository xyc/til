# [Pseudo Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

```css
::after
::before
::first-letter
::first-line
::selection /* color, background-color, cursor, outline, text-decoration, text-emphasis-color and text-shadow, in particular, background-image is ignored */
::backdrop
::placeholder
::marker
::spelling-error
::grammar-error
```

Both the `::before` and `::after` pseudo-elements create a child element inside an element *only* if you define a content property. The content can be any string —even an empty one— but be mindful that anything other than an empty string will likely be announced by a screen reader.

Use cases:
- `::first-letter` to implement drop cap
- Empty `::before` and `::after` `.my-element::before { content: ""; }`
- clearfix
- etc.

## References
- [web.dev pseudo elemnets](https://web.dev/learn/css/pseudo-elements/)
- [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/): cautious of the improper use cases