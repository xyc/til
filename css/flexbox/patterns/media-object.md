Without flexbox:

- The media object’s body must **prevent text from wrapping below the image** by either creating a [block formatting context](http://www.stubbornella.org/content/2013/07/31/re-visiting-the-secret-power-of-block-fomatting-context/)
- or using a left margin/padding equal to the width of the image.

In addition, Flexbox allows us to vertically align the media object figure however we want.


```html
<div class="Media">
  <img class="Media-figure" src="" alt="">
  <p class="Media-body">…</p>  
</div>
```

```css
.Media {
  display: flex;
  align-items: flex-start;
}

.Media-figure {
  margin-right: 1em;
}

.Media-body {
  flex: 1;
}
```
