- https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments
- **Document Fragment is much faster when it is used to insert a set of elements in multiple places.** http://stackoverflow.com/questions/14203196/does-using-a-document-fragment-really-improve-performance

var frag = document.createDocumentFragment();
for(var i=20; i--;) frag.appendChild(document.createElement("div"));
