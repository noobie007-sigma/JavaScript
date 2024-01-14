/*
In JavaScript, memory management is handled automatically by the runtime environment, and developers don't have direct control over memory allocation and deallocation. However, it's helpful to understand the concepts of stack and heap memory to gain insights into how memory is managed in the background.


Stack Memory:

1) The stack is a region of memory that operates in a last-in, first-out (LIFO) fashion.
2) It is used for storing local variables and function call information.
3) When a function is called, a new stack frame is created to store local variables and other function-related information.
4) When the function completes, its stack frame is popped off the stack.
5) The stack is a fast and limited memory space, and its size is usually set by the runtime environment.

Heap Memory:

1) The heap is a region of memory that is used for dynamic memory allocation.
2) It's a more flexible memory space where objects and variables can be allocated and deallocated at runtime.
3) Objects and variables in the heap are not automatically managed by the runtime. Developers are responsible for managing the memory used by objects in the heap.
4) Memory leaks can occur if objects are not properly deallocated when they are no longer needed.

In JavaScript, primitive data types like numbers and booleans are typically stored in the stack, while objects are stored in the heap. When you create an object in JavaScript, it is allocated memory in the heap, and a reference to that memory location is stored in the stack or other objects.
*/

// Stack memory: Used for primitive types. Variable will get the copy of the value in stack memory.
let x = 10;
let y = true;

// Heap memory: Used for non-primitive types. Variable will get the reference of this complex data.
let obj = {
    email: "email@google.com",
    upiID: "upi@paytm.in"
}
let arr = [1, 2, 3];

/*
In the above code, x and y are stored in the stack, while obj and arr are references to objects stored in the heap.

JavaScript automatically handles memory management through a mechanism called garbage collection. The garbage collector identifies and frees up memory that is no longer being used by the program, preventing memory leaks and ensuring efficient memory usage. Developers do not need to explicitly free memory as they would in languages like C or C++.
*/

let z = x
z  = 20
console.log(x);
console.log(z);

let obj2 = obj;
obj2.email = "email@gmail.com" 
console.log(obj.email);

//In case of primitives, when I changed the variable z, the original variable which was assigned to z, didn't change. This is because in case of primitives, when I assign a variable to another variable, a copy of variable is assigned, not the original one. So changes made via new varaible, happens in the copy of that varaible, not in the original one.

//But in case of complex datatypes, if I assign a complex variable to another one,  the reference of original variable gets passed to the new one. So, if I make change via new variable, the original one will also get changed.