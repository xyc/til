# DevTools

You can use DevTools to inspect DevTools itself! (This is how react-object-inspector gets developed.)

You can use DevTools to [inspect Chrome apps](chrome://inspect/#apps).

You can use DevTools to inspect many apps to see how they work, like Atom/other electron apps (for treeview, content editing, markdown preview).

## [More on DevTools](https://workflowy.com/s/mYfqvdHZuW)

## [DevTool Command Line API](https://developer.chrome.com/devtools/docs/commandline-api)
In console, type the following:
```js
$_  // value of the most recently evaluated expression

$0  // last 5 DOM elements
$1
$2
$3
$4

copy($0); // copy a string representation to Clipboard

$(selector) // returns Element, alias for document.querySelector()
$$(selector) // returns an array of Element, alias for document.querySelectorAll()

$x(path) // xpath
$x("//p[a]") // all <p> elements that contain <a>

debug(fn) // debug a function

inspect(object) // inspect DOM Elements in Element Panel / heap object in profile panel
inspect(fn)

monitor(fn)   // log in console when fn is called
monitorEvents(object[, events])
monitorEvents(window, "resize")
monitorEvents(window, ["resize", "scroll"])
```

## Chrome DevTools contribution guide
- https://developer.chrome.com/devtools/docs/contributing#contributing-to-devtools-source-code
- https://docs.google.com/document/d/1WNF-KqRSzPLUUfZqQG5AFeU_Ll8TfWYcJasa_XGf7ro/edit
