// let array=[2,3,4];
/*array.forEach(function(element,index,array){
  console.log(element,index,array);
})
*/

/*array.map((element,index,array)=>{
    console.log(element,index,array);
})
*/

//.forEach() and .map() are the same methods

/*
let heros=["cyborg","raven","beast-boy","star-fire","robin"];

heros.map((el)=>{
    console.log(el.toUpperCase());
})
*/

//filter method
/*
let heros=["naagraj","doga","dhruva","maniraj"];
const herosWithRaj=heros.filter((h)=>{
   return  h.endsWith("raj")
// OR return h.includes("raj")
   //If you don't write return , then you'll not get the value on console
})
console.log(herosWithRaj);

*/


//reduce method


let cartBill=[20,30,50]

const sumOfCartBill=cartBill.reduce((prev,curr)=>prev+curr , 0)

console.log(sumOfCartBill)


/*
const gameScore=[200,330,340,250,500];

//check if all the elements are numbers
const gameScoreCheck=gameScore.every((el)=>
  typeof el === "number"
  //don't write Number cause typeof operator returns dataType in lowercase and as a string
)

console.log("check : "+gameScoreCheck)
*/
//Find score above 200
//find , findIndex , some , sort