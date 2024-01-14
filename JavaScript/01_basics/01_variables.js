//Variables and Constants: In JS, variables and constants are useed to store data inn our programs. They are essential for manipulation and working with values in our program.

//Variables: A variable is a named conatiner that is used to store and retrieve data values in a program. It is done using let, var and const.

/* Variables declared with var are function-scoped, whule varaibles declared with let and const are block-scoped. This means that variables declared with var are available throughout the function, while the ones declared with let and var are only limited to the scope they're declared in. For this reason,, var usage is not recommended. */

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
 

