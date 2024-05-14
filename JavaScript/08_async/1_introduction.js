// Asyynchronous Javascript is a programming paradigm that allows us to execute tasks concurrently without blocking  the execution of the main thread. Tasks like fetching data from servers, handling user inputs and performing time consuming operationns need to be performed efficiently for smooth experience.

console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
console.log(3)

//setTimeout function with a delay of 0 milliseconds doesn't mean the callback will be executed immediately. Instead, it means that the callback will be pushed to the event queue, and it will be picked up and executed by the event loop after the current synchronous code has finished running.

//After the synchronous part of the code has completed, the event loop picks up the callback from the event queue and executes it. Thats why we see output as 1 3 2, and not 1 2 3.

//Events like user interactions(click, hover, etc), netword requests, and other asynchronous operations get added to the event queue whenever they accur. Event loop continously checks if the callstack is empty. If it is empty, it takes the first task/event from the event queue and pushes it to the top of callstack for execution.
//https://chat.openai.com/c/69898ddd-cdff-4d93-bf61-669346790aad