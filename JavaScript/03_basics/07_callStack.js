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
 * 
 */