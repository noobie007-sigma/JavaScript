//for-of loop: It provides a readable way to iterate over iterable objects such as arrays, strings, maps and sets.
//for(variable of iterable){}
/**
 * variable: This is a variable that will be assigned the value of each element in the 'iterable' during each iteration.
 * iterable: This is an object that has an iterable protocol, which includes arrays, strings, maps, sets, and other iterable objects like nodelists and html collections.
 */

//It can iterate over each element of array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

//It can iterate over the characters of a string
const greeting = "Hello World!"
for (const letter of greeting) {
    console.log(letter)
}

//Maps: Map objects are a collection of key-value pairs. And it remembers the original order of insertion of the keys. Each key in a map must be unique, and it can be of any datatype including objects, functions and primitive datatypes. Most importantly, it doesn't contain any duplicate values.

//use map.set() to add entries in a map object.
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')
//Even if I explicitly try to insert a duplicate value, it doesn't print that.
console.log(map);

for (const [key, value] of map) {
    //If you want to get both key and value, simply use any variable name. In this case, you'll get a key-value pair array in each iteration.
    //[key, value] //But if you want one or both, you can destructure the key-value pair array using this syntax.
    console.log(`Key is ${key} and value is ${value}`);

}

//myMap.size property gives the number of key-value pairs in  myMap.
//myMap.has() method checks the existence of specified key in the map.
//myMap.get() method is used to retieve the value associated with key.
//myMap.delete() method removes an entry from the map based on its key.
//myMap.clear() removes all the entries from myMap.

//Maps: https://chat.openai.com/c/03335132-eedc-4bd4-922a-f9ce48e5235f




//for...of on an Object: In JS, for of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, and other iterable objects. However, we can use Object.values() or Object.entries() to iterate over object values or key-value pairs.
const myObject = {
    game1: "NFS",
    game2: "PUBG"
}
// for (const iterator of myObject) {
//        console.log(iterator)    
// }
//Objects in JS are not iterable in general. Therefore, we cannot use for-of to iterate over the properties of an object. Instead, we have to use Object.keys() or Object.entries() on the object to iterate on it using for...of loop
