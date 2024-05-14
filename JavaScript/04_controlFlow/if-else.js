//if else statements:
const condition = true
if(condition){
    //code block
}else{
    //code block
}
//To compare 2 values, we have some operators: <, >, <=, >=, ==, ===, !=, !==
 


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allowed to make payment");
}else {
    console.log("Please log in and Enter your payment card");
}

const logInFromGoogle = true
const logInFromEmail = false
if(logInFromGoogle || logInFromEmail){
    console.log("Enter card details");
}else{
    console.log("Log in from Google account or Email!");
}

//If there is a truthy value in if(truthy value), if block will execute.
const userEmail = "suyash@google.com"
if(userEmail){
    console.log("Email verified");
}else{
    console.log("Please enter Email");
}

//Falsy Values: false, 0, -0, BigInt (0n), null, undefined, NaN, ""

//Truthy Values: '0', "false", " ", [], {}, function(){}

//To check if length of array / object is 0 or not: 
const emptyArr = []
if(emptyArr.length === 0){
    console.log("Array is Empty");
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ //Object.keys returns an array containing all key-value pairs
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): This operator is a logical operator that returns its right-hand side operand when its left hand side operand is either null or undefined, and otherwise returns its left-hand side operand.
//If none of the 2 are null/undefined, then left-hand side operand or the first operand is returned.
let val1;
val1 = 5 ?? 10
console.log(val1);
let nullValue = null
val2 = nullValue ?? "default value for A"
console.log(val2);