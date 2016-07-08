## Generators / Boilerplates
- https://github.com/jhen0409/react-chrome-extension-boilerplate
- http://extensionizr.com/
- https://github.com/yeoman/generator-chrome-extension

## Dev
- `manifest.json`
- Testing: [chrome://extensions/](chrome://extensions/)

## Tutorial
- Architecture https://developer.chrome.com/extensions/overview#arch
- Build Chrome Extension https://robots.thoughtbot.com/how-to-make-a-chrome-extension
- Build Colorpeek https://css-tricks.com/colorpeek-part-2-building-first-chrome-extension/

## Examples
- https://developer.chrome.com/extensions/samples
- https://github.com/sindresorhus/refined-twitter

## Architecture:
  - Use Files:
    - Example: `<img src="images/myimage.png">`
    - `chrome-extension://<extensionID>/<pathToFile>`
      - extensionID might change for unpacked extensions, Use [predefined message](https://developer.chrome.com/extensions/i18n#overview-predefined): `background-image:url('chrome-extension://__MSG_@@extension_id__/background.png');`
      - extension gets permanent extensionID if packed
  - Background pages
  > Many extensions have a background page, an **invisible** page that holds the main logic of the extension.

    - persistent background pages
    - event pages
      > Unless you absolutely need your background page to run all the time, prefer to use an event page.

      ```js
      "background": {
         "scripts": ["eventPage.js"],
         "persistent": false
       },
       ```

  - UI Pages
    - you can use `tabs.create` or `window.open()` to display any other HTML files that are in the extension.

  - Communication between pages
    - To find pages in the extension, use `chrome.extension` methods such kjas `getViews()` and `getBackgroundPage()`.

  - Content Scripts
