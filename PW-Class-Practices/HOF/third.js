let pattern="pw";
let flag="gi";
let String1="pw is growing at rapid speed and recently they are working on pwskills to create skill based pwcontent"
let regExOne=new RegExp(pattern,flag);

const result=regExOne.test(String1);
//returns if the pattern exists in 'String1'
console.log(result)

const anotherResult=String1.match(regExOne)
console.log(anotherResult)

const secondResult=String1.replace(regExOne,"p-w");
console.log(secondResult)

//Regular Expressions