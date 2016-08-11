# `<script>`

Regardless of how the code is included, the `<script>` elements are interpreted in the order in which they appear in the page so long as the defer and async attributes are not present.

<svg width="500" height="65" xmlns="http://www.w3.org/2000/svg"><style>rect, path, line { stroke: #000; stroke-width: 1; } .red { fill: hsl(0,100%,80%); } .green { fill: hsl(120,100%,80%); } .blue { fill: hsl(240,100%,80%); } .grey { fill: hsl(0,0%,80%); }</style><g transform="translate(0 10)"><title>HTML parsing</title><path class="green" d="M.5.5h499v15H.5z"/></g><g transform="translate(0 10)"><title>HTML parsing paused</title><path class="grey" d="M150.5.5h150v15h-150z"/></g><g transform="translate(0 10)"><title>Script download</title><path class="blue" d="M150.5 15.5h100v15h-100z"/></g><g transform="translate(0 10)"><title>Script execution</title><path class="red" d="M250.5 30.5h50v15h-50z"/></g></svg>

#### (When `<script>` is parsed) Parsing of HTML will pause, download and execute the script, then continue parsing HTML.

## `<script async>`
HTML5 introduces the `async` attribute for `<script>` elements.

Similar to defer, async applies only to external scripts and signals the browser to begin downloading the file immediately.
Unlike defer, scripts marked as async are **NOT guaranteed to execute in the order** in which they are specified.

Asynchronous scripts are guaranteed to execute before the page’s `load` event and may execute **before or after** `DOMContentLoaded`.

#### Parsing of HTML can continue when downloading the script. Parsing of HTML will pause to execute the script, then continue parsing HTML.

<svg width="500" height="65" xmlns="http://www.w3.org/2000/svg"><style>rect, path, line { stroke: #000; stroke-width: 1; } .red { fill: hsl(0,100%,80%); } .green { fill: hsl(120,100%,80%); } .blue { fill: hsl(240,100%,80%); } .grey { fill: hsl(0,0%,80%); }</style><g transform="translate(0 10)"><title>HTML parsing</title><path class="green" d="M.5.5h499v15H.5z"/></g><g transform="translate(0 10)"><title>HTML parsing paused</title><path class="grey" d="M250.5.5h50v15h-50z"/></g><g transform="translate(0 10)"><title>Script download</title><path class="blue" d="M150.5 15.5h100v15h-100z"/></g><g transform="translate(0 10)"><title>Script execution</title><path class="red" d="M250.5 30.5h50v15h-50z"/></g></svg>

Use case example: Google Analytics, modular scripts that have no dependency

To support legacy browsers, use `<script defer async>`:
> The defer attribute may be specified even if the async attribute is specified, to cause legacy Web browsers that only support defer (and not async) to fall back to the defer behavior instead of the synchronous blocking behavior that is the default. [[2]]

## `<script defer>`
HTML 4.01 defines the attribute `defer`. The purpose of defer is to indicate that a script won’t be changing the structure of the page as it executes. As such, the script can be run safely after the entire page has been parsed.
The browser should begin download immediately but execution should be deferred.

#### Parsing of HTML can continue when downloading the script. Script will be executed after download completed.

<svg width="500" height="65" xmlns="http://www.w3.org/2000/svg"><style>rect, path, line { stroke: #000; stroke-width: 1; } .red { fill: hsl(0,100%,80%); } .green { fill: hsl(120,100%,80%); } .blue { fill: hsl(240,100%,80%); }</style><g transform="translate(0 10)"><title>HTML parsing</title><path class="green" d="M.5.5h450v15H.5z"/></g><g transform="translate(0 10)"><title>Script download</title><path class="blue" d="M150.5 15.5h100v15h-100z"/></g><g transform="translate(0 10)"><title>Script execution</title><path class="red" d="M450.5 30.5h49v15h-49z"/></g></svg>

[1]: http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html
[2]: https://www.w3.org/TR/html5/scripting-1.html#attr-script-async
