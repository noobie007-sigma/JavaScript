//To combine/merge 2 or more objects

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'c',
    4: 'd'
}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

//Object.assign() takes first argument as the target object (to which other objects are to be assigned), and next n objects as the objects to be asigned to the target object. It returns the modified target object, with all the other passsed objects assigned to it.
//Remember: Properties in the target objects get overwritten by properties in sources, if they have same key!
//Syntax: Object.assign({}, obj1, obj2, ...)

//Using spread operator: 
//const obj3 = {...obj1, ...obj2}

//To get the keys and values of an object: Object.keys(obj_name)
//these keys ans values are returned in an array, we can operate on this array as per our requirement.
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));


//If you want to get each key value pair, you can use entries(). It returns key-value pair as an array, inside array

//Generally, if backend has requested for a value from an object, and that object doesn't have this key, then it is not good. Instead, we can check beforehand if objevct has that property or not using hasOwnProperty(). It returns boolean result.
console.log(obj1.hasOwnProperty('3'));
