const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     //fs.writeFileSync("hello.txt"+i+"","a simple text file");
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"a simple text file");
// }
//reading all files present in a directory(folder):
//files will be an array of files present inside that folder
fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
        console.log("File name is : ",item);
    })
})

