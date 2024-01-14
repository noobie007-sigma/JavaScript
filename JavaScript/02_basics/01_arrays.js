/*
Arrays: 
  i. An array is an object in Javascript, which can hold  multiple values of same/different datatypes under a single variable name. 
  ii. Javascript arrays can hold values of any datatype, and the elements in the same array can be of different datatypes.
  iii. Javascript arrays are resizable and contain a mix of different datatypes. 
  iv. Javascript array-copy operations create shallow copies. All standard built-in operations with any JS objects create shallow copies, only rather than deep copies.
  v. Shallow copy: A shallow copy of an object share the same reference(s) as those of source object. As a result, whether a change is made in source/copy object, it will be reflected in the other one(s) also.
  vi. Deep copy: A deep copy of an object is the one which donot shar same references with the source object. Change made in source/copy object is not reflected in the other one.

*/
  

//Declaration and Initialisation: 2 methods..
let myArr = [1, 2, 3, 4, 5]
let anotherArr = new Array(1, 2, 3, 4, 5)

//Accessing elements: Elements in an array can be accessed by their index, starting from 0. Using indices, they can be modified also, since arrays are mutable.

//Array methods: 
myArr.push(6) //push() adds the value passed at the end of array.
console.log(myArr)
myArr.pop() //pop() simply removes the last element in the array, no need to pass any argument in pop().
console.log(myArr)
//Similarly, unshift() is used to add the passed element at the starting of the array, and shift() is used to remove the first element. Both these methods change the indices of all the elements present in the array.
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes("hello")); //includes() returns a boolean result on basis of whether passed value is present in the array or not.

console.log(myArr.indexOf(9)); //indexOf() returns the index of first occurence of the passed parameter, else returns -1.

console.log(myArr.join()) 
//join() method is used to join all the elements of an array into a string. It takes an optional parameter, which is a string that specifies how elements should be seperated in the string, if no paramter is passed, default separator is comma ,.
console.log(myArr.join(' and '));

// If the array contains null / undefined, they're converted to empty strings.
let myArr2 = [1, 2, 3, null, undefined, 8, 9]
console.log(myArr2.join('-'));

//slice() method returns a shallow copy of a portion of an array into a new array. It doesn't modify the original array.
let newArr = [1, 2, 3, 4, 5, 6]
console.log(newArr.slice(1, 4)); //portion extracted is from start till end - 1, where start and end are the first and second arguments passed in slice().
console.log("Original Array: ", newArr);

//splice() method changes the content of the original array by removing/replacing existing elements and/or adding new elements. It modifies the original array. It returns the array containing removed elements.
//Syntax of splice(): newArr.splice(start, deleteCount, item1, item2, ...)
  //start: Index from which modification should start.
  //deleteCount: Number of elements to be removed from array.
  //ite,1, item2, ...: Elements to be added in the original array.

console.log(newArr.splice(1, 4)) //The second parameter is not end (like in slice(), where modification happens from start till (end - 1)), it is number of elements to be deleted.
console.log("Original array: ", newArr)

const fruits = ["apple", "banana", "orange", "mango", "grapes"]
console.log(fruits.splice(1, 3, "peach", "kiwi")) //splice() returns removed elements' array.
console.log(fruits)// original array is modified with specified elements deleted and new elements added in place of those removed elements.




