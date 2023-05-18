//  node try-catch-demonstr.js
try {
    console.log("hello")
// console.log(a)
console.log("end of tryBlock") //3rd line will not get printed if gets error on 2nd line
} catch (error) {
    console.log("handled error" + error )
}finally{
    console.log("finally")
}

console.log("end")

/*
WITH trycatch block


hello
handled errorReferenceError: a is not defined
finally
end

*/



/*
WITH trycatch block
WITHOUT ERROR

hello
end of tryBlock
finally
end

*/



// console.log("hello")
// console.log(a)
// console.log("end")

/* WITHOUT trycatch block

hello
C:\Users\edas2\Desktop\PW-Class-Practices&Projects\PW-Class-Practices-master\try-catch-finally\try-catch-demonstr.js:2
console.log(a)
            ^

ReferenceError: a is not defined
    at Object.<anonymous> (C:\Users\edas2\Desktop\PW-Class-Practices&Projects\PW-Class-Practices-master\try-catch-finally\try-catch-demonstr.js:2:13)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47


*/