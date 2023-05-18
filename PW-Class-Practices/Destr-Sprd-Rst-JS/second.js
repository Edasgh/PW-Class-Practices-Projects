// node second.js
/*
let myArray=[1,2,3,4,5,6,3,4,5]
let newSet=new Set(myArray)
console.log(newSet)
//Set(6) { 1, 2, 3, 4, 5, 6 } is the output
//a set always stores unique values 

newSet.add(10)
//newSet.clear();//Clears all values from a set
//console.log(newSet.delete(10))//returns true if the value exists in that set and false if it doesn't
// newSet.delete(10)//Deletes the specified value from the set
console.log(newSet)
console.log(newSet.has(9))
console.log(newSet.has(10))
function setDifference(setA,setB){
    return new Set([...setA].filter(el=>!setB.has(el)))
    //Calculate the difference between two sets
}
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MAP METHOD

let map=new Map()
console.log(map.size)

let array=[
    [1,"mita"],
    [2,"gita"],
    [3,"rita"],
    [4,"pritha"]
]


array.map((arrayItem)=>{
    map.set(arrayItem[0],arrayItem[1])
})
//Creating a map from array and first element is the key and second element is the object