let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}

//Agar while ki condition loop shuru hone se pehle se hi false hai, e.g. 2==3, tab while loop chalega hi nahi. Lekin do-while loop atleast 1 baar jarur chalega, kyunki isme condition do ke baad check hoti hai.
let score = 1
do {
    console.log(`Score is ${score}`);
    score = score + 1 
} while (score <= 0)
//Even if condition is false, still it ran for once.

