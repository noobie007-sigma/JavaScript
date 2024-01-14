//In Javascript, the global scope refers too the outermost scope where variables and functions are accessible fro any part of the code. However, behaviour of global scope varies according to the environment in which JS is running.

/*
Global Scope in Node.js Environment:
   In a Node.js environment:

   1) Node.js Module System:

In Node.js, each file is treated as a separate module. Variables and functions declared at the top level in a module are local to that module and do not pollute the global scope of other modules.

   2) Global Object in Node.js:

In Node.js, the global object is called global. Variables and functions declared without the var, let, or const keyword are implicitly added to the global object.
However, this behavior can be different from the browser, where variables declared without var, let, or const are automatically added to the window object.
   3) Global Variables:

Variables declared without var, let, or const in Node.js are local to the module, not truly global across all modules.
 */
/*
Global Scope in Browser (Windows) Environment:
   In a browser environment (like on Windows):

   1) Window Object:

In browsers, the global object is the window object. Variables and functions declared without var, let, or const become properties of the window object.
For example, if you declare a variable x without using var, let, or const, it becomes window.x.
   2) Global Variables:

Variables declared without var, let, or const in the global scope (outside of any function or block) are truly global and can be accessed from any script running on the same page.
   3) Scope Across Scripts:

In a browser, variables declared in one script file can be accessed by other script files if they are included in the same HTML document.
*/

// Node.js module scope
const localVar = 'I am local to this module';
global.globalVar = 'I am attached to the global object in Node.js';

console.log(localVar);    // Accessible
console.log(globalVar);   // Accessible

// In another module, localVar is not accessible
// globalVar is accessible using global.globalVar


/*<!-- HTML file with two script tags -->
<script>
  // Global scope in the first script
  var globalVar = 'I am global in the browser';
</script>

<script>
  // Access globalVar from the first script
  console.log(globalVar); // Accessible
</script>
*/


function one(){
    const username = "hitesh"

    function two(){
        const website = "YouTube"
        console.log(username); //username is accessible here
    }
    console.log(website); //But website is not accessible here
    two()
}
one()

