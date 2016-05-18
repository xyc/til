Initial values of flexbox containers and items.

```css
.flex-container-initial {
  display: flex;
  flex-flow: row nowrap;
    flex-direction: row; /* row row-reverse column column-reverse */
    flex-wrap: nowrap; /* wrap wrap-reverse */

  /*
  space-between: The spacing is done such as the space between two adjacent items is the same.
  space-around: The empty space before the first and after the last items equals half of the space between two adjacent items. */
  justify-content: flex-start; /* center flex-end space-between space-around */
  /* stretch to fill the container (still respect min-width/max-width) */
  align-items: stretch; /* flex-start flex-end center baseline */   
}

.flex-item-initial {
  display: initial; /* display is not an inherited property. */
  flex: 0 1 auto;
    /* how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. */
    flex-grow: 0; /* 3 0.6 */
    /* how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed. */
    flex-shrink: 1; /* 2 0.6 */
    /* `auto` sizes the element according to its size property (which can itself be the keyword auto, which sizes the element based on its contents) */
    flex-basis: auto; /* 10em 3px auto | fill max-content min-content fit-content | content */

  /* Elements are laid out in the ascending order of the order value. */
  order: 0; /* -5 5 */
  /* The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored. */
  align-self: auto; /* flex-start flex-end center baseline stretch */
}
```

## justify-content
![justify-content](https://www.w3.org/TR/css-flexbox-1/images/flex-pack.svg)

## align-items
![align-items](https://www.w3.org/TR/css-flexbox-1/images/flex-align.svg)
