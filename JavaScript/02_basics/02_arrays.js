const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) //push() only adds an element at the end of parent array. pudh() can input any kind of data (element/array/object) and just add it as an element at the end of parent array.
marvel_heros.pop()

//To solve above problem, we can use concat() method to concatinate n arrays together. It returns a new array containing all the merged the arrays. It doesn't modify the original array on which concat method was called. concat() can input n number of arrays, and return a new array containing all those arrays merged.
//So, push(), pop() change the original array, but concat() doesn't modify the original array, it returns a new array.

console.log(marvel_heros.concat(dc_heros));

//Spread operator: It helps in expansion or spreading of iterable elements, such as arrays, object literals and strings. For arrays, it is used to combine 2 or more arrays, and for copying one array into another, this copying is deep copying i.e. the copied array doesn't share same reference to the original one.

const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
const combinedArr = [...arr1, ...arr2]
console.log(combinedArr);

const originalArray = [4, 5, 6]
const copiedArray = [...originalArray]
console.log(originalArray === copiedArray); //false; tells that both these arrays have different references, as === checks for references also in case of objects.

//This spread operator is also used as object spread, string spread, and as function arguments (as varArgs, variable length arguments)


const nestedArr = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]]
//flat() is a method in JS used to faltten nested arrays. It creates a new one-dimensional array, which contains all the elements from the original array.
//Syntax: arr.flat(depth), depth is the level to which you want to flattn your array. If we dont give any arguments, then it flattens the array be 1 level. If we're not sure about depth, we can pass Infinity also. It returns a new array, and doesn't modify the original array.
console.log(nestedArr.flat(Infinity));

//Array.isArray() determines whether the passed value is an array. It returns a boolean result.

//Array.from(): It converts iterable objects, array-like objects, into arrays. It provides as optional mapping function, allowing us to transform the elements during conversion process. Array.from() creates a shallow copy of the array-like object.
const str = "Hello World"
console.log(Array.from(str));

//Array.of() method creates a new array instance with a variable number of arguments, regardless of the number and type of argument. If we have multiple elements and we want them to store in an array, instead of using push(), we can use Array.of(elem1, elem2, ...).