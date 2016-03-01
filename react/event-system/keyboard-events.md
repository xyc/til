## Keyboard Events

Event names:
```js
onKeyDown
onKeyPress // The keypress event should be raised when the user presses a key on the keyboard. However, not all browsers fire keypress events for certain keys.
onKeyUp
```

#### Differences between onKeyDown and onKeyPress

(In my case I just need to use onKeyDown now.)

> KeyPress, KeyUp and KeyDown are analagous to, respectively, Click, MouseUp, and MouseDown. The *Down* happens first, the *Press* happens second (when text is entered), and the *Up* happens last (when text input is complete).

> In theory, the keydown and keyup events represent keys being pressed or released, while the keypress event represents a character being typed. The implementation of the theory is not same in all browsers.

Properties
```js
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode // http://keycodes.atjayjo.com/
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```
