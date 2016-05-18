# display
- `block` (block-level element)
  - width: sized by **parent** (can be set)
    - Block-level, non-replaced elements in normal flow
      `'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' = width of containing block` (content-box)
        - If `left` or `right'`are given as `auto`, their computed value is 0.
        - If `width` is set to `auto`, any other `auto` values become '0' and `width` follows from the resulting equality.
        - If both `margin-left` and `margin-right` are `auto`, their computed values are equal.
  - height: sized by content (can be set)
- `inline` (inline-level element)
  - width: sized by content (can NOT be set by `width`)
  - height: sized by content (can NOT be set by `height`, determined by [`line-height`](https://www.w3.org/TR/REC-CSS2/visudet.html#q15))
  - margin-top, margin-bottom: can NOT be set
  - margin-left, margin-right: can be set
- `inline-block` (inline-level element) - inline (how I am gonna be dealt with by parent), block (how I handle my content **notice the width behaves like inline but can be set**) (also, generates [atomic inline-level boxes](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Visual_formatting_model) - contents don't participate in inline formatting context)
  - width: sized by content (can be set)
  - height: sized by content (can be set)
  - margin-top, margin-bottom: can be set
  - margin-left, margin-right: can be set

## `display: block`
> **My width is sized by my parent** and I **can have widths and heights set on me**. **My height is determined by my content.**

## `display: inline`
> **My width and height are determined by my contents** and **widths and heights don’t do anything to me**. Think of me like a word flowing in a paragraph.

## `display: inline-block`
> I am the **same as block** except **my width is determined by my contents**. (also my height is determined by my content.)

[This article](http://designshack.net/articles/css/whats-the-deal-with-display-inline-block/) explains it well.

Display inline but retain block-level characteristics, doesn't have issues like collapsing parent containers with float.

<div>This is an example. <div style="display:inline-block; width: 55px; height: 55px; background: black;">I am a inline block</div>This is an example. </div>

## Reference
- W3 spec [Visual formatting model](https://www.w3.org/TR/CSS2/visuren.html)
  - [block](https://www.w3.org/TR/CSS2/visuren.html#block-formatting)
    - In a block formatting context (BFC), boxes are laid out one after the other, vertically, beginning at the top of a containing block.
  - [inline](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting)
    - In an inline formatting context (IFC), boxes are laid out horizontally, one after the other, beginning at the top of a containing block.
      - `inline-block` is inline level element

## Misc notes
- inline http://maxdesign.com.au/articles/inline/
  - margin-top, margin-bottom doesn't work
  - padding-top, padding-bottom doesn't increase size

- Same effect
```html
<div style="display:inline" />
<span />
```

- `display: inline-block; vertical-align: top`

- [Spaces between inline-block](http://stackoverflow.com/questions/10207992/the-gap-between-two-inline-block-span-element)
  - see also solved by flexbox, css tricks
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
