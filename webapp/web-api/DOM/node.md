## NodeType
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
Node.ELEMENT_NODE
Node.TEXT_NODE
Node.COMMENT_NODE
Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE

node
  node.parentElement
  node.parentNode // always a DOM Element object, or null.
  node.rootNode

  node.previousSibling
  node.nextSibling

  node.childNodes // NodeList, child nodes
  node.firstChild
  node.lastChild

  node.contains()
  node.hasChildNodes()
  node.appendChild(newNode)
  node.insertBefore(newNode, refNode)

  node.isEqualNode()
  node.isSameNode()

parentNode.childElementCount
parentNode.children // live HTMLCollection, child ELEMENT nodes
parentNode.firstElementChild
parentNode.lastElementChild
