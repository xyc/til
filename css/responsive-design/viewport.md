```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Include width=device-width to match the screen's width in device-independent pixels. -->

<!--
Include initial-scale=1 to establish a 1:1 relationship between CSS pixels and device-independent pixels. Adding the attribute initial-scale=1 instructs browsers to establish a 1:1 relationship between CSS pixels and device-independent pixels regardless of device orientation, and allows the page to take advantage of the full landscape width.

In addition to setting an initial-scale, you can also set the following attributes on the viewport:
- minimum-scale
- maximum-scale
- user-scalable
When set, these can disable the user’s ability to zoom the viewport, potentially causing accessibility issues.
-->

<!-- Ensure your page is accessible by not disabling user scaling. -->
```

```html
<!--
Setting large absolute CSS widths for page elements (such as the example below), will cause the div to be too wide for the viewport on a narrower device
consider using relative width values, such as width: 100%.

Similarly, beware of using large absolute positioning values that may cause the element to fall outside the viewport on small screens.
-->
```
