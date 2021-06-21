```js
var handle = window.requestAnimationFrame(callback);
```

If called repeatedly, requestAnimationFrame will aim to paint up to 60 frames per second (i.e. every 16 milliseconds) and will schedule the callback function accordingly. If the total time taken by the code execution, layout and painting steps is longer than 16ms, then the next frame will be delayed until these tasks have completed.

Calculate frame rate
```js
var lastTime = 0;
function loop(time) {
 var delay = time – lastTime;
 var fps = 1000/delay;
 console.log(delay + ‘ ms’ fps);
 updateAnimation();
 requestAnimationFrame(loop);
 lastTime = time;
}
requestAnimationFrame(loop);
```

- [requestAnimationFrame Scheduling For Nerds](https://medium.com/@paul_irish/requestanimationframe-scheduling-for-nerds-9c57f7438ef4)