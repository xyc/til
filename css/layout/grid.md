## Design Grid System
From Solved by flexbox:

- By default, each grid cell is the same width and height as every other cell in the row. Basically they all size to fit by default.
- For finer control, you can add sizing classes to individual cells. Without these classes, the cells simply divide up the available space as usual.
- For responsive grids, you can add media query-specific classes to the cells.
- Individual cells can be aligned vertically to the top, bottom, or middle.
- When you want all of the cells in a grid to have the same sizing, media, or alignment values, you should be able to just add a single class to the container to avoid unnecessary repetition.
- Grids can be nested as many levels deep as needed.

```css
/* https://github.com/1000ch/grd/blob/gh-pages/src/grd.css */

:root {
  --grid {
    display: flex;
    flex-wrap: wrap;
  }
  --cell {
    box-sizing: border-box;
    flex-shrink: 0;
  }
}

.Grid            { @apply --grid; }
.Grid.\-top      { align-items: flex-start; }
.Grid.\-middle   { align-items: center; }
.Grid.\-bottom   { align-items: flex-end; }
.Grid.\-stretch  { align-items: stretch; }
.Grid.\-baseline { align-items: baseline; }
.Grid.\-left     { justify-content: flex-start; }
.Grid.\-center   { justify-content: center; }
.Grid.\-right    { justify-content: flex-end; }
.Grid.\-between  { justify-content: space-between; }
.Grid.\-around   { justify-content: space-around; }

.Cell            { @apply --cell; }
.Cell.\-fill     { width: 0; min-width: 0; flex-grow: 1; }
.Cell.\-1of12    { width: calc(100% * 1 / 12); }
.Cell.\-2of12    { width: calc(100% * 2 / 12); }
.Cell.\-3of12    { width: calc(100% * 3 / 12); }
.Cell.\-4of12    { width: calc(100% * 4 / 12); }
.Cell.\-5of12    { width: calc(100% * 5 / 12); }
.Cell.\-6of12    { width: calc(100% * 6 / 12); }
.Cell.\-7of12    { width: calc(100% * 7 / 12); }
.Cell.\-8of12    { width: calc(100% * 8 / 12); }
.Cell.\-9of12    { width: calc(100% * 9 / 12); }
.Cell.\-10of12   { width: calc(100% * 10 / 12); }
.Cell.\-11of12   { width: calc(100% * 11 / 12); }
.Cell.\-12of12   { width: 100%; }
```

## Related
- [Flexbox vs Grid](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)
- [Solved By flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/grids/)
- [Grid animation effects](http://tympanus.net/codrops/2015/04/15/grid-item-animation-layout/)
- [Pinterest like grid](http://ademilter.github.io/bricklayer/): Pinterest always places next block on column with lowest height

## Other solutions
#### `inline-block`
#### `float`
