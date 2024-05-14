class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;

        //super() is used to call functions on the parent or supercalss within a derived or child class. It is similar to call(). It calls functions on the parent class and holds the result in its own context.
    }



    addCourse(){
            console.log(`A new course was added by ${this.username}`);
        }
    
}
//https://chat.openai.com/c/4c53a8f1-11d1-4dfe-a871-fc989a70cce6

const teacher1 = new Teacher("HiteshChoudhary", "hc@gmail.moc", "123hc")

teacher1.addCourse()

const user1 = new User("hulk")

user1.logMe()
teacher1.logMe()
//Since Teacher class inherited properties from User class, it has access to logMe().

console.log(user1 instanceof User)
console.log(teacher1 instanceof User) //teacer1 is instance of Teacher, and Teacher inerits properties from User, so teacher1 is also an instance of User class
