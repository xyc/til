# Flexbox
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

> A flex container expands items to fill available free space, or shrinks them to prevent overflow.

> Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based)

> While the block layout works well for pages, it lacks sufficient definition to support application components that have to **change orientation, resize, stretch, or shrink as the user agent changes, flips from vertical to horizontal, and so forth**.

## Read more
- [css-layout](https://github.com/facebook/css-layout) FB's JS flexbox library (All the behaviors of block and inline-block can be expressed in term of flex but not the opposite)
- CSS tricks flexbox guide https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- http://tympanus.net/codrops/css_reference/flexbox/
- **Solved by flexbox** https://github.com/philipwalton/solved-by-flexbox
- **Flexbox patterns** http://www.flexboxpatterns.com/home
- Almost complete guide to flexbox (**without flexbox**) http://kyusuf.com/post/almost-complete-guide-to-flexbox-without-flexbox

- **CSS FlexBox Practical Examples (Rebuilding Dribbble.com using FlexBox)** https://www.youtube.com/watch?v=H1lREysgdgc

- Tutorials and Games
  - http://flexboxin5.com/
  - What the flexbox (video tutorial) http://flexbox.io/
  - Webflow https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1
  - http://www.flexboxdefense.com/
  - http://flexboxfroggy.com/  
  - egghead https://egghead.io/series/flexbox-fundamentals

## `display: flex`
- `display: flex`
- `display: inline-flex`

## Axis
- Main Axis
  - justify-content
    - flex-start
    - flex-end
    - space-between
    - space-around
- Cross Axis
  - align-items
    - flex-start
    - flex-end
    - baseline
    - stretch
  - align-self

## directions
- order
- flex-flow
  - flex-direction
  - flex-wrap

## item size
- flex-grow
- flex-shrink
