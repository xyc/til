Example:

```js
{
  "manifest_version": 2, // always 2

  "name": "background-colorpeek",
  "version": "1.0",
  "description": "Get every background-color from the current tab.",

  "browser_action": {
    "default_icon": "icon19.png",
    "default_popup": "popup.html"
  },

  "background": {
    "scripts": ["event.js"],
    "persistent": false
  },

  "content_scripts": [
    {
      "matches": ["http://www.google.com/*"],
      "css": ["mystyles.css"],
      "js": ["jquery.js", "myscript.js"]
    }
  ],

  "permissions": ["activeTab", "<all_urls>"]
}
```

- Match patterns (for permissions) https://developer.chrome.com/extensions/match_patterns
