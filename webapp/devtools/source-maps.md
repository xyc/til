## Source maps
In your minifier tool, verify the following line is at the end of the minified file.
`//# sourceMappingURL=/path/to/file.js.map`

If you don't want an extra comment in your file you can use an HTTP header field on the minified JavaScript file to tell DevTools where to find the source map. This requires configuration or customization of your web server.
`X-SourceMap: /path/to/file.js.map`

```js
{
    version : 3, // Version number that the source map is based off
    file: "out.js", // The file name of the generated code (Your minifed/combined production file)
    sourceRoot : "", // sourceRoot allows you to prepend the sources with a folder structure – this is also a space saving technique
    sources: ["foo.js", "bar.js"], // sources contains all the file names that were combined
    names: ["src", "maps", "are", "fun"], // names contains all variable/method names that appear throughout your code.
    mappings: "AAgBC,SAAQ,CAAEA" //  the mappings property is where the magic happens using Base64 VLQ values. The real space saving is done here.
}
```

- Read More
  - [Debugging JavaScript: Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps)
  - [Introduction to JavaScript Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
  - [Source Map visualization (From author of webpack)](http://sokra.github.io/source-map-visualization/)
