//Arrow Functions
/* another method to declare functions
 Syntax-

let/const functionname= (parameters)=> return statement;

*/

//1. Single parameter and single return statement -
 const sum1 =(x)=> x+x;

 //2. Double parameter and return statement-
 const exp1 =(num1,num2)=>{
    return num1*num2,num1-num2;
 }

 //3. Another way of how declaring arrow functions by declaring an object
 const exp2 = (num1,num2)=>({sum: num1+num2, difference: num1-num2})

 console.log(sum1(3));
 console.log(exp1(3,4));
 console.log(exp2(7,4));
 

 
 