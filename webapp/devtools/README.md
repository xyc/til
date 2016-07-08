## Misc
- Disable JS execution from console http://kspace.in/blog/2013/02/22/disable-javascript-execution-from-console/

Chrome developer tools takes anything which is typed in to console as an input and simply passes it to evaluate function to run it in the host application environment. Before doing so, they create a property `_commandLineAPI` in console object and whole script gets executed in with block as

Now seeing what we have above, it is very easy to say that the only way to stop execution of script code typed in console is to throw an exception before that.

A simplest way would be to save the console object in a function variable and define console property in window object with accessor/mutators (i.e., get/set). In get function, we could simply check if the property attached by chrome developer tool exists and if yes, throw exception (obviously which is not handled by anyone and hence stops execution of further code).
```js
with ((window && window.console && window.console._commandLineAPI) || {}) {
// your script here.
}
```

```html
<script type="'text/javascript'">
(function(){

    var _z = console;
    Object.defineProperty( window, "console", {
	get : function(){
	    if( _z._commandLineAPI ){
		throw "Sorry, Can't exceute scripts!";
            }
	    return _z;
	},
	set : function(val){
	    _z = val;
	}
    });

})();
</script>
```

- bundled (no interaction): `chrome-devtools://devtools/bundled/inspector.html`
- node-inspector https://github.com/node-inspector/node-inspector
- https://github.com/Jam3/devtool
- debugger.html https://github.com/jlongster/debugger.html
  - https://twitter.com/jlongster/status/737831071379783682
- Electron standalone devtools https://kenneth.io/blog/2014/12/28/taking-chrome-devtools-outside-the-browser/
