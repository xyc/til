# [Chrome Devtools Protocol](https://chromedevtools.github.io/devtools-protocol/#protocol)

## CLI: Chrome Remote Interface
CLI Tool: https://github.com/cyrus-and/chrome-remote-interface

Start Chrome (macOS):
```sh
open -a Google\ Chrome --args --remote-debugging-port=9222 --user-data-dir=""
```

Usage:
```sh
chrome-remote-interface list
chrome-remote-interface inspect "(<id from list>)"
```

Example commands:
```js
DOM.enable()
const selector = '.myclass'
DOM.getDocument()
  .then(document => return document.root.nodeId)
  .then(nodeId => {
    return DOM.querySelector({ nodeId, selector })
  })
```

## Chrome Extension
`chrome.debugger` API: https://developer.chrome.com/extensions/debugger

## References
- Remote debugging protocol https://developer.chrome.com/devtools/docs/protocol/1.1/index
- Use with Puppeeteer (DevTools without Devtools) https://developers.google.com/web/updates/2018/01/devtools-without-devtools
