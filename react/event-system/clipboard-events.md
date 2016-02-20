## Clipboard Events

Event names:
```js
onCopy
onCut
onPaste
```

Properties:
```js
DOMDataTransfer clipboardData
```

## [Detect a paste event in a contenteditable](http://stackoverflow.com/questions/8190770/detect-a-paste-event-in-a-contenteditable)

#### method 1
To capture the pasted content however is a little bit more difficult since the onPaste event does not give you access to the pasted content. The usual way to handle this is to do the following from the onPaste event handler:
- create a dummy div and place it outside the window boundaries so it's not visible to visitors
- move the focus to this div
- call a sanitizer method using a setTimeout(sanitize, 0)
and from your sanitizing method:
- find the dummy div and get it's contents
- sanitize the HTML and remove the div
- move the focus back to the original div
- insert the sanitized content in the original div

#### method 2
http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser
