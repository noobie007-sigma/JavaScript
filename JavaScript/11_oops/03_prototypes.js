let myName = "Suyash      "
console.log(myName.length) //This counts the whitespaces also.
//But i want the myName object to have a method named trueLength which returns a string telling that the true length of this string is this much. This method is by default not available in String object, but we can create one.
//In fact, I want that whatever striing object i create, all should have trueLength() method.
//We can add this method to the String object.

String.prototype.trueLength = function(){
    const modifiedStr = this.trim()
    return `True length of ${this} is ${modifiedStr.length}`

    //here, this keyword refers to the current instance. Jis ne call kiya trueLength method ko, ussko refer karega this keyword. 
}

console.log(myName.trueLength())
//https://chat.openai.com/c/61feda31-df77-40fd-be72-6ab24c381107


console.log("ChaiAurCode".trueLength())
//here this keyword in trueLength() refers to the object that called this method, i.e. string "ChaiAurCode"

