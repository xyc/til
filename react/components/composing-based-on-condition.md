# Composing components based on condition

```js
// method1 (need keys)
render(){
  let children = [(<ComponentA key="a"></ComponentA>)]
  if(condition){
    children.push(<ComponentB key="b" />)
  }

  return (<div>
            {children}
          </div>)
}

// method2 (pro: visualizations of different situations)
render(){
  let children
  if(condition){
    children = [<ComponentA/>, <ComponentB/>]
  }
  else{
    children = (<ComponentA/>)
  }

  return (<div>
            {children}
          </div>)
}

// if-else IIFE (pro: local to the parent component)
render(){
  return (<div>
            <ComponentA/>
            {()=>{
              if(condition){
                return <ComponentB>
              }
              else{
                return undefined
              }
            }()}
          </div>)
}

// ternary operator IIFE
render(){
  return (<div>
            <ComponentA/>
            {(
                () => (condition) ? ComponentB : undefined
              )()}
          </div>)
}
```

## Extract into subcomponent
```js
const Subcomponent = (condition) => condition ? <ComponentA/> : <ComponentB/>
```
