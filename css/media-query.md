# [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

```css
@media (max-width: 600px) {

}

/* and */
@media (min-width: 700px) and (orientation: landscape) {

}

@media tv and (min-width: 700px) and (orientation: landscape) {
}

/* or */
@media (min-width: 700px), handheld and (orientation: landscape) { }

/* not */
/* The not keyword cannot be used to negate an individual feature query, only an entire media query */
@media not all and (monochrome) { ... }

```
