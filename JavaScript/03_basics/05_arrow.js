const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${username}, Welcome to website`); //Although this will work, but whenever we are talking about current context, we must use this keyword.
        //When we are inside a method of an object, this refers to the current instance of the object, so it helps to distinguish between local variables and object properties.
        console.log(`${this.username}, Welcome to website!`);
        console.log(this); //Output of this line proves that 'this' tells about the current context (current values).

    }
}


user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

//We got to know that this keyword refers to the current context. In an object, it is understandable that this will refer to properties and methods of that object. But what if we use 'this' in global scope?
console.log(this);
//In Node environment, 'this' in global scope refers to global object, which is empty by default, hence it prints {}. But in Browser, global object is Window, hence it refers to all the methods and properties of Window object in browser.


function chai(){
    let username = "shaktiman"
    console.log(this.username);
}
chai() 
//Here, this.username gives undefined because in Node environment, this is global scope refers to global object, and this object doesn't have any property named username, hence we see undefined as the output.



//Function expression: In function expressions, the function actually doesn't have any name, it is an anonymous function. This function is called using the variable name only.
const chaiFunctionExpression = function(){
    let username = "shaktiman"
    console.log(this.username)
}
// chaiFunctionExpression()


//Arrow Functions: Arrow functions are always anonymous, so they arre used as function expressions and can be aclled using variable name in which arrow function expression has been stored.
const chaiArrowFunction = () => {
    let username = "shaktiman"
    console.log(this.username)
}
chaiArrowFunction() //returns an empty object.


//In JS, the value of 'this' is determined by how a function is called. In regular functions, the value of this is dynamic and depends on how the function is invoked. If the function is a method of an object, 'this' refers to that object. If function is a standalone function, this refer to global object (window object in browser and global object in nodejs) in non'strict mode and undefined in strict mode.

//But arrow function donot have their own this binding, they inherit 'this' value from their enclosing scope at the time of their definition. And in most cases their enclosing scope is global, hence it prints {}.




const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))

//Implicit return in Arrow functions: When the arrow function body has only one statement i.e. the return statement, then no need to use return keyword inside function body {}, instead we can implicitly return it by wrapping the expression to return inside parenthesis ().
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(1, 2, 3))
//Jab parenthesis laga diya tab, return keyword lagane ki jarurat nahi, lekin agar curly brackets use kiye hain, tab return keyword lagana padega.

//Implicitly return an object
const returnObjectImpicitly = () => ({username: "abc", passowrd: "1234"})
console.log(returnObjectImpicitly());
//We have to wrap it around parenthesis to return it implicitly.