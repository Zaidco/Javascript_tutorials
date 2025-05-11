class Product{ // class formation

    name; //we  can assingn variables without using var,let,const
    price; // also these are properties of class Product
    rating;

    display(){ // function declaration
     console.log("Displaying the behaviours and properties")
    }

}

const x = new Product() 
console.log(x)
x.display()