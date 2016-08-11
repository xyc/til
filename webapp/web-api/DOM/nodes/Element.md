# Element

```js
document.getElementById
document.getElementByTagName
document.querySelector
document.querySelectorAll

Element.getBoundingClientRect()
  // - https://github.com/nathancahill/Split.js
  // - popper.js
Element.getClientRects()

window.scrollX
window.scrollY
```

```js
element.innerHTML
element.outerHTML
element.textContent

element.children
```

## Setting styles
```js
htmlElement.style

n.style.font = `14px "Helvetica"`
n.style.cssText = `font: 14px "Helvetica"`
```

## getAttribute/setAttribute
```js
element.getAttribute("class")
n.setAttribute('class', 'fancy-box')
```

## Add class
```js
const addClass = (node, c) => {
  // sanity check
  invariant(node.nodeType === Node.ELEMENT_NODE)
  invariant(typeof c === 'string')

  const className = node.className
  if(!className){
    node.className = c
  }
  node.className = `${className} ${c}`
}

const addClass = (node, newClass) => {
  // sanity check
  invariant(node.nodeType === Node.ELEMENT_NODE)
  invariant(typeof newClass === 'string')

  node.classList.add(newClass)
  // add
  // contains
  // remove
}
```
