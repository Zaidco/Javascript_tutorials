// use of aarays within function
//forEach() and map() both are same

const arr =[2,3,4]

arr.forEach(function(element,index,arr){ // all three or even any one can be passed inside function
    console.log(index, element,arr); 
})

//the above loop can also be written with arrow function like -
arr.map((element,index,arr)=>{
    console.log("arrow: ", element,index,arr);
})

//to Upper Case-
const heroes = ["batman","hulk","thunderbolt"]
heroes.forEach((element)=>{
    console.log(element.toUpperCase());
})


//filter - extracts only those values which is required by the user
console.log(heroes); // we will call heroes whose name ends with 'man'

const heroMan= heroes.filter((element)=>{
    return element.endsWith('man');
})

console.log(heroMan);

