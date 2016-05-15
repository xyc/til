## `position: static`
> The default. **Any top, right, bottom, or left properties are ignored.**

## `position: absolute`
> The element will be removed from its original layout position and positioned relative to its nearest positioned parent by the positioning properties.

## `position: fixed`
> The element will be removed from its original layout position and positioned relative to the window. (Mobile devices with zoom may have indeterminate behavior.)

## `position: relative`
> Unlike absolute or fixed, the element stays in its original layout position and the top, right, bottom, or left properties only nudge it from that original position.

<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
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
<div style="position: relative; width: 200px; height: 200px; background: white; border: 1px solid teal">
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

## Read more
- CSS Magic: Layout http://adamschwartz.co/magic-of-css/chapters/2-layout/
- CSS tricks: position https://css-tricks.com/almanac/properties/p/position/
