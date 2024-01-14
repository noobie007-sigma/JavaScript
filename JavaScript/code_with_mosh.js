console.log("Hello World");
console.log(3 + 9);
let name;
console.log(name); //The defalut value of a variable in JS is undefined.
let Name = "Suyash Kumar Jaiswal";
console.log(Name);

//use let to define variables. In case you want that value of a variable should remain same and not change in any case, use const. const variables can't be re-initialised.

const interestRate = 0.3;
// interestRate = 0.9;
console.log(interestRate); // you see and error here, due to re-assignment of const variable.

//Primitive datatypes: strings, numbers, booleans, undefined and null.
let na_me = "Hello"; //String literal
let rollno = 29; //numeric literal
let isApproved = true; // boolean literal
let selectedColor = "red";
// let selectedColor = null;
//if you want to clear the existing value of a variable, use null.

//JS is a dynamically typed language, i.e. datatype of varible is determined at the runtime based on the value they're assigned to, not compile time.

//datatype of both 3 and 3.0 is same i.e. number. Here, we don't have float, int etc. We only have number
let a = 7;
let b = 7.9;
console.log(typeof(a) + " " + typeof(b));

//null and undefined.
//null is a primitive value that defines the intentional absence of value of an object.
//undefined is a primitive datatype that is assigned directly by JS to uninitialised variables.
//undefined is a primimtive value that can be assigned as well as a type.
//undefined is a value that can be assigned as well as a type of a variable.
let firstName = undefined;
console.log(firstName + " " + typeof(firstName));

//In JS, datatypes can be categorised into 2 parts: primitive/value types and reference types.
//Primitives: strings, numbers, undefined, null, boolean  (symbol also, added in ES6).
//Reference types: arrays, objects, functions
//arrays, objects and functions store the reference of the values, which are stored in heap memory.

//Objects: In JS, objects are complex datatype that stores and organises data in form of a collection of key-value pairs. 
let person = {
	name: "Suyash",
	age: 99
};  //person is an object and name and age are its properties. They can be accessed using either dot notation(.) or bracket notation([]). person.name or person['name'].
console.log(person);
console.log(person.name);
person.name = "ABC";
console.log(person['name']);

//Arrays: 
// In JavaScript, an array is a data structure that allows you to store and organize multiple values within a single variable. Arrays are a type of object, but they have special features and methods that make them particularly well-suited for handling ordered lists of data. Each element in an array has an index, starting from zero, which allows for easy access and manipulation of its contents. Unlike other programming languages, an array in JS can store values of multiple datatypes.
let arr = ['ABC', 6, 'orange', 8.9];
console.log(arr);

console.log("Hello world");
console.log(arr[2]);