/*

const user = {
  name: "Eshita",
  age: 18,
  email: "edas25564@gmail.com",
};

// destructuring

const { name, age, email } = user;

const myArray = [
   
    {
        _id:1,
        name:"Eshita",
        email:"eshita@google.com"
    },
    {
        _id:2,
        name:"Rama",
        email:"rama@google.com"
    },
    {
        _id:3,
        name:"Soma",
        email:"soma@google.com"
    },



]


myArray.map((obj)=>{
  // destructuring inside object
    const {_id,name,email} = obj

    console.log(_id);
    console.log(name)

})


let pwCourse={
    courseName:"pw1",
    price:1299,


    getCourseDetails: function(){
        console.log(`Course name is ${this.courseName} and the course's price is ${this.price}`)
    }
}

// Prototypal inheritance
Object.prototype.method= function(str){
    console.log(`this is an injected method with ${str} argument`)
}

pwCourse.getCourseDetails();
pwCourse.method("pwCourse");

user.method("User");

myArray.method("myArray"); // Array protoype is an also object | so this will run successfully


let string1= "Eshita Das"
string1.method("string1"); // String protoype is an also object | so this will run successfully



Array.prototype.arrMthd=function(str1){
    console.log(`Objects revision class with ${str1} as an argument`)
}


myArray.arrMthd("myArray") // will run successfully
//user.arrMthd("user") // will throw an error 

//string1.arrMthd("string1") // will throw an error | string is not an array

*/



const user1={
    courseName:"pw1",
    price:1199,

}

const user2={
   email:"pw@google.com"

}

const user3={
    isLoggedIn:true

}

const user4={
    support:"Js Course",
    // __proto__:user1 | method1 of Prototypal inheritance

}

// user4.__proto__=user1 | method2 of Prototypal inheritance

// Prototypal inheritance
Object.getPrototypeOf(user4,user1) // method3 / new method / widely used method of Prototypal inheritance

user4.courseName
console.log(user4.courseName) // undefined
