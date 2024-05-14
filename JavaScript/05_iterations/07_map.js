//map(): In JavaScript, the map() function is a higher-order function that is commonly used for transforming elements in an array. It creates a new array by applying a provided function to each element of the original array. The original array remains unchanged.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//If we want to perform some opeartion on each element and then return that element, we can use map()

const newNums = myNums.map((num) => num + 10)
console.log(newNums)

//we can also use chaining of multiple map() methods, filter() methods, etc: 

const numArr = myNums.map((num) => (num * 10)).map((num) => (num + 1)).filter((num) => (num >= 50))
console.log(numArr);

 