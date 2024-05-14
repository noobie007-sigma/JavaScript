//static properties:

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createID(){
        return `123`
    }

    static species = "human"
}

const hitesh = new User("hitesh")
// console.log(hitesh.createID())


//there are some properties and methods in a class that should not be accessed by any of its instances. So for this we write static in front of that property or method.

//Static methods and properties are associated with the class itself, rather than with the instances fo the class. This is usefil when dealing with a functionality that is independent of a particular instance.



class Teacher extends User {
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone7", "i@apple.com")
console.log(iphone.createID())
//hence proved, static methods are not accessible to any of its inherited class.

console.log(hitesh.species) //undefined
console.log(User.species)


//Hence we saw that static properties and methods in JS, both are accessible only to the classes, not to any of their instances. If we try to access a static property through an instance, it will log undefined. If a static method is attempted to be accessed through an instance of the corressponding class, it will show an error.

//static properties and methods can only be accessed through classes.


//https://chat.openai.com/c/a104846d-b297-444f-bb90-fad4e6a211b3