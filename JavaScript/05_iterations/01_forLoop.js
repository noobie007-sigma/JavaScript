//for loops: A for loop repeats until a specified condition evaluates to false.
/*
 * Syntax: for(initialization; condition; updation){
                 statement
          }
  
 * initiaization expression usually initializes one or more loop counters.
 * condition expression is evaluated, if true, thread moves inside of loop, otherwise it comes out of the loop. (If the condition expression is omitted entirely, the condition is then assumed to be true)
 * update/iterative statement is executed after the thread completes execution of all the loop statements
 */
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}
//Print table of 7: because Thala for a reason :)
for (let i = 1; i <= 10; i++){
    console.log(7 + " * " + i + " = " + 7 * i)
}

//Print table from 1 to 10: 
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i + " * " + j + " = " + i * j);
    }
}

//Traversing through an array: 
const myArray = ["flash", "batman", "shaktiman"]
for(let index = 0; index < myArray.length; index++){
    console.log(myArray[index])
}

//break and continue statements in loops:
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        // break  //break takes the thread out of the current loop
        continue  //continue skips the rest of the code for this iteration and moves to the next iteration.

    }
    console.log(`Value of i is ${index}`)
    
}

//break statement: break statement terminates the innermost enclosing while/do-while/for/switch immediately and trasfers the control to following statement.

//continue statement: continue terminates the current iteration of the innermost enclosing while/do-while/for statement and continues execution of the loop with the next iteration.