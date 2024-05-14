const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignents",
    fullTime: true,
    __proto__: TeachingSupport //This __proto__ is used for prototypal inheritance. Through this, TASupport has inherited the properties of TeachingSupport also.
}

Teacher.__proto__ = User
//Through this, Teacher object has inhherited properties of User object also.

//But this syntax of prototypal inheritance is very outdated, there exists better ways- setPrototypeOf(target, source)

Object.setPrototypeOf(TeachingSupport, Teacher)