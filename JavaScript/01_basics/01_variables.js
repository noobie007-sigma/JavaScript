//Variables and Constants: In JS, variables and constants are used to store data in our programs. They are essential for manipulation and working with values in our program.

//Variables: A variable is a named container that is used to store and retrieve data values in a program. It is done using let, var and const.

/* Variables declared with var are function-scoped, while varaibles declared with let and const are block-scoped. This means that variables declared with var are available throughout the function, while the ones declared with let and const are only limited to the scope they're declared in. For this reason, var usage is not recommended. */

/* Variables declared with let and var can be reassigned but those declared with const cannot be reassigned, it gives "Assignment to a constant variable" error. */


const accountId = 144553;
let accountEmail = "mamtaDidi@www.com.gov.com.in.com";
var accountPassword = "12345";
accountCity = "Vatican City"; //JS provides this flexibility to declare variables without using let/const, although this is not a good practice. 
//JS implicitly declares those varaibles, which are declared without any keywords let, const or var, as global varaibles. This can lead to unintended consequences as global variables are accessible throughout the program and can be modified from any part of our code.

// accountId = 2; This is not valid, you cannot reassign or change a constant.

accountEmail = "skj@03.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity]);
//console.table() prints all the values of the variables passed in it, in a tabular structure.

/* To declare a variable in JS only const and let are used. var usage has been discontinued due to problem of block scope and functional scope.
*/

let accountState;
console.log(accountState); //Default value of a declared variable is undefined.
console.log(names); //If we try to print a undeclared variable, it shows variable is not defined.
 



//Hoisting:

/**
 * 
The difference in behavior between let and var when it comes to referencing variables before their declaration (hoisting) is due to how these two variable declarations (let and var) are handled in JavaScript.

Using var
When you use var to declare a variable, it gets hoisted to the top of its scope during the compilation phase. However, there are key differences in how var and let behave with respect to hoisting:

Hoisting with var:
Variables declared with var are hoisted to the top of their scope.
When you reference a var variable before its declaration, JavaScript initializes it with a value of undefined.
Example:

javascript
Copy code
console.log(a); // undefined
var a = 10;
console.log(a); // 10
In the above example, var a; is hoisted to the top of the scope, so console.log(a); doesn't throw an error; instead, it prints undefined because a is declared but not yet assigned a value.

Using let
let was introduced in ES6 (ECMAScript 2015) and has different hoisting behavior compared to var:

Temporal Dead Zone (TDZ):
Variables declared with let and const are also hoisted to the top of their scope.
However, unlike var, variables declared with let or const remain uninitialized in the "temporal dead zone" (TDZ) until their declaration statement is reached during runtime.
Accessing a let or const variable before its declaration results in a ReferenceError.
Example:

javascript
Copy code
console.log(b); // ReferenceError: b is not defined
let b = 20;
console.log(b); // This line is not reached due to the ReferenceError
In the above example, let b; is hoisted to the top of the scope, but accessing b before its declaration (let b = 20;) leads to a ReferenceError because b is still in the TDZ and has not been initialized.

Key Differences
Hoisting: Both var and let declarations are hoisted, but var variables are initialized with undefined during hoisting, whereas let and const variables remain in the TDZ until their declaration statement is reached.
Scope: var has function-level scope (or global scope if declared outside a function), whereas let and const have block-level scope. This means that let and const variables are scoped to the nearest enclosing block ({ ... }), whereas var variables are scoped to the nearest enclosing function.
In summary, using let leads to a ReferenceError when accessing a variable before its declaration due to the TDZ concept, whereas using var initializes the variable with undefined during hoisting. It's generally recommended to use let or const for variable declarations to benefit from block-level scoping and avoid issues related to hoisting and the TDZ.
 */
