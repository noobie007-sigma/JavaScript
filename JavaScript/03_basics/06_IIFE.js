//Immediately Invoked Function Expressions (IIFE):
 //To avoid pollution from globa; scope, we use IIFE
 //Syntax: (function definition)()
 //We have to explicitly end the IIFE by putting ; after IIFE
 //If we have to pass some parameters to IIFE, for this,, syntax is:
    //    (parameter1, parameter2, ..)(argument1, argument2, ...)

//Named IIFE, Simple IIFE


//AN IIFE is a Javascript function that runs as soon as it is defined. 

// (function (){
//     //
// })();

// (() => {
//     //
// })();

// (async () => {
//     //
// })();

//It is a design pattern which is aslo known as a Self Executing Anonymous Function. It contains 2 major parts:
/**
 * First is the anonymous function with lexical scope enclosed within the grouping operator (). This prevents accessing variables within IIFE idiom as well as polluting the global scope.
 * Second part creates IIFE (), through which JS engine will directly interpret the function.
 * The parenthesis at the end is necessary to trigger the immediate invocation.
 * Also, putting semicolon ; is necessary if you want to use 2 IIFEs one after other.
 * The code inside the function is isolated from the outer scope. It can declare variables without affecting the global scope.
 */

//If we want to do some task, lets say connect to database when the user logs in. We dont need to connect to the database again. So such functions which are needed just once,can be declared as an IIFE.

(function chai(){
    //This is a named IIFE
    console.log("This is Immediately Invoked Function Expression");
    console.log("DataBase Connected!");
})();
//If you want to write 2 IIFE one after other, put ; after end of first one, otherwise it will show error.
((username) => {
    //This is an unnamed IIFE
    console.log(`${username} is logged in!`)
})("abc123")