#[Stateless Functional Component](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)

```js
// A functional component using an ES2015 (ES6) arrow function:
var Aquarium = (props) => {
  var fish = getFish(props.species);
  return <Tank>{fish}</Tank>;
};

// Or with destructuring and an implicit return, simply:
// const species = props.species
var Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);

// Then use: <Aquarium species="rainbowfish" />
```

 Functional components do not have lifecycle methods, but you can set `.propTypes` and `.defaultProps` as properties on the function.
