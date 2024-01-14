//Datatypes: Based on how data is stored in memory and how we can access the data. There are 2 ways to retrieve data: call by value and call by reference. On basis of this, datatypes are divided in to 2 - primitive and non-primitive datatypes.

//Primitive datatypes: string, number, undefined, null, Symbol, BigInt, boolean.

//Reference Datatypes: arrays, objects, functions

//Arrays are a special type of Objects in JS. Even functions also. All non-primitive datatypes are objects after all.
let arr = [1, 2, 3, 4]
console.log(typeof arr); //object
console.log(typeof function(){
    let a = 3
}); 
//Though it return function as its type, but actually it is function object.

//https://262.ecma-international.org/5.1/#sec-11.4.3
//Refer this for furthur reference.