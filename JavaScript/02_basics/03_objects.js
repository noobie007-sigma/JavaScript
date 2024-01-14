//Objects: Objects are collection of key-value pairs, where each key is a string (or a symbol) and each value can be any datatype, including other objects.
//But generally, we dont include keys inside '' or "", as long as keys are valid identifiers. But if keys are like: 'first name', 'age-group', etc, then we need to include them inside quotes.

//Creation of Objects: 2 ways, using object literal, and by using new keyword and Object constructor.

const mySymbol = Symbol('key1')
const myAnotherSymbol = Symbol('key2')
let person = {
    name: 'John',
    age: 30,
    isStudent: true,
    "age-group": "teen",
    [mySymbol]: "mySymbol having description - 'key1'",
    myAnotherSymbol: "myAnotherSymbol having description - 'key2'"
};

let another_person = new Object();
another_person.name = 'John';
another_person.age = 30;
another_person.isStudent = true

//To access keys in Objects: 2 ways, dot and square brackets. In case you have keys explicitly defined within quotes (keys defined as invalid indentifiers), you can access that key only through [] natation. 

console.log(person.name);
console.log(person["age-group"]);

//Too define a Symbol as a key in objects, we need to define the symbol beforehand, and then put name of symbol inside [], and access it using []. If we write our symbol normally as other keys, it will not be treated as a symbol then. To treat a symbol as a symbol inside an object, then this symbol key has to be enclosed within [], and access it using [].

console.log(person[mySymbol]);
console.log(typeof person["myAnotherSymbol"]); //here we saw that if we dont include symbol name inside [] when declaring it as a key, it will not show ny error, but it will not be treated as a symbol, rather as a string. There is specific syntax for using symols as keys in JS Objects, and it is [].


//If you want that object properties should not change, you can freeze it using Object.freeze(). Pass the object as parameter you want to freeze.

Object.freeze(person)
person.age = 90
console.log(person); //age remained 30, change made didn't propagate after freezing.

//If we want to access object's element in a string, use this keyword.


let JSUser = {

    firstName: "Suyash",
    greeting(){
        console.log(`Hello! Your name is ${this.firstName}`);
    }
}
console.log(JSUser.greeting());