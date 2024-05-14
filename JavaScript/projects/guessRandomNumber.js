//This is a JavaScript game where a user guesses a random number. Total number of chances he has is 100. Score will be (100 - number of chances he/she took)



const prompt = require('prompt-sync')({sigint: true})

let number = Math.floor(Math.random() * 100 + 1)

let guessedCorrectNumber = false
let chances = 0

while(!guessedCorrectNumber){
    const guess = Number(prompt("Guess a number between 1 and 100: "))
    chances = chances + 1    
    

    if(chances > 100){
        console.log("Sorry, You lost the game. Better luck next time!")
    }else if(guess >= 1 && guess <= 100 && guess !== NaN){
                if(guess == number){
                    guessedCorrectNumber = true
                    console.log("Congratulations!!!  You guessed it right!")
                    console.log("Number of chances taken = ", chances)
                    console.log("Your Score: ", (100 - chances))
                    break
                }else{
                    if(guess > number){
                        console.log("Your guess is greater than the actual number")
                        console.log("Try again")
                        console.log("Chances Remaining; ", (100 - chances))
                        continue
                    }else{
                        console.log("Your guess is lesser than the actual number")
                        console.log("Try again")
                        console.log("Chances Remaining:", (100 - chances))
                        continue
                    }
                }
            }else{
                console.log("Please enter a valid number")
                continue
            }
        }




//prompt-sync library is an external library for handling user inputs in a synchronous manner in Node.js. This library is commonly user for simple command-line interactions where you want to prompt the user for input and receive it synchronously.

//The additional, but optional ({sigint: true}) allows the user to interrupt the prompt by pressing Ctrl + C

//Refer to this link to learn more about this: https://chat.openai.com/c/d6b0e152-ee9f-43b9-97d0-b360e3cc08d7