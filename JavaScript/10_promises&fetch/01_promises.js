//Callback Hell: Callback hell also known as the pyramid of doom of callback spaghetti is a term used in JS programming to descirbe a situation where code that heavily relieds on asynchronous callbacks, becomes nested and defficut to read and maintain. This makes it challenging to understand and manage the code. So, to overcome this problem of callback hell, Promised were introduced in ES6.

//https://chat.openai.com/c/02006af8-71ce-498c-a892-6efba2fe0696




//This is how you create a promise. Promise object takes a callback function also known as executor function, which has 2 arguments resolve and reject
const promise1 = new Promise(function(resolve, reject) {
    //Do an async task (DB calls, cryptography tasks, network calls)
    setTimeout(function() {
        console.log("Async task is complete!")
        resolve()
    }, 1000)
})

//the resolve parameter in executor function passed to promise object has direct relation with .then() function

//The then method is used to handle the resolved state of the promise.It takes a callback function as its argument, which will be executed when the promise is resolved. 
promise1.then(() => {
    console.log("Promise consumed")
    //To consume a promise you have to actually run the resolve function in the promise.
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        const isOperationSuccessful = Math.random() > 0.5

        if(isOperationSuccessful){
            const result = "Operation completed successfully!"
            resolve(result)
            //Whatever result you get after completion of async task, you can pass that result/value to the callback function of then() function 
        }else{
            //If operation fails, call reject with an error
            const error = new Error("Operation failed!")
            reject(error)
            //This error object is used to get more information about the error such as stack trace. Btw, creating a new Error object is not necessary.
        }
    }, 1000);
}).then((value) => {
    //This callback function is executed when the promise is resolved
    console.log("Success: ", value) //value parameter has value, which is being passed in resolve() function
}).catch((error) => {
    //This callback is executed when the promise is rejected
    console.log("Error: ", error) //error has value which has been passed to reject function
})
//resolve and reject functions are used within the executor function of a promise to indicate the outcome of an asynchronous operation. If the operation is successful, resolve() function is executed, otherwise reject function is executed. The then() method is used to handle the fulfillment(success) of the promise, and catch() method is used to handle the rejection(error) of the promise


const promise3 = new Promise((resolve, reject) => {
    const error = false
    if(!error){
        resolve({username: "Suyash", age: 21})
    }else{
        reject("ERROR! Please try again.")
    }
})
promise2.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



//Through promise3 we are learning that we can form a chain of then(), catch() methods. And when we return some value from then()/catch(), it is returned to the next subsequent then()/catch()
//finally() method runs no matter the promise got resolved or rejected.

//Intead of handling promises with .then(), .catch(), we can also use async await format.

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: 123})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromise4(){
    try {
        const response = await promise4
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise4() //when this asyc function is executed, it returns a promise object. This promise may be resolved or rejected. async await only handles the then() part, i.e. the resolve() part. To handle the reject() part, we can use try catch syntax in our asynchronous function.

//The await keyword pauses the execution of this async function until the promise is resolved, and then it procedes with the resolved value. And if a promise is rejected, the program control jumps to the catch block. Remember that await keyword doesn't block the main thread, other synchronous tasks run concurrently.


//https://chat.openai.com/c/669bdc5f-8566-4d0e-9b65-0c44bd30e678

async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}



















































//Promises in JavaScript: 
//https://chat.openai.com/c/c756a098-57a0-4b80-ba9a-3ed8f0a3ca82
/**
 * Promises are a mechanism for handling asynchronous operations. The provide a cleaner and more structured way to work with asynchronous code compared to the traditional callback based approaches. Promises were introduced in ES6 to address callback hell problem and make asynchronous code more readable and maintainable.
  
 
 * Promise Objetct: A promise is an object that represents the eventual completion or failure of an asynchronoous operation and its resulting value.

 It has 3 possible states:
 - Pending: The initial state; the promise is neither fulfilled nor rejected.
 - Fulfilled: The operation has completed successfully, and the promise has a resulting value.
 - Rejected: The operation has failed, and the promise has a reason for the failure.


 * Creating a Promise:
   - A promise can be created using a promise constructor, which takes a single argument, a function called executor.
   - The executor function takes 2 parameters: resolve and reject. These are functions provided by promise implementation.
   - Inside the exexutor function, we perform the asynchronous operation and call resolve(value) when its successful or reject(value) when it fails.



 * Promise Methods: Promise have several methods to interact with their states and values.
   - then(onFulfilled, onRejected): Attatches callbacks or the fulillment or rejection of the promise.
   - catch(onRejected): Attatches a callback for the rejection of the promise
   -finally(onFinally): Attatches a ccallback that is executed regardless of the promise's fulfillment or rejection.
 */






//async and await keywords were introduced in ES8. They provide a more straightforward and synchronous-like syntax for working with promises.

/*
* async function(): The async keyword is used to define asynchronous functions. An asychronous function always returns a promise.

* await operator: The await keyword is used inside an async function to pause execution and wait for the resolution of a promise. It can only be used inside an async function. 

*/




