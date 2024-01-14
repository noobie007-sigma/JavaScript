 //String interpolation: This is process of concatinating different datatypes. We use backticks here ie ``. We embedd expressions using ${}.
  let name = "ABC"
  let age = 100
  console.log(`Hello, ${name}! Welcome to the world of Web. Your age is ${age}`);

//Declaration of Strings: 
let firstName = "Suyash"
let lastName = new String("Kumar Jaiswal");
//These are 2 ways to declare strings
console.log(`${typeof firstName}, ${typeof lastName}`)

//When we declare a string, it gets stored as an array of individual characters, each having a key (index) value, starting from 0. Each character / value can be accessed using key/index. lastName[1] or lastName.charAt(1), both these ways are used to get the character at a specific position. Also each string object has a length property. Also each object has various methods like: 


console.log(firstName.length)
console.log(lastName.charAt(1)); //gives the character at specified position
console.log(lastName.charCodeAt(1)); //gives the ascii value of character present at specified index.
console.log(lastName.toUpperCase()); //it doesn't change the original string.
console.log(lastName.indexOf('al')); //gives the index of first occurence of the specified character/string.


console.log(lastName.substring(0, 3));
console.log(lastName.slice(-5));
//Both these methods are used to extract a portion of a string. But we can use negative indices with slice(), but not with substring(). 2 arguments need to be passed, start_index and last_index. Portion is extracted from start_index till last_index - 1. If only 1 argument is passed, it starts from there and extracts till the end of string.

const newString = "   hello   ";
console.log(newString.trim()); //removes all the whitespaces from both the ends of the string.

const url = "https:/google.com/mdn%20docs%20javascript"
console.log(url.replace(/%20/g, '-'));
//.replace() replaces only the first occurence of the specified substring by the specified substring. To replace all occurences, either use replaceAll() or use regular expression with a global flag (instead of wrapping substring in '', wrap it inside / /g, ex- replace(/hello/g, "Hi"))

console.log(url.includes("google")) //returns boolean value based on presence or absence of specified substring in the string.

console.log(url.split('%20')); //It splits the string into various substrings based on a separator, and stores it in an array.

