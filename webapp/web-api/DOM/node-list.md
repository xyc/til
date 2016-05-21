```js
var div_list = document.querySelectorAll('div'); // returns NodeList
var div_array = Array.prototype.slice.call(div_list); // converts NodeList to Array

var div_list = document.querySelectorAll('div'); // returns NodeList
var div_array = [...div_list]; // converts NodeList to Array

var div_list = document.querySelectorAll('div'); // returns NodeList
var div_array = Array.from(div_list); // converts NodeList to Array
```
