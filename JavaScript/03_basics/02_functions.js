//While making a cart code (shopping cart), we need to add variable number of prices to show in the final output. We donot know beforehand how many items will the user add to the cart. So this is the practical use case of variable length arguments. For this we use rest operator.

function calculateCartPrice(...num1){
    let sum = 0
    for(let i = 0; i < num1.length; i++){
        sum += num1[i]
    }
    return sum
}

console.log(calculateCartPrice(2, 3, 4, 5, 6, 7));


//Rest and Spread Operator: Both the operators are denoted by three dots(...), but they are used in different contexts and serve different purposes.
//Spread Operator: Used to spread the elements of an iterable object(array/string) into individual elements. It is used to make shallow copies of arrays, conccatenate arrays, or create copies of objects.
//Rest Operator: It is used to collect the remaining arguments of a function into a singe array. It is typically used in parameter list of a function to capture an arbitrary/variable number of arguments.

//In above case, num1 is actually an array. We can perform operations oon this array.


