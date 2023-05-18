// node classMethods.js

class Product{
    #rating;
    //the above is the syntax of creating a private data member | You have to access this inside the class using this syntax only

    //private data member => you can't access a private data member directly after returning the class object or explicitly outside the class 
    //You can only access this by passing this particular variable (data member) to a class method only 
    constructor(n,p,r){ 
        console.log("created a custom constructor")
        this.name=n; 
        this.price=p;
        this.#rating=r;
      
    }
   
    static method(){
        console.log("static method from Product class")
    }

    // getters and setters   |   Only use for private data members
    
    // getRating(){
    //     console.log(this.#rating)
    // }

    // setRating(r){
    //     this.#rating=r;
    // if(r<=0) return ;
    // }
    
    get RatingGetter(){
        console.log(this.#rating)
    }

    // /**
    //  * @param {number} r
    //  */


    set RatingSetter(r){
        this.#rating=r;
    if(r<=0) return ;
    }



    display(){
      
        console.log("this refers to "+ this.name , this.price , this.#rating )
        console.log("displaying the current product")
    }
}

const p=new Product("iPhone",200000,5);
console.log(p) // Product { name: 'iPhone', price: 200000 }
//#rating is a private data member
// console.log(p.#rating)   //this '#rating' can't be accessed (private data member) | You can't update it too
p.display(); 
Product.method(); // you can call a static method only after calling the name of the class

// p.setRating(10);
// p.getRating();

p.RatingSetter=12; // If you use 'get' and 'set' keyword in the class , you can access it like a property 
// No need to call a function
p.RatingGetter;
