// node closure.js

let score=4
function one(){
    let score=0
    console.log("score from function one is "+score) // 0
}
function two(){
    let score=3
    console.log("score from function two is "+score) // 3
}
function three(){
    console.log("score from function three is "+score) // 4
}
// one();
// two();
// three();
// console.log("score from the global scope is "+score) // 4


function outerFun(){
    let outerVar="I am at scope level 1"
    function innerFun(){
        let innerVar="I am at scope level 2"
        console.log(outerVar);


    }
    console.log(innerVar) // ReferenceError: innerVar is not defined
// Outer functions can't access inner functions' variables but inner functions can access outer functions' variables
//This is called lexical scoping
    innerFun();
}

// outerFun(); // I am at scope level 1

const myGlobalValue=0;
function Fun() {
    const val1=1
    console.log(myGlobalValue)
    function innerFun() {
        const val2=2
        console.log(val2,val1,myGlobalValue)
        function innerOfInnerFun(){
            const val3=3
            console.log(val3,val2,val1,myGlobalValue)
        }
        innerOfInnerFun();
    }
    innerFun()
}

//Fun();

// Closure

function outerFunction(){
    let outerVal="I am outer"
    function innerFunction(){
        let innerVal="I am inner"
        console.log(outerVal)
    }
    innerFunction();
}

// outerFunction();

// const errorMsg="File not found"

// setTimeout(function callBack(){
//     console.log(errorMsg)
// },1000)

let pageCount=0

items=[2,4,6,9]

items.forEach(function iterator(num){
    pageCount++
    console.log(num)
})
console.log("page count is "+pageCount)
/*
//OUTPUT
2
4
6
9
page count is 4

*/