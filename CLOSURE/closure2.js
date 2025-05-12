//closure-
// nested functions and their calling property-

let var0=0;

function f1(){
    let var1=1
    console.log(var1);
    //console.log(var2); this is impossible
    
     function f2(){
      let var2=2;
      console.log(var2,var1,var0);
      //console.log(var3);  this is impossible
      

      function f3(){
        let var3=3;
        console.log(var3,var2,var1,var0);
      }
      f3()
    }
  f2()     
}

f1()