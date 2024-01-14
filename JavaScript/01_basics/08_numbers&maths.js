const age1 = 100; // a number
const age2 = new Number(100); //an object
//Although JS is dynamically typed, ie. datatype of a variable is determiined at runtime, but we can explicitly define the datatype of a variable, using new constructor and its object name.
console.log(age1);
console.log(age2);

//Number object has comparitively less properties as compared to String object. So to get those properties available for numbers as well, we can convert number to string, then use those properties.

console.log(age1.toString().length)

const decimalNumber = 123.656;
console.log(`${decimalNumber.toFixed(2)}   ${typeof decimalNumber.toFixed(2)}  ${decimalNumber.toFixed()}`); //toFixed() rounds of the number passed to specified number of decimal places. If no argument is passed, it modifies it to nearest integer, 124 in this case. It returns a string, not a number.

//Similarly, we have toPrecision(), here we pass thhe number of sugnificant digits we want to show.
console.log(decimalNumber.toPrecision(2)) //123.656 ko represent karna hai 2 significant digits me...1.23 * 10^2.

//toLocaleString(), it adds commas to the big number for easy readability.
const bigNumber = 1230000000000
console.log(bigNumber.toLocaleString('en-IN'));

//Number object has many properties, just like length in String.
console.table([Number.MAX_SAFE_INTEGER, Number.MAX_VALUE, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.POSITIVE_INFINITY, Number.NaN]);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Math() is an object which has some properties and function.
console.table(["Some Math Properties", Math.E, Math.PI, Math.SQRT1_2, "etc"])

console.log(Math.abs(-12)); //gives the absolute value of number passed, ie positive value.
console.log(Math.round(123.7)); //rounds off the number to nearest integer.
console.log(`${Math.ceil(2.3)} ${Math.floor(2.3)}`) //returns the floor and ceiling value respectively of the  number passed

console.log(`${Math.pow(2, 3)} ${Math.sqrt(4)}`);
console.log(`Minimum value from 1 to 5: ${Math.min(1,2, 3, 4, 5)} and Maximum value from 1 to 5: ${Math.max(1, 2, 3, 4, 5)}`);

console.log(Math.random()); //always gives a random value between 0(inclusive) and 1(exclusive)

//To generate random numbers between min and max value: 

//Math.floor(Math.random() * (max - min + 1) + min)