# Node
DOM Level 1 describes an interface called Node that is to be implemented by all node types in the DOM. All node types inherit from Node.

## Node type
The node property ([`Node.nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)) of a DOM node determines how we should render the node.

```js
Node.ELEMENT_NODE // 1
Node.TEXT_NODE // 3
Node.PROCESSING_INSTRUCTION_NODE // 7
Node.COMMENT_NODE // 8
Node.DOCUMENT_NODE // 9
Node.DOCUMENT_TYPE_NODE // 10
Node.DOCUMENT_FRAGMENT_NODE // 11
```

## Walk the tree
```js
node
  node.parentElement
  node.parentNode // always a DOM Element object, or null.
  node.rootNode

  node.previousSibling
  node.nextSibling

  node.childNodes // NodeList, child nodes
  node.firstChild
  node.lastChild

  node.contains( descendant )
  node.hasChildNodes()
  node.appendChild(newNode)
  node.insertBefore(newNode, refNode)

  node.isEqualNode() // equal
  node.isSameNode() // reference same object

parentNode.childElementCount
parentNode.children // live HTMLCollection, child ELEMENT nodes
parentNode.firstElementChild
parentNode.lastElementChild
```
