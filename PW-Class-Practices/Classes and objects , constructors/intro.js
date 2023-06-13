//What are the classes and objects
// classes are a blueprint and objects are real life entities
class Product{
    //syntax of variables in a class
    //properties=>variables=>data members
   /*
   
 //  Parameters will be added to object key even if we don't write this
   
    name;
    price;
    rating; */
    constructor(n,p,r){ // A class can contain only one constructor
        console.log("created a custom constructor")
        this.name=n; // this means 'this object' (Product object)
        this.price=p;
        this.rating=r;
       // return this; // return keyword in constructor only returns one data
        // return 10;//if you're returning any primittive data , the return statement will be avoided

       // return {a:10,b:39} //If you're returning any object(Non-primitive data) then, it will be returned
    }
    //behaviours=>functions=>member functions
    display(){
        //syntax of function in a class
        console.log("this refers to "+ this )
        console.log("displaying the current product")
    }
}

const p=new Product("iPhone",200000,5);//new => creates a new empty plain object
// In the above piece of code , we are calling the constructor function
console.log(p) // Product { name: undefined, price: undefined, rating: undefined }

p.display(); // displaying the current product


