const user ={
    name: "Zaid",
    age:18,
    salary:1000
}

// to fetch the keys-
let keys= Object.keys(user)
console.log(keys)

//to fetch the values/data -
let values=Object.values(user)
console.log(values)

//to fetch both data and keys together-
let entries =Object.entries(user)
console.log(entries)


//seal - allows update but no addition or deletion of the object

Object.seal(user)

user.name= "Ibrahim" //allowed
user.dob="05-12-2003" // not allowed

console.log(user.name);
console.log(user.dob);

