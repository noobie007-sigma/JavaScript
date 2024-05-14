
function username_validity(username) {
    for (const element of username) {
        const asciiValue = element.charCodeAt(0);

        if (!(asciiValue >= 65 && asciiValue <= 122) || (asciiValue >= 91 && asciiValue <= 96)) {
            console.log("Invalid Username!");
            return false
        }
    }
    console.log("Valid Username!")
    return true
}


function password_validity(pwd){
    if(pwd.length < 6){
        console.log("Invalid Password! Minimum characters should be 6")
        return false
    }else{
        return true
    }
}

username_validity("Suyash768")
password_validity("abcde")