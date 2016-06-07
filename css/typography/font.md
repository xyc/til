## Google fonts
```html
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
```

Use `@import` to import fonts
```css
@import url(http://fonts.googleapis.com/css?family=Lato:400,700italic);
```

## Font awesome
- FontAwesome not available as a font-family http://stackoverflow.com/questions/14698589/fontawesome-not-available-as-a-font-family
```css
@font-face {
	font-family: 'fontawesome';
	src:url('../fonts/fontawesome/fontawesome.eot');
	src:url('../fonts/fontawesome/fontawesome.eot?#iefix') format('embedded-opentype'),
		url('../fonts/fontawesome/fontawesome.woff') format('woff'),
		url('../fonts/fontawesome/fontawesome.ttf') format('truetype'),
		url('../fonts/fontawesome/fontawesome.svg#fontawesome') format('svg');
	font-weight: normal;
	font-style: normal;
}
```

font awesome example
```html
<i class="fa fa-camera-retro fa-2x"></i>
<i class="fa fa-github" aria-hidden="true"></i>
<i class="fa fa-twitter" aria-hidden="true"></i>
```

## Read more
- [7 Rules for Creating Gorgeous UI: Using good fonts](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#6ce2)
- [4 Fast Ways To Level Up Your Typography Game](http://trydesignlab.com/blog/4-fast-ways-to-level-up-your-typography-game/?me=cxychina%40gmail.com&utm_source=dl_marketing_email&utm_campaign=type-2016_5_24&utm_medium=email)
- [Creative Web Typography Styles](http://tympanus.net/Tutorials/TypographyStyles/)
