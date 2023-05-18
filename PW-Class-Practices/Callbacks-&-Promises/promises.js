// node promises.js
function createPromise() {
  return new Promise(function executorCallback(resolve, reject) {
    // your code
    setTimeout(() => {
      console.log("timer doneee");
      resolve(" ok");
    //   reject("rejected")
    }, 3000); //(setTimeOut)=>Asynchronous code
  });
}

console.log("start");
let x = createPromise();
console.log("got a new Promise");
x.then(function fn(value) { // here the value will be  resolved status (value) [will be shown in case of resolve]
  console.log("promise done", value);
}).catch(function fn1(value) { // And here the value will be  rejected status (reason) [will be shown in case of reject]
  console.log("handled", value);
}).finally(function fnc(){
  console.log("finally dosen't depend on either resolve or reject of the promise")  
})
// .then() function executes after the resolving of the asynchronous code
for (let i = 0; i < 1000000000; i++) {
  //some code
}
console.log("end");

/*
 //OUTPUT IF The Promise is rejected

    got a new Promise
    end
    timer doneee
    handled rejected
    
 
 */

/*
    //OUTPUT IF The Promise is resolved

    got a new Promise
    end
    timer doneee
    promise done  ok
    
    
    */
