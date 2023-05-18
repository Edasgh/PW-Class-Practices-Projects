//Returning an object via arrow function
//In case of returning an object, wrap the function with parenthesis not curly bracket
/*
const sum= (x,y)=>({sum:x+y,difference:x-y});
console.log(sum(10,4));//Output:{ sum: 12, difference: 4 }
const abc=x=>x*x;
//Parenthesis isn't mandatory if there is only one parameter
console.log(abc(2));//OUTPUT : 16

*/

//Anonymous function : Which functions aren't named but stored in a variable and then declared with the variable name
/*  let x=function(){
    console.log("Anonymous Function")
}
//Anonymous functions can cause harm in case these have some complex logics 
x();
*/
//Immediately invoked functions
//These type of functions are wrapped in a parenthesis and after the parenthesis an empty parenthesis is written (like we do when we call a function)
/*  (function xyz(){
    console.log("Immediately invoked function")
})(); */
//Immediately invoked functions are called on the place it was created, it can't be called in the code and Calling of these type of functions outside the code will throw ReferrenceError
// xyz();

/*OUTPUT
ReferenceError: xyz is not defined
    at Object.<anonymous> (C:\Users\Eshita Das\Desktop\PW Practices\index1.js:20:1)
    at Module._compile (node:internal/modules/cjs/loader:1246:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1300:10)
    at Module.load (node:internal/modules/cjs/loader:1103:32)
    at Module._load (node:internal/modules/cjs/loader:942:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
 */

//ANONYMOUS FUNCTION as an IMMEDIATELY INVOKED FUNCTION
/* (function (x) {
console.log(x*x );    //Anonymous Function expression
})(4); */
//We don't have to store it in a variable this time (in case of immediately invoked functions)
//Immediately invoked functions or Anonymous functions all are function expressions
//This is a type of functional expression/Expression of functions
/*(function execute() {
    console.log("Function expression" +" & "+"Immediately invoked")//Named function expression
})() */

//This is also a type of functional expression/Expression of functions
/* let y=function name() {
    console.log("Function expression"+" & "+"Named function expression")//Named function expression
}
y(); */


//Self Invoking Functions = Immediately Invoked Functions


