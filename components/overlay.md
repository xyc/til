# Overlay

http://stackoverflow.com/questions/9724035/how-can-one-create-an-overlay-in-css

## Method 1
You can use position:absolute to position an overlay inside of your div and then stretch it in all directions like so:
```css
.overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0, 0, 0, 0.85);
    background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat scroll transparent\9; /* ie fallback png background image */
    z-index:9999;
    color:white;
}
```
Make sure that your parent `<div` has the `position:relative` property added to it and a lower z-index.

## Method 2
```js
box-shadow: inset 0px 0px 0 2000px rgba(0,0,0,0.5);

boxShadow: "inset 0 0 0 50vmax rgba(0,0,0,0.1)" // css secrets
```

```js
// react
<div style={{ boxShadow: "inset 0px 0px 0 2000px rgba(0,0,0,0.2)" }}>
  <OverlayedComp/>
</div>
```
