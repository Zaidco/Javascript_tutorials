//ways to add sum of good in an e-commerce website
//1.
const cartBill =[200,300,400]

const sumofCartBill= cartBill.reduce((prev,curr)=> prev + curr ,0)
console.log(sumofCartBill);


//2.
let total=0;
cartBill.forEach((element)=>{
    total+=element
})
console.log(total);


//3.
let totals=0;
for(let i=0;i<cartBill.length;i++){
    totals=totals+cartBill.length; // total+=element
}
console.log(total);







