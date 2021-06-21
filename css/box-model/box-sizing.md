![Border box](https://css-tricks.com/wp-content/uploads/2010/09/widthbox.png)

## `box-sizing: content-box`
The default. When computing the size of a box, padding and border are added.

> width = content

## `box-sizing: border-box`
When computing the size of a box, padding and border are folded in.

> width = border + padding + content

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

## Read more
- [* { Box-sizing: Border-box } FTW](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
- Input larger than containing div: use `box-sizing: border-box` http://stackoverflow.com/questions/1633522/html-input-element-wider-than-containing-div
