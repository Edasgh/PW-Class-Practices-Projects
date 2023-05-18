// node protoTypes.js
let myHeros=["thor","spiderman"];
let dcHeros=["batman" , "superman" , "flash"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderManPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.method1=function(){
    console.log(` hi , I'm present here`)
}

console.log(myHeros.method1())
console.log(heroPower.method1())

Array.prototype.arrMthd=function () {
console.log(`Hi there`)    
}


console.log(myHeros.arrMthd())
// console.log(heroPower.arrMthd()) | Array method dosen't support anything other than an array


//Inheritance

const User={
    name:"username",
    email:"email@gmail.com"
}

const Teacher={
    makeVideos:true
}

const TeachingSupport={
    isAvailable:false
}

const TAAssistant={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport // Old syntax of inheritance of any object
}
// Teacher.__proto__=User; // Old syntax of inheritance of any object
console.log(TAAssistant)
console.log(TAAssistant.isAvailable)

//New syntax of inheritance of any object
Object.setPrototypeOf(User,Teacher) // Teacher will get all the properties of an user

String.prototype.trueLength=function(){
    console.log(`True length of the string is ${this.trim().length}`)
}

"Eshita        ".trueLength(); // 6