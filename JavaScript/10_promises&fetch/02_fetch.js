// https://chat.openai.com/c/dfd38eed-1dfa-440e-8480-1107b50ad1ed

//Fetch function in javascript is used to make http requests and is a part of fetch api. 

//When a fetch is called, it returns a promise. Depending on whether promise gets resolved or rejected, then() and catch methods are executed.


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))


//The fetch() method starts the process of fetching a resource from the network, returing a promise which is fulfilled once the response is available. A fetch() promise only rejects when a network error is encountered(which is usually when ther's a permission issue or similar). A fetch() promise doesn't reject on HTTP errors(404, etc). Instead, a then() handler must check the Response.ok and/or Respose.status properties.

//fetch() is baically an asychronous web api, which returns the data in the form of promises. So whenever a promise gets completed, it gets logged in microtask queue. Microtask queue is a special queue, different from normal callback queue in which complete async function wait to be picked up by the event loop to the top of call stack. It is a special queue only for fetch(), which is fast, and can be termed as priority queue.

//This microtask queue has a higher priority that the regular task queue, which means that the callbacks in the microtask queue will be executed before the execution ones in the task queue. This important for maintaining the order of execution and ensuring that promises are resolved consistently.

//the callbacks within the .then() and .catch() methods will be scheduled in the microtask queue after the fetch promise is resolved.

//When the main thread is idle and not busy with synchronous tasks, it will immediately execute the microtask before moving on to anything else. The event loop first checks the microtask queue and executes all callbacks in it, then it starts checking the regular callback queue.