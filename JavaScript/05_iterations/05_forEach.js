//forEach() method: forEach() method is a built-in method in JS available for arrays. It allows us to iterate over each element of an array and apply a provided callback function to each element.

const coding = ["js", "cpp", "c", "py", "java"]

//in each iteration of for each loop, we not only get the element but also its index and the whole array
coding.forEach((item, index, arr) => {
    console.log('Element is ' + item +  ', index is ' + index + ' of array: ' , arr)
})


const myCoding = [
    {
        name: "Javascript",
        filename: "js"
    },
    {
        name: "Java",
        filename: "java"
    },
    {
        name: "Python",
        filename: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.filename);
})


//Characteristics:
/**
 * No return value: The forEach() method does not return any value implicitly. It is just used for modifying the array in place.
 * If you want that you have to return a value and store it in an array, we can use map, filter or reduce, depending on our use cases.
 */

//forEach() doesn't work on objects, it is specific to arrays only.