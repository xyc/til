# Redux learnings

reducers and actions are very tightly coupled.

> Some users do choose to bind them more tightly together, such as the “ducks” file structure, but there is definitely no one-to-one mapping by default, and you should break out of such a paradigm any time you feel you want to handle an action in many reducers.

-> : depend on
container component -> reducers -> actions

## connect()
- https://github.com/reactjs/react-redux/issues/368
- connect.js explained https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e

## FAQ
- http://redux.js.org/docs/FAQ.html
- [Product Pains](https://productpains.com/search?query=redux)

## Real world redux apps
- Dan's tweet summary https://twitter.com/dan_abramov/status/704403290252025858
  - https://www.youtube.com/watch?v=zmN0Vhx2Jgg


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Redux flow explained visually. Looks so pretty. <br>cc <a href="https://twitter.com/dan_abramov">@dan_abramov</a> <br>© <a href="https://twitter.com/vyacheslav_de">@vyacheslav_de</a> <a href="https://t.co/guWhDG4oCc">pic.twitter.com/guWhDG4oCc</a></p>&mdash; Kitze (@thekitze) <a href="https://twitter.com/thekitze/status/727821044308967425">May 4, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<video preload="auto" data-id="content" data-type="content" src="https://pbs.twimg.com/tweet_video/Chm9WszWUAAHX4g.mp4" type="video/mp4" class="visible playing" style="width: 100%; background-color: rgb(0, 0, 0);"></video>
