# display

## `display: block`
Have a definable width and height.

## `display: inline`
Width and height are determined by the content they contain.

Same effect
```html
<div style="display:inline" />

<span />
```

## `display: inline-block`
[This article](http://designshack.net/articles/css/whats-the-deal-with-display-inline-block/) explains it well.

Display inline but retain block-level characteristics, doesn't have issues like collapsing parent containers with float.

- `display: inline-block; vertical-align: top`

### [Spaces between inline-block](http://stackoverflow.com/questions/10207992/the-gap-between-two-inline-block-span-element)

- remove the spaces
  ```html
  <!-- no spaces -->
  <span>a</span><span>b</span>

  <!-- no spaces -->
  <span>a</span><!-- comments --><span>b</span>

  <!-- spaces -->
  <span>a</span> <span>b</span>
  ```

- apply a negative margin
