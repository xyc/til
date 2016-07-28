## Action creator
`type ActionCreator = (...args: any) => Action | AsyncAction`

```js
/** The action file contains definition of action types and action creators. */

/* Action type */
export const CREATE_NODE = 'CREATE_NODE'

/** Action creator */
export function createNode(nodeId, parent, prevSibling){
  return {
    type: CREATE_NODE,
    nodeId,
    parent,
    prevSibling
  }
}
```
