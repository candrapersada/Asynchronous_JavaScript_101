console.log(0);

/* This is delegated to the Web API, so the callback "() => console.log(1)" is pushed to the Task Queue when the runtime (Browser or Node.js) 
handles the call (here after 0ms are elapsed), and then the event loop waits for the call stack to be empty to de-queue it */
setTimeout(() => console.log(1), 0);

setTimeout(() => console.log(2), 0);

/* Synchronous tasks, pushed normally to the call stack */
console.log(3);
console.log(4);
console.log(5);

/* Order should be: 0, 3, 4, 5, 1, 2 */