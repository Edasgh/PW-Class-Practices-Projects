
//node index.js
const path=require("path");

// console.log(path.sep); /* \ */  \\ "sep" means "seperator"

// console.log(process.env.PATH);

/*

C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\nodejs\;C:\Program Files\Git\cmd;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Users\edas2\AppData\Local\Microsoft\WindowsApps;;C:\Users\edas2\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\edas2\AppData\Roaming\npm


*/


// console.log(path.delimiter); // ;

let fileName=__filename;
// console.log(fileName)

let dirctName=__dirname;
// console.log(dirctName);

let baseName=path.basename(fileName);
// console.log("baseName > ",baseName) // index.js

let baseNameWithoutExt=path.basename(fileName,".js");
// console.log("basename without extension > ",baseNameWithoutExt)

let dirName=path.dirname(dirctName);
// console.log("directory name > ",dirName)

// console.log("extension name1 > ",path.extname(fileName));

// console.log("extension name2 > ",path.extname("app.test.js"));


let fileToPath=path.format({
    dir:"/public_html/home",
    base:"index.html"
})

// console.log("pathToFile > ",fileToPath)



// console.log("isAbsolute", path.isAbsolute(fileName)) // true
// console.log("isAbsolute", path.isAbsolute("/index.js")) // true
// console.log("isAbsolute", path.isAbsolute("./index.js")) // false


// let pathToDir=path.join("/home","Js","dist","index.js");

// console.log("pathToDir > ",pathToDir);

// console.log("parse current filepath", path.parse(fileName));


// console.log(" relation between two paths ", path.relative("home/user/config","home/user/js"));
//  ..\js


// console.log("resolve > ", path.resolve()); // like __dirname
// research about resolve 


// console.log("normalize > ", path.normalize("//home//user//js"));
// normalize >  \\home\user\js



