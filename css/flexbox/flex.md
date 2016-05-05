```css
.flex-container-initial {
  flex: 0 1 auto;
    /* how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. */
    flex-grow: 0; /* 3 0.6 */
    /* how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed. */
    flex-shrink: 1; /* 2 0.6 */
    flex-basis: auto; /* 10em 3px auto | fill max-content min-content fit-content | content */

  flex-flow: row nowrap;
    flex-direction: row; /* row row-reverse column column-reverse */
    flex-wrap: nowrap; /* wrap wrap-reverse */

  justify-content: flex-start; /* center flex-end space-between space-around */
  align-items: stretch; /* flex-start flex-end center baseline */  
}

.flex-item-initial {
  /* Elements are laid out in the ascending order of the order value. */
  order: 0; /* -5 5 */
  /* The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored. */
  align-self: auto; /* flex-start flex-end center baseline stretch */
}
```
