/*
//rest operator - "..."
//spread operator- "..." 
depending upon type of situation REST & SPREAD works

suppose at any e-commerce website , a user keeps adding things to cart, so how will the system know that how many products have been added & how the coder must coode? This is solved by using REST and SPREAD 

*/


function buyThings(...num1){ // ... means REST
    return num1
}

console.log(buyThings(200,300,500,600,));// we gave only one parameter but passed 4 values in the argument . This will written every argument in the form of an array, with help of REST
