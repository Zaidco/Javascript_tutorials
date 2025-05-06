//objects literals

const jsUser= {
    name: "Md_Ibrahim",
    age: 12,
    email: "ibro@gmail.com",
    isLoggedIn: false,
    noOdaysLoggedIn: ["monday","friday","sunday"]
}
 console.log(jsUser.email) // one way to print an element of the Object
 console.log(jsUser["email"])// best way to print an element of the object
 
console.log(jsUser); // prints the whole object

//update and freeze
jsUser.email="zibro83@google.com" //updating the value
Object.freeze(jsUser)// now no update could take place
jsUser.email="ibrahim@meta.com"

console.log(jsUser);
console.log(jsUser.email);



