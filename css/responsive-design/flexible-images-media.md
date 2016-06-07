The main concept here: you want to make sure that images can resize appropriately based on your grid. The simplest way to do this is to use CSS to set a max-width on images to 100%.

```css
img {max-width: 100%}
```

This ensures that the image will never be larger than 100% of its dimensions, making sure it doesn’t get stretched or pixelated. The image also will never be larger than its parent container, so if the div it’s in is 500px, the image width will be 500px and the height will be adjusted appropriately to maintain the image’s aspect ratio.

## Read more
- http://alistapart.com/article/responsive-images-in-practice
