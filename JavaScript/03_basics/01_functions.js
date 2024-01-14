//Function
//Function definition
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");

    //This is function definition

}

// If i dont put parenthesis after function name, then it is function reference
sayMyName // This is function reference
sayMyName() //This is function call, function gets executed when we put parenthesis after its name.

console.log(sayMyName); //This is not telling to execute the function, it just returns the reference of the function.
//In javascript, if we dont put parenthesis after a function when calling it, we are actually not invoking/executing the function, we are just referencing the function. Passing refernces arre useful in Callback functions, where we want to pass function as an argument. There we dont put parenthesis, because, if we put parenthsis, then the return value will be passed instead of reference of function.

//Arguments vs Parameters; 
//Arguments are the values which are passed to the function during function call, while Parameters are the variables listed in function declaration. They act as placeholders for the values passed during function call.

function add(num1, num2){ //These are parameters (placeolders)
    console.log(num1 + num2);
}
add(3, null) //These are function arguments

function userLoginMessage(username){
    if(username === undefined){ //if(!username) bhi use kar skte hain. Because "", undefined, null, 0, etc are truthy values. So it will get converted to true and the if block would execute.
        console.log("Please enter a valid username!");
        return
    }
    return `${username} has just logged in!`
}

const message = userLoginMessage()
console.log(message);
//If I dont pass any argument during function call, then undefined is passed actually. 

//Too avoid case of no arguments being passed, we can actually define a defalut value in the function declaration, so that if no value is passed as argument, there is a default value defined already. But if a value is passed then that default value will be overwritten by the argument passed.

function sayHello(name = "ABC XYZ"){
    return `Hello ${name}`
}
console.log(sayHello());


