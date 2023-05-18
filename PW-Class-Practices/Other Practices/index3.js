// node practice.js
// let array=[1,2,3,4,5];
// array.push(6,7);
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(11);
// console.log(array);
let a1=[1,2,3,4,5]
let a2=["a","b","c","d"]
let aa3=a1.concat(a2);
console.log(aa3);
let a3=a2.concat(a1);
console.log(a3);

// let s1=a3.join("");
// console.log(s1);
// let s2=aa3.join("");
// console.log(s2);

// let s3=a3.reverse();//left to right ordered elements will be right to left ordered
// console.log(s3);
// console.log(a3.indexOf(3));
// let a4=a3.slice(1,4);//Elements from 1st index to 3rd index creates a new Array
// console.log(a4);
// a3.splice(2,0,11);
a3.splice(2,1,11,12);//returns the deleted element 
console.log(a3);