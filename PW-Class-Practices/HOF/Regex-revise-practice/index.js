// node index.js


// regex = Regular Expressions
let pattern ="pw"
// declaring a regular expression
let regExOne= new RegExp(pattern);

let flag ="gi"
// passing both pattern and flag
let regExTwo=new RegExp(pattern,flag);

// shortcut method to declare a regular expression
let regExThree= /pw/gi
// in the flag "gi"=> 'i' means case insensitive and using only 'g' means case sensitive
// in the context of this pattern ,
// case insensitive => capital letter and  small letter (here the pattern is in lowercase version) both versions of pattern will also be counted as a match
// case sensitive => only small letter version of the pattern(cause here the pattern is in lowercase version) will be counted as a match
// syntax of RegExp : /pattern/flag

// suppose we have to check for a pattern "pw" in this string
const strToCheck="PW is growing rapidly  and recently they are working on pwskills to create Pw based content"

//asking the RegExp to check the string of a specific pattern
const result1 = regExThree.test(strToCheck);
console.log(result1);// true 

//asking the string to check  specific pattern declared in a RegExp
const result2=strToCheck.match(regExThree);
console.log(result2);

// replacing the pattern into another string
const replacedResult=strToCheck.replace(regExThree,"p-w");
console.log(replacedResult);//p-w is growing rapidly  and recently they are working on p-wskills to create p-w based content

// use case-1 : convert the webURL to usable URL

const webURL="https://pwskills.com/name%40surname"
// \d => denotes all the numbers
const usableURL=webURL.replace(/%\d\d/g,"-");
console.log(usableURL) // https://pwskills.com/name-surname