## HTML Entity
[MDN Page](https://developer.mozilla.org/en-US/docs/Glossary/Entity)

An HTML Entity Parser using string replacer functions:
```js
/**
 * @param {string} text
 * @return {string}
 */
 var entityParser = function(text) {
    const entity = {
        '&quot;': '"',
        '&apos;': '\'',
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/'
    }
    const replacer = (match) => {
        return entity[match];
    }
    return text.replace(/&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;/g, replacer);
};
```