# useEffect
- `useEffect(() => { ... })`: The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.
- `useEffect(() => { ... }, [prop1, prop2])`
    - Pass a second argument to useEffect that is the array of values that the effect depends on.
    - If you use this optimization, **make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect**. Otherwise, your code will reference stale values from previous renders. 
- `useEffect(() => { ... }, [])` (Risk: stale values): If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array (`[]`) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.**the props and state inside the effect will always have their initial values**. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often.

- https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect