// node callbacks.js
//TASK : Read about callback hell on callbackhell.com
/*
function hof(param , callback){
    // hof is a higher order function
    //callback is the callback function
    console.log(param*param)
   callback(param*param);
}

// hof(10,function callbackFn(){
//     console.log("done with callback function")
// })



function exec(n){
    console.log("square value is " + n)
}

hof(10,exec) 
//the execution of the 'exec' function depends on 'hof' function | When we give the control of execution of a function to another function it's called [inversion of control].

*/




console.log("start")
setTimeout(function fn(){
    console.log("setTimeOut function is asynchronous &","timer done 1")
},3000) 
setTimeout(function f(){
    console.log("timer done 2")
},400) // This callback will execute first after the for loop | cause this function executes in lesser time than the above one

//Asynchronous so doesn't block the next code | These functions are called callback functions
for(let i=0;i<2000000000;i++){} // blocks the code next code untill executes itself
console.log("end")
//All the code uncommented together => OUTPUT
/*

start
end
----for loop----
timer done 2
setTimeOut function is asynchronous & timer done 1
// SetTimeOut will not be executed before for loop's ending
//Because setTimeOut isn't JS native code so, JS ignores this and prioritize native code execution first


*/


