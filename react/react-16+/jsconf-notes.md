Beyond react-16

computing power/network speed, how do we deliver **best user experience** for everyone?

CPU: creating nodes/re-rendering
IO: data fetching/code splitting

## CPU
"Time Slicing"
- doesn't block the thread while rendering
- feels synchronous if device is fast
- feels responsive if device is slow
- only final rendere dstate is displayed

Git: like rebase (lower priority updates on higher ones)

## IO
```js
const movieDetailFetch = createFetcher(
  fetchMovieDetails
)
movieDetailFetch.fetch()

handleMovieClick = (id) => {
  this.deferSetState({
    showDetail: true
  })
}


<Placeholder
  delayMs={1500}
  fallback={<Spinner size="large"/>}
>
  <MoviePage id={id} />
</Placeholder>

<Img>
</Img>
```

"suspense"
suspense rendering
pause any state update until data is ready
add async data to any component

Git: rebase suspended update

## Aysnc rendering
fast interatoins feel instant
slower interactions feel responsive