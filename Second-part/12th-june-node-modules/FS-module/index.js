
// getting the fs module
const fs=require("fs");

/*
console.log("start")
// asynchronous way to read the "input.txt" file
fs.readFile("input.txt",function(err,data){
  if(err){
    console.log(err)
  }else{
      console.log(data.toString())
      console.log("reading end")
    return data
  }
})

console.log("other stuff")
*/


/*

// RESULT

start
other stuff
<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 74 68 65 20 66 73 20 6d 6f 64 75 6c 65 20 66 6f 6c 64 65 72>
reading end


2nd Result : After appending data

start
other stuff
PW Skills Node js Appending here Appending here
reading end

*/

/*
// synchronous way to read file
console.log("start")

let data=fs.readFileSync("input.txt");
console.log("reading end")
console.log(" Data ",data.toString());
console.log("other stuff")
*/

/*
// RESULT
start
reading end
 Data  Hello from the fs module folder
other stuff

*/

 /*
// Read > open + read

const buf= new Buffer(1024);

fs.open("input.txt","r+",function(err,fd){
  if(err){
    console.log("error ocurred",err)
  }
  console.log("File opened successfully");
  console.log("This is fd",fd);

  fs.read(fd,buf,0,buf.length,2,function(error,data){
    if(error){
      console.log("error while reading the file",error)
    }
    console.log("Data",data);
    console.log("Stringified data",data.toString());
    let netResult=buf.slice(0,data).toString();
    console.log("net Result",netResult)
// memory data will be leaked, security will be harmed, so we need to close files if opened
    fs.close(fd,function(err){
      if(err){
        console.log("Error in closing file",err)
      }else{
        console.log("File closed successfully!")
      }
    })

  })

  // fs.read(fd: number, buffer: Buffer, offset: number, length: number, position: fs.ReadPosition | null, callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: Buffer) => void)
})

 */



/*

Result

(node:10472) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

File opened successfully
This is fd 3
Data 31
Stringified data 31
net Result //Hello from the fs module folder | when position is 0

llo from the fs module folder | when position is 2
*/


// writing to a file => removes the previous text and adds new text
// fs.writeFile("input.txt","PW Skills Node js",function(err){
//   if(err){
//     console.log("An error ocurred",err)
//   }else{
//     console.log("Success in writing file!") // success
//   }
// })


// appending to a file
// fs.appendFile("input.txt"," Appending here","utf-8",function(err){
// if(err){
//   console.log("Error in appending file",err)
// }else{
//   console.log("Appended successfully") // success
// }
// })