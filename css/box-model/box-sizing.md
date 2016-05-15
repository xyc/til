## `box-sizing: content-box`
The default. When computing the size of a box, padding and border are added.

## `box-sizing: border-box`
When computing the size of a box, padding and border are folded in.

```css
.html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

- [* { Box-sizing: Border-box } FTW](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
