# [Responsive design patterns](http://trydesignlab.com/learn-responsive-web-design/grids-and-design-patterns/)

## [Mostly fluid](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/mostly-fluid?hl=en)
This is a very common approach to responsive design. The desktop version of the site features a multi-column layout in a fixed-width grid (for example, 960px) — with large margins on either side in wide screens. Content within the grid is in a fluid grid — so content and media adjust and resize appropriately as you size down the screen. In the smallest screen size, the layout shifts to a single column with content.

```
.............
  |-------|
  |       |
  |-------|
  |  |    |
  |-------|
.............
```

<div style="background: red; padding-left: 20%; padding-right: 20%"><header style="width: 100%; height: 100px; margin: 0; background: blue">header</header><div><section style="display: inline-block; background: yellow; width: 30%; height:100px; margin: 0; color: black">section 1</section><section style="display: inline-block; background: green; width: 70%; height:100px; margin: 0; color: white">section 2</section></div></div>

```css
.container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}

.c1, .c2, .c3, .c4, .c5 {
  width: 100%;
}

@media (min-width: 600px) {
  .c2, .c3, .c4, .c5 {
    width: 50%;
  }
}

@media (min-width: 800px) {
  .c1 {
    width: 60%;
  }
  .c2 {
    width: 40%;
  }
  .c3, .c4, .c5 {
    width: 33.33%;
  }
}

@media (min-width: 800px) {
  .container {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
```

#### [Shifting layouts](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/layout-shifter?hl=en)
This approach is pretty different from the one above. Instead of simply adjusting the content within the main grid as the screens resize, or removing columns of content from the grid, the layout significantly shifts content and positioning based on screen size.

This requires more work, but could also be a good approach if the information, intent, and goals you want to design for are radically different based on device type.

#### [Off canvas](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/off-canvas?hl=en)
Hiding navigation elements off-canvas, typically behind a hamburger or menu icon (as shown above, in the example of the Facebook app).

#### [Column drop](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/column-drop?hl=en)
column drop simply stacks the columns vertically as the window width becomes too narrow for the content.

#### [Tiny tweaks](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/tiny-tweaks?hl=en)

## Ask questions
How effective are these patterns?
What are the main user goals on this page? Can you easily accomplish them?
What would you do differently, if anything?

Read more:
- Responsive Navigation Patterns http://bradfrost.com/blog/web/responsive-nav-patterns/
- Why and How to Avoid Hamburger Menus https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/
- https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/?hl=en
- https://bradfrost.github.io/this-is-responsive/patterns.html
