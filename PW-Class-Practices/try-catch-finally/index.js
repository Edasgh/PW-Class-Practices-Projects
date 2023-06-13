try{
let x=undefined;
console.log(x[0]);
console.log("ending try")
}catch(error){
console.log("Error handling in catch")
console.log(error)
}finally{
    console.log("Finally always gets executed")
}

console.log("end")

/*

on Console

Error handling in catch

TypeError: Cannot read properties of undefined (reading '0')
    at Object.<anonymous> (C:\Users\edas2\Desktop\PW-Class-Practices&Projects\PW-Class-Practices-master\try-catch-finally\withoutTryCatch.js:2:14)    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Finally always gets executed
end
*/