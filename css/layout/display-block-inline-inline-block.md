# display

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
    - In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block.
  - [inline](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting)
    - In an inline formatting context, boxes are laid out horizontally, one after the other, beginning at the top of a containing block.

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
