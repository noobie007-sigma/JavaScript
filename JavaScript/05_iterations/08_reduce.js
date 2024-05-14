


const nums = [1, 2, 3, 4, 5]
const result = nums.reduce(function (accumulator, currentValue) {
    // console.log(`Accumulator: ${accumulator} and currrent value: ${currentValue}`);
    return accumulator + currentValue
}, 0)
// console.log(result);

//In reduce(), we have 2 arguments accumlator and currentValue. In each iteration, reduce() returns sum of accumulator and currentValue (if you want it can return anything, you can customize it). For next iteration, accumulator is assigned the returned value. But for first iteration, we have to initialize it, so we can give any number after callback-function scope to initialize it.

//I want my accumulator to start with 3, so:

const result1 = nums.reduce((accumulator, currentValue) => (accumulator + currentValue), 3)
// console.log(result1);




//Shopping Cart: 

const shoppingCart = [
    {
        course: "js course",
        price: 999
    },
    {
        course: "dsa course",
        price: 3999
    },
    {
        course: "data science course",
        price: 5999
    },
    {
        course: "mobile dev course",
        price: 7999
    }
]

//Add the price of all these courses:

const total = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log("Toatl Price: ", total);