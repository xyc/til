# Action
`type AsyncAction = any`

Action is
> **Plain Javascript Object** representing payloads of information that send data from app to store, representing an intention to change the state.
>
> Action is the **only** source of information for a store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.

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
