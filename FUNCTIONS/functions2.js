function userLogin(username){
    if(username===undefined){
        console.log("Please enter a valid username")
         return // if username is undefined , nothing will be retuned
    }
       console.log(`${username} has just logged in`); //else
    
}

userLogin("Zaid")