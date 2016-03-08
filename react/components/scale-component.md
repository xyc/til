# Scale component without changing the API

```js
export default ObjectInspector from './object-inspector'
```


```js
// index
export ObjectInspector from './object-inspector/ObjectInspector'
export default Inspector

// usage
import Inspector from 'react-inspector'

<Inspector data={data} />
```
