## `position: static`
> The default. **Any top, right, bottom, or left properties are ignored.**

## `position: absolute`
> The element will be removed from its original layout position and positioned relative to its nearest positioned parent by the positioning properties.

## `position: fixed`
> The element will be removed from its original layout position and positioned relative to the window. (Mobile devices with zoom may have indeterminate behavior.)

## `position: relative`
> Unlike absolute or fixed, the element stays in its original layout position and the top, right, bottom, or left properties only nudge it from that original position.

<div style="position: relative; width: 200px; height: 200px; background: white; border: 5px solid teal; padding: 5px; ">
  <div style="position: absolute; width: 50px; height: 50px; background: blue;">
  </div>
</div>

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="right: 0; position: absolute; width: 50px; height: 50px; background: blue;">
  </div>
</div>

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="bottom: 0; right: 0; position: absolute; width: 50px; height: 50px; background: blue;">
  </div>
</div>

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="bottom: 0; left: 0; position: absolute; width: 50px; height: 50px; background: blue;">
  </div>
</div>

<!-- width is squeezed. -->
<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="bottom: 0; right: 0; left: 0; position: absolute; width: 50px; height: 50px; background: pink;">
  </div>
</div>

<!-- stretching itself to 100% width -->
<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal;">
  <div style="bottom: 0; right: 0; left: 0; position: absolute; height: 50px; background: tomato;">
  </div>
</div>

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="top: 0; bottom: 0; right: 0; left: 0; position: absolute; width: 50px; height: 50px; background: blue;">  
  </div>
</div>

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
  <div style="top: 0; bottom: 0; right: 0; left: 0; position: absolute; background: blue;">  
  </div>
</div>

## Box offsets
- `top`: This property specifies
  - how far an `absolute`ly positioned box's `top margin edge` is offset below the top edge (content) of the box's containing block.
  - For `relative`ly positioned boxes, the offset is with respect to the top edges of ***the box itself*** (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
  - values:
    - <length>: The offset is a fixed distance from the reference edge. Negative values are allowed.
    - <percentage>: The offset is a percentage of the containing block's width (for 'left' or 'right') or height (for 'top' and 'bottom'). Negative values are allowed.
    - `auto`: For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well. See the sections on the [width](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) and height of absolutely positioned, non-replaced elements for details. For replaced elements, the effect of this value depends only on the intrinsic dimensions of the replaced content. See the sections on the width and height of absolutely positioned, replaced elements for details.
      - `'left' + 'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' + 'right' = width of containing block`
        - If all three of `left`, `width`, and `right` are 'auto': First set any 'auto' values for 'margin-left' and 'margin-right' to 0. Then, if the 'direction' property of the element establishing the static-position containing block is 'ltr' set 'left' to the static position and apply rule number three below; otherwise, set 'right' to the static position and apply rule number one below.
        - If none of the three is 'auto': If both 'margin-left' and 'margin-right' are 'auto', solve the equation under the extra constraint that the two margins get equal values, unless this would make them negative, in which case when direction of the containing block is 'ltr' ('rtl'), set 'margin-left' ('margin-right') to zero and solve for 'margin-right' ('margin-left'). If one of 'margin-left' or 'margin-right' is 'auto', solve the equation for that value.
          - **If the values are over-constrained**, ignore the value for 'left' (in case the 'direction' property of the containing block is 'rtl') or **'right' (in case 'direction' is 'ltr') and solve for that value**.
            - `left: 0; right: 0; width: 100px`
## Read more
- [Box offsets](https://www.w3.org/TR/CSS2/visuren.html#position-props)
- [CSS Magic: Layout](http://adamschwartz.co/magic-of-css/chapters/2-layout/)
- CSS tricks: position https://css-tricks.com/almanac/properties/p/position/
