# sessionStorage

[MDN Page](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

- Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. That page session is valid only for that particular tab.
- A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores.
- **Opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work.**


Use case: session Id