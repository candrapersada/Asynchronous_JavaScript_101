console.log(0);

/* Delegated to the Web API, and later callbacked (() => console.log(1)) to the Task Queue, this is a "callback-based" web-api call */
setTimeout(() => console.log(1), 0);


/* This is a promise instantiation, it creates a promise object, and the executor function "(resolve, reject) => {setTimeout(() => resolve(2), 0);}" that we have
here is a callback-based web-api call (setTimeout()), pushed to the task queue when done, that afterwards RESOLVES the promise (resolve(2)), this pushes 2 as a promise result, 
then .then() registers a promise fulfill reaction, that pushes the "result => console.log(result)" callback to the microtask queue */

/* Once the main call stack is empty, the event loop de-queues stuff from the microtask queue first, until clear, and then passes to the task queue */
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 0);
})
    .then(result => console.log(result));

console.log(3);

/* So the order should be 0, 3, 1, 2 */