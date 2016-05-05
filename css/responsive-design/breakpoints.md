```css
@media screen and (min-width: 300px) { /* ...mobile styles here... */ }
@media screen and (min-width: 600px) { /* ...tablet styles here... */ }
@media screen and (min-width: 900px) { /* ...desktop styles here...*/ }
```

The rule of thumb is to design for as few major breakpoints as possible.
- Major breakpoints are when huge elements of your layout get affected (most typically when you **change the number of columns in your layout**) — i.e. your website changes from a three-column layout to a one-column mobile view.
Pick major breakpoints by starting small, then working up

```html
<link rel="stylesheet" href="weather.css">
<link rel="stylesheet" media="(max-width:600px)" href="weather-2-small.css">
<link rel="stylesheet" media="(min-width:601px)" href="weather-2-large.css">
```

- Minor breakpoints, on the other hand, happen when you need to modify or adjust specific elements at certain screen dimensions.
Pick minor breakpoints when necessary
```css
@media (min-width: 360px) {
  body {
    font-size: 1.0em;
  }
}

@media (min-width: 500px) {
  .seven-day-fc .temp-low,
  .seven-day-fc .temp-high {
    display: inline-block;
    width: 45%;
  }

  .seven-day-fc .seven-day-temp {
    margin-left: 5%;
  }

  .seven-day-fc .icon {
    width: 64px;
    height: 64px;
  }
}

/* for the large screens, it’s best to limit to maximum width of the forecast panel so it doesn’t consume the whole screen width. */
@media (min-width: 700px) {
  .weather-forecast {
    width: 700px;
  }
}
```
