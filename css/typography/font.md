Use `@import` to import fonts

Import Google fonts
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
- 7 Rules for Creating Gorgeous UI: Using good fonts https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#6ce2
