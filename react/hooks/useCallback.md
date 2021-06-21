# useCallback
In some cases you need to maintain a single function instance between renderings:

- A functional component wrapped inside `React.memo()` accepts a function object prop
- When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
- When the function has some internal state, e.g. when the function is debounced or throttled.

## References
- https://dmitripavlutin.com/dont-overuse-react-usecallback/
- https://kentcdodds.com/blog/usememo-and-usecallback