//Higher Order Function- A fucntio that returns a function or takes a fucntion as their arguments are called HOF 


const powerofTwo=(n)=>{
    return n**2; // (**) means n to the power m
}

function powerofThree(powerofTwo,n){
    return powerofTwo(n)*n;
    
}

console.log(powerofThree(powerofTwo,3));


// returning function-

function SayHello(){
    return()=>{
        console.log("Hello Zaid");
    }
}

let var1 = SayHello()
var1();

// function within function within functiion

const func1=m=>{
    const func2=n=>{
        const func3=p=>{
           return m+n+p
        }
        return func3
    }
    return func2
}

console.log(func1(2)(3)(4))

// complex function call-

const myNum=[2,3,4,5]

const myArr=arr=>{
    let total = 0
    arr.forEach(function(element){
    total+=element
    })
    
    return total
}
    
console.log(myArr(myNum));

