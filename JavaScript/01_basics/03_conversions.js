//For type conversion between different datatypes in JS, we have different functions:
//Number(): It converts the arguments passed into number datatype. If the string value passed is not a valid number representation, it return NaN i.e. Not a Number. Also an empty string "" gets converted to 0.

let stringValue = "100abc"
let numberValue = Number(stringValue);
console.log(numberValue);

console.log(Number(undefined)); //NaN  
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("")); //0

// "123abc" => NaN, but if you check the typeof Number("123abc"), it will return 'number' as its datatype. i.e. typeof NaN is number
// undefined => NaN
// "123" => 123
// null => 0
// true => 1
// false => 0


//Boolean(): It explicitly converts the value of passed parameter to Boolean. It converts truthy values (non-empty strings, numbers other than 0, non null object, non-empty array, functions) to true and falsy values (empty string, 0, null, undefined, NaN) to false.
//const result = "Hello" && 42; //result is 42 ; && operator in JS returns the first falsy value or last operand if all operands are truthy.
//const result = "" || 0; // result is 0 ; || operator in JS returns the first truthy value or last operand if none are truthy.

//Truthy Values: Non-empty Strings, numbers other than 0, non null objects, non empty array, functions.
//Falsy Values: "", 0, null, undefined, NaN.


//Automatic Type Conversions:
/*

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

*/




 






