# Flexbox

- MDN https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes

## Read more
- Solved by flexbox https://github.com/philipwalton/solved-by-flexbox
- Flexbox patterns http://www.flexboxpatterns.com/home

- **CSS FlexBox Practical Examples (Rebuilding Dribbble.com using FlexBox)** https://www.youtube.com/watch?v=H1lREysgdgc

- http://tympanus.net/codrops/css_reference/flexbox/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- Tutorials and Games
  - http://flexboxin5.com/
  - https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1
  - http://www.flexboxdefense.com/
  - http://flexboxfroggy.com/  

## Why flexbox

MDN:
> Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based)

> While the block layout works well for pages, it lacks sufficient definition to support application components that have to **change orientation, resize, stretch, or shrink as the user agent changes, flips from vertical to horizontal, and so forth**.

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
