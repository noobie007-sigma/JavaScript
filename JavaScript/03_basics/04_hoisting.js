//Hoistng: Variable and function declarations are moved to the top of their containing scope during compilatioon phase. This means that we can use variables and functions before they're declared. 
//But it is important to note that only declarations are hoisted, not initializations or assignments.

//Variable hoisting: 
// console.log(x); //undefined
let x = 6
console.log(x); //6
//In this example, only  declaration gets hoisted, i.e. only let x gets hoisted, not initialization. Hence first console.log(x) prints undefined.
//But after 1st console.log(x), x gets initialised by 6, therefore 2nd console.log(x) prints 6.

//Function Hoisting: Entire function declaration is hoisted to the top. We can call the function before its actual position in the code because declaration has been moved up at the top.

//Hoistng with Function Expressions: 
sayHello();  //Error: Cannot access sayHello() before initialisation
let sayHello = function(){
    console.log("Hello");
}
//Function expressions are not hoisted in the way as functions does. Here, the variable declaration let sayHello gets hoisted but function expression remains where it is.