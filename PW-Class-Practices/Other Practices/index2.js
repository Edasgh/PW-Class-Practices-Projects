//Question-1
// let a =3;
// let b= new Number(3);
// let c=3;

// console.log(a==b)
// console.log(a===b)
// console.log(b===c)
//output=> true false false
//node index.js

//Question-2
// let greeting;
// greetign={};
// console.log(greetign);

//Question-3
// let number=0;
// console.log(number++);//output will be 0 (prints first and then increases)
// console.log(++number);//output will be 2 (increases first and then prints)
// console.log(number);//Prints the last input(2)

//Question-4
// const sum = eval("10*10+5");
// console.log(sum);//Automatically recognizes as numbers Output=105

//Question-5
// var num=8;
// var num=10;
// console.log(num);//Output=10, since it's(the variable) not const

//Question-6
// console.log(typeof 1);
// console.log(typeof typeof 1);//the word 'number' is a string itself , Output=string

//Question-7
// const numbers=[1,2,3];
// numbers[10]=11;
// console.log(numbers);//Output=[ 1, 2, 3, <7 empty items>, 11 ]

//Question-8
// console.log(3+4+"5");//Output=75 ["5" is a string]

//Question-9
// console.log("I enrolled in a course"[0]);//Output="I"

//Question-10
// const name="PW Skills";
// console.log(name());//TypeError: name isn't a function

//Question-11
// const one=false||{}||null;
// const two=null||false||"";
// const three=[]||0||true;
// console.log(one,two,three);//Output : {} "" []

//Question-12
// var x=2;
// var y ="2";
// console.log(x===y)//false as output

//Question-13
// for(let i=1;i<5;i++){
//     if(i===3)continue;
//     console.log(i);//Output : 1,2,4
// }

//Question-14
// const name1="PW Skills";
// console.log(!typeof name1==="object");//false
// console.log(!typeof name1==="string");//false

//Question-15
// for(var i=0;i<5;i++){
// console.log(i);
// }
//0 1 2 3 4 => Output

//Question-16
// var x=0;
// while(x<5){
// console.log(x);
// x++;
// }
//0 1 2 3 4 => Output

//Question-17
// var x=1;
// do{
//     console.log(x)
//     x++;
// }while(x<5);
//1 2 3 4 => Output [Will print 1]

//Question-18
// for (let i = 2; i < 5; i++) {
//    if(i===3){
//     break;
//    }
//     console.log(i)
// }
//Output 2 [stops after 2 (stops from 3)]

//Question-19
// for (let i = 2; i < 5; i++) {
//     if(i===3){
//      continue;
//     }
//      console.log(i)
//  }
//Output 2 4 [only doesn't print 3]

//Question-20
// var a=[1,2,3,4,5];
// for (var i in a){
//     if(a[i]%2===0){
//         console.log(a[i])
//     }
// }
//Output 2 4

//Question-20
// var day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Today is Monday.");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday.");
//     break;
//   default:
//     console.log("Today is not Monday or Tuesday.")
//     break;
// }
//Output=> "Today is Monday"

//Question-22
// var x = 20;
// switch (x) {
//   case x < 20:
//     console.log("x is less than 20");

//     break;
//   case x > 20:
//     console.log("x is greater than 20");

//     break;

//   default:
//     console.log("x is equal to 20")
//     break;
// }

//Output => x is equal to 20

//Question-23
// var x = 20;
// switch (x) {
//   case 20:
//     console.log("x is equal to 20");
//     break;
//   default:
//     console.log("x is not equal to 20");
//     break;
// }
//Output=> x is equal to 20

//Question-24
// var x=20;
// var y= x>10?x<30:"x is not greater than 10 or less than 30";
// console.log(y);
//Output => true

//Question-25
// var x=(10>5)?"x is greater than 5"
// console.log(x)
//Output => SyntaxError: Unexpected identifier 'console'

//Question-26
// var x=10;
// var y ="10";
// var z= x===y?"equal":"not equal";
// console.log(z);
//Output=> not equal

//Question-27
// let x =5;
// while(x<6){
//     console.log(x)
//     x++;//after adding x++, Output=>5
// }
//Output=>infinite loop
