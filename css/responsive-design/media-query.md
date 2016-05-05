## Media queries
You could place all styles necessary for printing inside a print media query:
```html
<link rel="stylesheet" href="print.css" media="print">
```

```css
@media print {
  /* print style sheets go here */
}

/* not recommended */
@import url(print.css) print;
```

The logic that applies to media queries is not mutually exclusive and any filter that meets that criteria the resulting CSS block will be applied using the standard rules of precedence in CSS.

## Apply Queries
```css
@media (query) {
  /* CSS Rules used when query matches */
}
```

- `min-width`	Rules applied for any browser width over the value defined in the query.
- `max-width`	Rules applied for any browser width below the value defined in the query.
- `min-height`	Rules applied for any browser height over the value defined in the query.
- `max-height`	Rules applied for any browser height below the value defined in the query.
- `orientation=portrait`	Rules applied for any browser where the height is greater than or equal to the width.
- `orientation=landscape`	Rules for any browser where the width is greater than the height.

Example:
```html
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
<link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
<link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
<link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
<style>

  @media (min-width: 500px) and (max-width: 600px) {
    h1 {
      color: fuchsia;
    }

    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
  }
</style>
```

Notes:
- Use `any-pointer` and `any-hover` for flexible interactions on the union of all pointer devices
- Use relative units for **fluidity** and **proportionality** as opposed to fixed width layouts.

## [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

```css
@media (max-width: 600px) {

}

/* and */
@media (min-width: 700px) and (orientation: landscape) {

}

@media tv and (min-width: 700px) and (orientation: landscape) {
}

/* or */
@media (min-width: 700px), handheld and (orientation: landscape) { }

/* not */
/* The not keyword cannot be used to negate an individual feature query, only an entire media query */
@media not all and (monochrome) { ... }
```
