# [Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)

A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.

A block formatting context is created by one of the following:

- the root element or something that contains it
- floats (elements where `float` is not none)
- absolutely positioned elements (elements where position is `absolute` or `fixed`)
- inline-blocks (elements with display: inline-block)
- table cells (elements with display: table-cell, which is the default for HTML table cells)
- table captions (elements with display: table-caption, which is the default for HTML table captions)
- elements where `overflow` has a value **other than** `visible`
- flex boxes (elements with display: flex or inline-flex)

Block formatting contexts are important for the positioning (see float) and clearing (see clear) of floats. The rules for positioning and clearing of floats apply only to things within the same block formatting context.

## Float and Clear
Q: Explain clearfix
A: When all of the children of a container elements are floated, the height of the parent container collapse to 0. The succeeding elements to the container element need to clear the floats so that they won't be affected by the previous floated. Setting `overflow: hidden` creates a new BFC so that the succeeding elements are not in the same BFC with container.

Clearfix is useful for float layout (which can be replaced by flexbox).

```html
<div class="container">
  <div class="floated-left"></div>
  <div class="floated-left"></div>
  <div class="floated-right"></div>
  <!-- another way to clear floats -->
  <!--
  <div style="clear: both">
    My position is at the bottom of the floated boxes.
    and my height is 0.
  </div> -->
</div>
<div class="i-dont-want-be-affected-by-float">
</div>
```

> If this parent element contained nothing but floated elements, the height of it would literally collapse to nothing.

> Collapsing almost always needs to be dealt with to prevent strange layout and cross-browser problems. We fix it by clearing the float **after the floated elements** in the container but **before the close of the container**.

## `clearfix`
![clearfix](http://i.stack.imgur.com/gYRqS.jpg)

If you are in a situation where you always **know what the succeeding element is going to be**, you can apply the `clear: both;` value to that element. Otherwise,

- The Empty Div Method is, quite literally, an empty div. `<div style="clear: both;"></div>`

- The Overflow Method relies on setting the overflow CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements.
```css
.clearfix {
  overflow: hidden;
}
```

- The Easy Clearing Method: uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like "clearfix" to it. Then apply this CSS:
```css
.clearfix:after {
   content: ".";
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}
```

<div>
  <div style="float: left; background: yellow; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: yellow; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: yellow; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: yellow; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="clear: both;"></div>
  <div style="float: left; background: tomato; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: tomato; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: tomato; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: tomato; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="clear: both;"></div>
  <div style="float: left; background: limegreen; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: limegreen; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: limegreen; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
  <div style="float: left; background: limegreen; width: 50px; height: 50px; border-radius: 5px; margin: 5px">
  </div>
<div>
<div style="clear: both;"></div>

## Read more
- [All about floats](https://css-tricks.com/all-about-floats/)
