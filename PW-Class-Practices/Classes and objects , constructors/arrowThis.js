
// node arrowThis.js

let obj1={
    x:20,
    fun(){
        console.log(this.x)
    }
    // fun:()=>{
    //     console.log(this.x)   
    // }
    // In arrow functions , this is searched as a defined variable not a calling stack
}


let obj2={
    x:40,
    fun(){
      y={
        gun:()=>{
            console.log(this.x)
        }
        //this is defined in fun function so, gun arrow function is able to find it and show the result
      }
      y.gun()
    }
    
}

obj1.fun(); // 20 | normal function output
// undefined | arrow function output

obj2.fun()