> **Once this new stacking context is created, you can be confident that nothing within that element can render on top of anything outside that element.**

1. New stacking context with position & z-index
```css
position: relative;
z-index: 0;
```

2. New stacking context with transform
```css
transform: translate(0);
```

> You may have been told that position: fixed is relative to the viewport. This is not true.
> “any value other than none for the transform also causes the element to become … a containing block for fixed positioned descendants”.

3. New stacking context with opacity
```css
opacity: 0.999; /*opacity less than 1*/
```

## Read more
- [My approach to using z-index](https://hackernoon.com/my-approach-to-using-z-index-eca67feb079c): A really really good article
- [Stacking Context, or why your z-index won't work](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- https://medium.freecodecamp.com/z-axis-html-css-z-index-layout-adventures-2419cefdc2ed#.5ipyue6m0
