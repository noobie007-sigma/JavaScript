//Comparisons: 
/*
1) Equality('==' and '==='): == or loose equality checks the values for equality after performing type         coercion, if necessary. ===, or strict equality checks for equality of values withtout performing type coercion. It checks for both value and type.
"5" == 5 returns true because "5" gets converted to 5, 
while "5" === 5 returns false, as "5" is of type string and 5 is of type number.
2) Not Equality('!=' and '!=='): "2" != 2 return false, while "2" !== 2 returns true   
*/

//Strict Equality (===) compares references when dealing with objects and not just their content. In case of primitives, it checks for values and datatype.

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//This  is because, equality and comparision operators work differently. Comparisons convert both operands to a number which, in this case, null is converted to 0. But in equality check, after type coercion null is not considered to be equal to 0.
//Type coercion and toNumber conversion, both are different.


//Rules for Type Coercion in JS:
/*
 1) Addition:
     i. number + number = number
     ii. string + number or number + string = string
     iii. string + string = string
     iv. boolean + number = number  (boolean value is converted to either 0 or 1)
     v. boolean + string = string (boolean value is converted to either "true" or "false")
     vi. string + object = string (JS attempts to convert object to a string value)
     vii. number + object = number (here also, object is converted to a primitive value, number in this case.)
 2) Subtraction / Multiplication / Division / Modulus:
     The datatype other than number gets converted to number, be it any. Then arithmetic opertion is performed.
     Even if it is string - string, both are converted to number datatype.

 3) Comparisons(<, >, <=, >=):
     i. If only numbers are involved, numeric comparision happens.
     ii. If both operands are strings, lexicographic(dictionary) comparison is perrformed.
        ex- "apple" > "banana" gives false, 
            "hello" < "world" gives true
     iii. If one operand is a string and other is number, then JS attempts to convert string to a number. If string is not a valid representation of number, it is converted to NaN.
        ex- console.log(5 < "apple"); gives false, because "apple" is converted to NaN (number).
 4) Equality(==, ===, !=, !==):
     i. If both operands are same, then no confusions
     ii. If one is string, other is number, string is converted to number.
     iii. If onne operand is an object, and other is a primitive, the object is converted to primitive.
     iv. null and undefined are loosely equal to each other, nut not to any other values.
     
 */


//Incrrement and Decrement Operations: 
/*
  i.  Postix operation: It returns th value, then performs increment operation.
  ii. Prefix operation: It first performs increment operation, then returns the incremented value.

*/

     