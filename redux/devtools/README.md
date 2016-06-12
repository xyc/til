## Read more
- how Redux DevTools work https://github.com/facebook/react/issues/4595#issuecomment-129786951
> If you look at how Redux DevTools work, we keep a "lifted state" (initial app state + debug UI + "staged" actions which will be replayed on hot reload + current state index useful for slider monitors), but the app only sees "unlifted state". (Which makes it behave normally as it's unaware that the state is backed by computation.)
