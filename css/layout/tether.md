## Ways to tether an element

This changes the Tethered component's parent positioning.
```html
<div style="position: relative">
  <div style="position: absolute">
    <Tethered>
  </div>
</div>
```

This doesn't have that problem.
```html
<div>
  <div style="position: relative"> <!-- in the flow, height=0 -->
    <div style="position: absolute"> <!-- out of the flow -->
    </div>
  </div>
  <Tethered>
</div>
```
