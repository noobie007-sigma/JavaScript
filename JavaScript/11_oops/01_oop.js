const user = {
    username: "Suyash",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log(`Username: ${username}`) //This throws an error.
        console.log(this.username)
        //there might be a variable named as username in the global context. How will this function know which username variable should i print. So for this we use 'this' keyword to refer to current context.
        //this is because lets say there are 2 arrays, and we execute map() function on one of them. How will it make sure that on which objects was map() function called? For this, we use this keyword that tells about the current context.
    }
}
console.log(user.username);
console.log(user.getUserDetails())


//Lets assume that we had to make 100 such objects, each having same properties and methods. It is quite dumb to actually create 100 such objects. WHat we do is we make use of constructor functions.

//Constructor functions: They are a way to create and initialize objects. They are typically used in conjunction with the 'new' keyword t create a new instances of a particular type of object. A constructor function is a regular javascript function that is used to create a new object and set up the initial state of that object.
 //Syntax: Its syntax is same, but it is conventionally written with an uppercase letter to distinguish it from regular functions.
 //Inside the constructor function, the 'this' keyword refers to the newly created instance of that object.
 //through instanceof operator, we can check if an object is an instance of a particular constructor function or not.


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

const user1 = new User("Suyash", 12, true)
const user2 = new User("Kumar", 11, false)




//https://chat.openai.com/c/84d24274-c784-4d9b-950f-175074f1034e