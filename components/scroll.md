# scroll
Scroll to bottom of the page:
```js
var scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop = scrollingElement.scrollHeight;
```

```js
function scrollToBottom(id){
   var element = document.getElementById(id);
   element.scrollTop = element.scrollHeight - element.clientHeight;
}
```

```js
function scrollToBottom(id, behavior = 'smooth'){
   var element = document.getElementById(id);
   element.scrollTo({ top: element.scrollHeight, behavior });
}
```

Scroll into view:
```js
element.scrollIntoView();
element.scrollIntoView(false); // bottom
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```

Ref: https://stackoverflow.com/a/33193668

Common use cases: 
- Perform scroll after component rendering in React: https://stackoverflow.com/questions/26556436/react-after-render-code

## Libraries
- https://github.com/janpaepke/ScrollMagic
  - https://github.com/janpaepke/ScrollMagic/wiki/Tutorial-:-Anchor-Navigation
- https://github.com/fisshy/react-scroll
- http://mynameismatthieu.com/WOW/
- https://github.com/michalsnik/aos
