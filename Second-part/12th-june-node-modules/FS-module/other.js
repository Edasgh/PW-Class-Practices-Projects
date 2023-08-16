// getting the fs module
const fs = require("fs");


// delete a file using fs module

fs.unlink("input.txt",function(err){
 if(err){
    console.log("error in deletion",err)
 }else{
    console.log("success in deleting file")
 }
})