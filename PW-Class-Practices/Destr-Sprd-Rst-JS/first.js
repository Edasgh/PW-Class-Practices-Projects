/*
let array=[1,3,"eshita",true]
console.log(typeof array);
//typeof an array is 'object'

let array1=[5,6,7,8,9]
// let array3=[array,array1]//dosen't solve the problem
let array3=array.concat(array1);
let array4=[...array,...array1]
// ...array= 1,3,"eshita",true (spread as various single elements, get out of the array)
// ...array1= 5,6,7,8,9
//These htree dots are used here as a spread operator
console.log(array3);
console.log(array4);
*/
//+++++++++++++++++++++++++++++++++++
//REST
/*
function manyArguments(){
    let args=Array.from(arguments)
     let finalArray=args.map(el=>el)
    console.log(finalArray)
}
function manyArgumentsV2(...args){
    let finalArray=args.map(el=>el);
    console.log(finalArray)

}
//REST operator creates an array gathering all values
manyArguments(1,2,3,4)
manyArguments(1,2,3,4,5,6,7,8)

manyArgumentsV2(1,2,3,4,5,6,7,8)
*/

// SET & MAP MDN DOCUMENTATION
