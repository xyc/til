[Browser events: bubbling, capturing, and delegation](http://info.meteor.com/blog/browser-events-bubbling-capturing-and-delegation)

- Event objects have a property `event.target`, which is where the event actually occurred. In the example here, that's always the SPAN.
- The property `event.currentTarget` says where the event is currently being handled, and it would range between the BODY, P, A, and SPAN.

> Event delegation is not a browser feature, but a popular technique built into libraries like jQuery

 So, taking advantage of bubbling, you bind a single event handler to the BODY, and from this handler you look at event.target to see if an A was clicked, and if so, which one. Be careful, though, because event.target may be the SPAN! You need to not just check if the event's target is an A tag, but also walk up the DOM tree in a simple simulation of bubbling.

 This is event delegation. The BODY element is the delegate that handles events on behalf of the A tags. Conceptually, we'd like to think of the event handler as being on the A tags, so we create that illusion as much as we can. To that end, the final step in event delegation (at least in jQuery and Meteor) is to set event.currentTarget to the A tag. Further code that handles the event then sees an A tag as currentTarget and a SPAN tag as target. The BODY element is not really important, so it is nowhere to be found.

 In summary, the steps of event delegation are:

 Add an event listener on some element enclosing all the elements where you want to simulate event handling (BODY)
 In the handler, simulate bubbling and look for matching elements (all A tags)
 When you find a matching element, set event.currentTarget to it and call subsequent handling code


Traditional non-bubbling events fall into the following categories:

- change/submit/reset - These form events don't bubble in IE 6/7/8, but they do in all other browsers, so jQuery makes them bubble in all browsers (using hacks tailored to these events).
- focus/blur - These events don't bubble, ever. Since basically all other UI events do, why don't these? Apparently, it's because the browser window can also be sent focus/blur events. As a consequence of not using different names for these events, and the fact that the window is in the bubbling chain, focus/blur events were made non-bubbling. OK, now comes the cheating/squinting part. With this backstory in mind, jQuery defines bubbling versions of focus/blur under new names: focusin and focusout (implemented using some hacks). It then treats focus and blur, when you go to bind them, as aliases for focusin and focusout. If you say to bind "blur," it binds "focusout," and it even delivers the event as "focusout." Developers are encouraged to simply use "focusout" rather than "blur" to avoid any confusion about what's happening.
- load/error/resize/readystatechange/... - Other events that don't bubble are fired on the window or other non-DOM objects like XHRs, so delegation isn't really relevant. Image tags have a "load" event in some browsers, but it's not reliable enough to be useful.
