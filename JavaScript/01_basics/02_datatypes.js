 "use strict"; // by writing this at the top of code, all the JS code will be treated as per the newer version of JS.

// alert("Hello!") //alert statement can be used only on the browser, either in HTML file or in developer console. 
//alert statement is not a part of JS, it is provided by the browser's environment. Features related to browser's DOM or user interface are not available in nodejs environment.


//Original JS documentation: tc39.es

//Datatypes: JS is a dynamically typed language, so the datatype of the variable is determined at runtime.
let name = "ABC" //String
let age = 100 //number
let weight = 100.98 //number
let isLoggedIn = true //boolean
let userAddress //undefined
let symbolExample = Symbol('unique') //Symbol
let objectExample = { name: "XYZ"} //object
let nullExample = null; //null

//null: It is a primitive datatype that represents intentional absence of a value of the variable. It is used to indicate that this variable or object property doesn't currently have a value.
console.log(typeof(nullExample)); //Although null is a primitive datatype, but typeof operator on null returns 'object'. This is a historical mistake in JS.

console.log(null == undefined); //(true): '==' checks only the value
console.log(null === undefined); //(false): '===' checks both value and type
//Though both null and undefined represent absence of value of a variable, they're distinct in terms of their types. null is a primitive value with a typeof 'object' (which is a mistake) and undefined is a primitive value with a typeof 'undefined'.


//undefined: When a variable is declared but not initialized or when a function doesn't return a value, then the value of variable or the return value is undefined.


//Symbol: Used for uniqueness....
const id = Symbol('123') //Although it is not requird to give description to a Symbol, but if you give, it must be a String ie enclosed within quotes.
//Primary purpose of description in a symbol is for identification and debugging purposes, it doesn't affect the uniqueness of Symbol, even if we give same descriptioin to more tha 1 Symbols. Each Symbol returns a unique symbol-alue which makes it unique.
const anotherId = Symbol('123')
console.log(id === anotherId);



//These are 7 primitive datatypes

//Non-primitive / Reference datatypes: Arrays, Objects, Functions.
