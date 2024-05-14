//call(): ek constructor function ke andar ek aur function hai. Jab constructor function me dusra function call hoga, aur jab poora bhi ho jatega, tab uska execution context bhi khtm ho jayega, call stack se pop out ho jayega. Lekin agar humko uss function ke results chahiye, to kaise kare? Kyunki context to pop out ho gyaa na. Isliye, results ko hold karne ke liye, we have call() method, which take 





function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){

    // SetUsername(username)
    this.email = email
    this.password = password

    //we are directly assigning email and password, but we will call SetUsername() method to set the username into out object.

    SetUsername.call(this, username)
}

const user1 = new createUser("Suyash", "foo@xmail.com", "12121")
console.log(user1)

//here we can see that username didn't get set into the user1 object.

//This is because, when we are passing username to SetUsername(), and when it sets the username using this.username = username, it sets this in its own context, because this inside SetUsername() method refers to current context of that function. So, if we want that username gets set in user1 context, we need to pass that context to it. This is done through call() method.




//https://chat.openai.com/c/2bd2cbb6-da5b-4e03-b522-6fdcd2e529dc 