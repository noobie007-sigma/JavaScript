// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Suyash", "chai@gmail.com", "123")

// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())


//behind the scenes:

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

//to add methods to this function object, we can use prototype of this constructor function:

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const user2 = new User("Ayush", "ayush@hotmail.com", "135")
console.log(user2.changeUsername())
console.log(user2.encryptPassword())


//So from here we understood that classes in JS are just a wrapper on top of constructor functions and its prototypes.

//In the newer syntax, whenever a class keyword is called, its constructor function gets called behind the scenes, which initialises the instance od the class.