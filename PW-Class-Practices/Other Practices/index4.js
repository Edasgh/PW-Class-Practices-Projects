//Objects
let obj1={
    id:101,
    name:"xyz",
    salary:10000
    
}
// console.log(obj1);

let obj2=new Object();
obj2.id=103;//As 'id' doesn't exist in the object, obj.id will assign 'id' as a new key
obj2.name="Eshita";
obj2.salary=0;
obj2.residence="Nowhere";
//Or
obj2['residence']="nowhere";//This also can assign a new key value pair
//Existing both just change the value of this key(residence)
delete obj2.id 
//deletes the key value pair in the object

// console.log(obj2);
// console.log(obj2.id);//Value of the 'id' key
// console.log(obj2['id'])//Value of the 'id' key

//An object can also be assigned by a function

function obj3(i,n,s) {
    this.id=i;//id,name and salary as the key of that object and i,n,s are the parameters of this function
    this.name=n;
    this.salary=s;
    
}

const emp=new obj3(104,"Srijita",100000);
// console.log(emp);//New JavaScript Object
let keys=Object.keys(emp);
// console.log(keys);
//Object.keys(object name) returns an array of keys(of this object) in form of strings
let values=Object.values(emp);
// console.log(values);
//Object.values(object name) returns an array of values of this object in their own forms
let entries=Object.entries(emp);
console.log(entries);
//OUTPUT :
//[ [ 'id', 104 ], [ 'name', 'Srijita' ], [ 'salary', 100000 ] ]
//Object.entries(object name) returns an array of multiple arrays
//In each array 'key'(keys are in form of strings here too) is the 0th index and 'value' is the 1st index

// Object.freeze(emp);//Object.freeze() functions prevents the object's values to be changed or new key-value pair to be added or existing key-value pair to be deleted
// Object.seal(emp);//Allows the change of values only
// emp.id=99;
// emp.residence="Random"
// delete emp.name;
console.log(emp);

const obj4=Object.assign({x:10},emp);//Clones the key-value pairs of emp into the new object obj4 and x:10 will be added at the first(0th index) then all the elements of emp
console.log(obj4);
const obj5=Object.assign({},emp);//Clones the key-value pairs of emp into the new object obj5
console.log(obj5);
