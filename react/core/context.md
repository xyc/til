# Update on Context Updates
The "context" use case can be split into two scenarios:
## Wormhole (Parent -> Child relationship)
Use cases: Integrated Layout, Menu->Menu Item selection status, etc.
## Broadcast (Semi-global parent with many unknown children)
Use cases: Router, Redux updates, Internationalization Locale, Current User etc.
I was hoping to unify both of these under "effects", but it turns out that effects are mutually exclusive with worm holes once you also have fragments. It easier to treat these separately and I have a solution for wormholes, however, that leaves broadcasts as unsolved.
It is not as simple as just using subscriptions. Because if we trigger side-effects (which subscriptions are) during reconciliation then with incremental they're going to be in a temporarily in an inconsistent state. That is fine as long as no updates are fired during reconciliation. So for example, Redux/Relay broadcasting a bunch of updates in a separate event loop after everything is done is fine. It's a bit slow because you have to manage the subscription list + add each update to a queue of things to update.
However, if the update gets triggered as a consequence of reconciliation that's a problem because the list of subscribers is inconsistent. That's the case when context updates. So to do this properly we would have to queue up the parent context update and wait until some atomic point when both the subtree that provided the context and the subtree that reads it is consistent.
Similarly, if current work arounds are using componentWillMount/componentWillReceiveProps to do both subscription and broadcasting, they'll have trouble.
In user space, you can kind of find special cases and work around the limitations, but I don't really have a solution for generic safe+efficient broadcasts right now. At least not if we also want to support fragments and incremental.
TL;DR: Mutation is hard.

It would be interesting to see if there are race conditions with <Incremental /> when combined with Relay in RN, or if not, why not.

Btw, we do have atomic operations on both ends. componentDidMount/componentDidUpdate. These should be small and ideally avoided since they can't be time sliced, but we still need them.

These do suffer from the same issue of not necessarily being consistent with each other. I.e. a parent isn't guaranteed to have all its child refs resolved in componentDidMount, but that's kind of an edge case that was already possible, since a parent can choose not to render a child. We have ref callbacks for that.

One plausible solution would be to simply traverse the visible tree at a low priority for every actual context update. Might be fine if they're infrequent and likely to affect a lot of things anyway. Higher priority feedback loops like Redux -> visible change needs a different solution though.

## References
- How to safely use React Context https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076#.p3qluyip7
  - Use cases
    - theming
    - localization
    - routing
  - immutable context (bypass SCU)
> Context should be used as if it is received only once by each component.
