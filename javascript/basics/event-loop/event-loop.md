- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0): tasks, microtasks, requestAnimationFrame, requestIdleCallback, and where events land. 
  - Compositer thread https://vimeo.com/254947206#t=1470s
  - Multiple event loops https://vimeo.com/254947206#t=2348s
  - tasks, microtasks, queues, schedules https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

- The Main Thread
- The Task Queue
  - `setTimeout`
    - `setTimeout(callback, 0)` more like `setTimeout(callback, 4.7)`
- The Render Step
  - `requestAnimationFrame`
  - Style calculation
  - Layout
  - Painting

- Compositer thread (non-standard now)
  - doesn't get disrupted by event loop
  - Style
  - Paint

- Microtasks
  - Promises
  - MutationObserver
  - processed to completion including any additionally queued items, doesn't yield to render step
  - can run anywhere when JavaScript execution finishes (stack empties), so happens more often than rendering
- User click vs Programatic `click()`
  - User click: can run microtask queued from click handler before next click handler
  - programmatic `click`: javascript stack never empties before click finishes, can't run microtask before that

- Multiple Event Loops
  - Separate event loops for separate tabs (on lastest browsers)
  - Same event loop for
    - same origin iframes (parent window has access to iframe DOM, synchronous communcation needed)
    - parent-child windows (when child has `window.opener` access to parent, unless prevented by `<a rel="noopener">`)