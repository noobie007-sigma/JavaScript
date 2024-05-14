
//for...in loops: for...in loop in JS is used to iterate over enumerable properties(property of an object that can be iterated over using loops, built-in methods) of an object. It is mainly designed for iterating over the 'keys' of an object.

//Syntax: for (variable in object){}
//variable: This is a variable that will be assigned the keys of each enumerable property during each iteration.
//object: This is the object over whose enumerable properties the loop is iterating.






const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
    console.log(key + " has value: " + myObject[key]);
}

const programming = ['cpp', 'js', 'py', 'java']
for (const key in programming) {
    console.log(key);
    
}
//So from above example we get that for...in loop gives us the keys of the object unlike the for of loop, which returns the value corresponding to that key.


//Key-Characteristics:
/**
 * Enumerability: It iterates only over enumerable properties. If a property is marked as non-enumerable, it won't be included in iteration.
 * It not only iterates over object's own properties but also over properties inherited from its prototype chain.
 */
