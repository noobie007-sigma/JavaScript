//prototypal behaviour of javascript:
/**
 * The prototypal behaviour in JS is a fundamental concept that governs how objects inherit properties and methods from other objects. Unlike classical inheritance in languages like Java, C++, JS uses a prototype-based model. */ 

//https://chat.openai.com/c/8a25aea2-7218-4ab6-961f-4d1239608012


function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power = 2
//In JS, functions are first-class objects which means they can have properties just like any other object. power is just a custom property being added to function object, just to sho that we can add properties to a function, which verifies the functions being objects after all.
console.log(multiplyBy5(3)) //prints 15
console.log(multiplyBy5.power) //prints 2
console.log(multiplyBy5.prototype)
//In JS, every function has a prototype property which is initially an empty object. This prototype property is the prototype of the function itself, instead, it is the prototype that will be assigned as the prototype of instances created using this function as a comstructor. We can add properties and methods to the prototype object of the function. And these will be shared among all the instances created using this function as a constructor.

//For ex:
multiplyBy5.prototype.double = function(num){
    return num * 2
}
const result = new multiplyBy5(4)
console.log(result.double(2))
//In this example, double method is added to the multiplyBy5.prototype, and any instance of this function will be able to access this method through prototypes.


//In JS, every object has a prototype property that is either null, or refers to another object. This prototype property is used for delegation, which is a fundamental mechanism for sharing properties and behaviors between objects.
//https://chat.openai.com/c/e7b5dd21-701e-41ae-80af-31a17fa7fe86




function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score = this.score + 1
}
createUser.prototype.printMe = function(){
    console.log(`You are ${this.username} and your score is ${this.score}`)
}

const suyash = new createUser("Suyash", 100)
const lolo = new createUser("Lolo", 
205)

suyash.printMe() //to access the prototypes, we dont need to explicitly write objectname.prototype.property, we can simply access its prototypes through objectname.property



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/