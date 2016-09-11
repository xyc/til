/*
if the function was called without the new operator, it will automagically return a new instance.

Constructor ()
new Constructor()
 */
function Constructor() {
  // this resolves to undefined(strict)/global(sloppy) if called with Constructor()
  // this resolves to the newly created object if called with new Constructor()
  if(!(this instanceof Constructor)) {
    return new Constructor()
  }
}
