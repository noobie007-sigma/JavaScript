const myNewObj = {
    username: "user"
}

console.log(Math.PI) 
Math.PI = 5
console.log(Math.PI) 
//We saw that we cannot overwrite the properties of an object in this direct way

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//Object.getOwnPropertyDescriptor() is a static method that returns an object describinig the configuration of a specific property on a given object. The object returned is mutable but mutating it has no effect on the original property's configuration. It takes 2 arguments: Object name, whose property's description is required, and the property name

//static methods in JS are those methods which are accessible only through class names, not through any of its instances.

console.log(descriptor)
//here we saw that this object's property cannot be overwritten.
//So question arises, can we as developers also make our objects unmutable? Lets find out...

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bani hai")
    }

}
console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

//Object.defineProperty() allows a precise addition or modification of a property on an object.

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`)    
// }
// //

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}
//we saw that name property didn't get looped on, because name property is not enumerable.

//In many real case scenarios, we come across situations where we dont want some properties of an object to be iterated upon, i.e. hum nahi chahte ki vo properties loop me count ho, so we use defineProperty() to set that property's enumerability to false