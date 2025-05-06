//ways to reperesnt an array
const myArr= [1,2,3,true,"Zaid"]
// console.log(myArr)

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2)

myArr2.push(10) //adds the number at the end
console.log(myArr2);

myArr2.pop(1) // deletes a number from the end
console.log(myArr2);

myArr2.unshift(9) //adds a number at the start
console.log(myArr2);

myArr2.shift() //deletes a number from the start
console.log(myArr2);

const newArr = myArr2.join() // changes array into strings
console.log(newArr);
console.log(typeof newArr);

console.log(myArr.indexOf(3)); // checks the index of any element
console.log(myArr.includes(2));//checks if the element is present in the array or not

//concatenation (MIXING or ATTACHING)
const newArr1=["Spiderman","Thor"]
const newArr2=["Batman","Superman"]

const newArr1_2= newArr1.concat(newArr2) // way to concat
console.log(newArr1_2);









