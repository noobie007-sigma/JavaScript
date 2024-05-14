//https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25


//Javascipt Execution Context:
/**
 * It means how JS engine runs the code provided by us.
 * It runs it in 2 phases.
 * First thing that occurs is the formation of global execution context, and its value gets referred to 'this'
 * Browser's global execution context is window, and nodejs' is global.
 * Next is Functional execution context.
 * First phase is Memory Creation Phase. Variables etc get memory allocated in this phase.
 * Second is Execution Phase. As the name suggest, execution occurs in this phase.
 * In memory creation phase, all variables are assigned memory and undefined is stored as their value. All function definitions get memory allocated during this phase.
 * In Execution phase, all the variables, get assigned their actual values. Whenever a function is called, a new functional execution context gets created, having a new variable environment and a new execution thread.
 * So the above steps: memory creation phase and execution phase is repeated for this newly created execution context. As many times a function is called, that many times these steps would be repeated.
 * Finally, when function completes its execution, it returns a value to its parent executional context, which is global executional context in general.
 * Most importantly, after function finishes execution, its own exectional context gets deleted.
 */


//Call Stack: 
/**
 * To keep track of all contexts, including global and functional, JS engine uses a call stack.
 * It uses LIFO principle. 
 * When engine starts executing the file, it creates a global context and pushes it onto the stack.
 * Whenever a function is invoked, JS engine creates a function stack for that function and pushes it onto the stack.
 * If this function calls some othe function also, a seperate function execution context is created and pushed onto the stack.
 * Obviously, the latter function will complete its execution first, hence will get popped out first (LIFO).
 * As functions get executed, JS engine automatically removes the context from the call stack.
 */


// https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
