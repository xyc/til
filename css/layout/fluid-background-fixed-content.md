```html
<footer>
  <div class="wrapper">
  </div>
</footer>
```

```css
footer {
  background: #333;
}
.wrapper {
  max-width: 900px;
  margin: 1em auto;
}
```

```css
footer {
  max-width: 900px;
  padding: 1em calc(50% - 450px);
  background: #333;
}

.wrapper {  
}
```

```css
footer {
  padding: 1em; /* backward compatibility */
  padding: 1em calc(50% - 450px);
  background: #333;
}
```
