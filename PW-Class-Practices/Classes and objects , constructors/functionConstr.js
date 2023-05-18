//node functionConstr.js

/*
const Product=function(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
}

const p=new Product("macbook",1500000,5)
console.log(p) // Product { name: 'macbook', price: 1500000, rating: 5 }

*/

/*
const Product=(n,p,r)=>{
    this.name=n;
    this.price=p;
    this.rating=r;
}

const p=new Product("macbook",1500000,5)
console.log(p) // TypeError: Product is not a constructor
//The theory of this keyword pointing to calling context isn't applicable with arrow functions
*/


/*
function ProductClass(n,p,r) {
    this.name=n;
    this.price=p;
    this.rating=r;
    //this function will also obey all the rules of a class
}

const p=new ProductClass("iPhone",150000,4.4)
console.log(p) // ProductClass { name: 'iPhone', price: 150000, rating: 4.4 }
*/

/*

- 1. this keyword in js is diff. than in other languages
 - 2. this keyword refers to the context where we called

 // IN THE FUNCTION CONSTRUCTOR ALSO--
 1. if you return primitive it's ignored and we return the object referred by this
 2. if you return a custom obj then , the custom obj will be returned 
 3. if you don't return anything then , the obj referred by this is returned

*/



