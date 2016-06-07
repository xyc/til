## Selected Node
----------------------------------------------------------

### Selection outline


```js
// Atom outline
<RootNode style={{position: 'relative'}}/>

<ChildNodesContainer>
  <div style={{
    left: 0,
    right: 0,
    height: '2em',
    position: 'absolute',
    // zIndex
  }}>
  </div>
  {/* or use pseudo elements */}
</ChildNodesContainer>

// Chrome outline
<ChildNodesContainer style={{
  position: 'relative'
}}>
  <div style={{
    // so the outline expands the full width
    marginLeft: '-100vmax',
    marginRight: '100vmax',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,    
    position: 'absolute',
    // zIndex
  }}>
  </div>
  {/* or use pseudo elements */}
</ChildNodesContainer>
```


## Click handler
----------------------------------------------------------
click full-width

## Animations
----------------------------------------------------------

### Arrow rotate animation

Shaky arrow
```js
backfaceVisibility: 'hidden',
```

### slidedown animation
- Animation:
  - CSS animate height
    - http://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
    - https://jdsteinbach.com/css/holy-grail-css-animation/
      - max-height (require hard coded max-height value)
      - aria-expanded
      - transform: scaleY(1)

- React examples:
  - https://react.rocks/tag/TreeView
  - https://github.com/alexcurtis/react-treebeard
   - react-velocity https://github.com/alexcurtis/react-treebeard/blob/master/src/components/node.js
  - react-motion

#### max-height

Hard coded max-height
```js
// const childNodes = expanded ? children : undefined

// drawback: needs child nodes to exist already
const childNodes = children

<div style={{
    // child nodes style
    transition: 'all 0.3s ease-in-out',

    opacity: expanded ? 1 : 0,

    // approach 1
    maxHeight: expanded ? 400 : 0,
    overflow: 'hidden',

    // approach 2
    // transformOrigin: 'top',
    // transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
  }}>
  { childNodes }
</div>
```

Using ref to track max-height, should unset max-height when animation ended
```js
<div style={{
    paddingLeft: '12px', // indentation
  }}>

  <div style={{
      // child nodes style
      transition: 'all 0.3s ease-in-out',

      opacity: expanded ? 1 : 0,

      // approach 1
      maxHeight: expanded && this.childNodesContainer ? (this.childNodesContainer.clientHeight) : 0,
      overflow: 'hidden',
    }}>
    <div ref={ref => this.childNodesContainer = ref}>
      { childNodes }
    </div>
  </div>
</div>
```



Using react-motion:
```js
import {Motion, spring} from 'react-motion'

<Motion style={{x: spring(this.state.expanded ? 400 : 0)}}>
  {
    ({x}) =>
      <div style={{
          // transform: `translate3d(${x}px, 0, 0)`,
          maxHeight: x,
          overflow: 'hidden',
        }}>
        { childNodes }
      </div>
  }
</Motion>
```

#### scaleY(1)
Still takes space even when collapsed.
