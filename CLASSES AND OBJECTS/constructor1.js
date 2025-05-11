class Product {
    name;  // Class property declaration (no var/let/const needed inside class)
    price;
    rating;

    #color; // abstract used. "#" is used to declare static props

    constructor(n, p, r,c) { // Custom constructor in JavaScript
        // 'this' refers to the current instance of the class.
        // It is used to assign values to the properties of that specific object.
        this.name = n;     
        this.price = p;
        this.rating = r;

        this.#color=c;// abstract , which means public wont be able to see/acknowledge it
    }

    static custom(){ // this is how we declare a static method
        console.log("Calling a static method");
    }

    
    display() { // Method declaration
        console.log("this is: ",this);
        console.log("Displaying the function");
    }
        
}

const x= new Product("iphone",100000,5,"white");
console.log(x);
x.display()

Product.custom(); // static method is called wth of classname.methodname not variable.method






