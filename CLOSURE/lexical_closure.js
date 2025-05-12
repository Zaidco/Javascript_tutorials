// lexical closure means that inner function can access outer values but the opposite is not valid
 
let var1=9;

 function one(){
    let var1=8
    console.log(var1);
}

function two(){
    let var1= 7
    console.log(var1);
}
 
function three(){
    console.log(var1); // this will access the outside value which is 9
    
}
    
function outer(){
    function inner1(){
        let var2=11
    }
   // console.log(var2); // this is impossible since outer function cannot acces inner fucntion values , which is ultimately called lexical closure
}
    


one(); 
two();
three();
console.log(var1); // this var1 will acces outside value which is 9


outer();