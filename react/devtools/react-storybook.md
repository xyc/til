## Basic
- [actions](https://github.com/kadirahq/react-storybook/blob/484886ac73ba879908ff3f203f5e829a628e531c/docs/writing_stories.md#creating-actions)

  ```js
  .add('test actions', () => <button onClick={action("clicked")}>test</button>)
  ```

## Examples
- https://www.npmjs.com/package/@kadira/storybook-ui
- https://github.com/ritz078/react-filters (from http://riteshkr.com/)
- https://github.com/airbnb/rheostat

```sh
npm i -D @kadira/storybook
```

```js
// start storybook
"storybook": "start-storybook -p 9001",
// build storybook
"build:storybook": "build-storybook -o storybook-static",
```

## Addons
- Documentation https://github.com/kadirahq/react-storybook-addon-info
