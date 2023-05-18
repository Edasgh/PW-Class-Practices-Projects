// node async-await.js

function createPromise() {
  return new Promise(function executorCallback(resolve, reject) {
    // your code
    setTimeout(() => {
      console.log("timer doneee");
      resolve(10);
        // reject("rejected")
    }, 3000); //(setTimeOut)=>Asynchronous code
  });
}


async function consume() {
  try {
    console.log("inside function");
    const res = await createPromise();
    const res2 = await createPromise();
    // Since we wrote 'await' , no need to bind this Promise with .then()
    //OR, with  .then().catch().finally()
    console.log("response is ", res);
  } catch (error) {
    console.log("handled error =>"+error);
  }
}
//If you write the 'async' keyword before a function , everything that function returns becomes a 'Promise'
console.log("start");
consume();
console.log("end");

/*

// OUTPUT in case of resolve [createPromise()]
start
inside function
end
timer doneee
timer doneee
response is  10

// In case of  async functions , code executes like JS thread (one-by-one| line-by-line).When it sees an await statement for response , it comes out of the async function and executes the next code and goes back to the async function when the promise is fulfilled


//OUTPUT in case of reject [createpromise()]
start
inside function
end
timer doneee
handled error => rejected

*/

// const consume2 = async () => {
//   return 22;
// };
// console.log(consume2()); // Promise { 22 }
//Async function is written like this in case of arrow functions