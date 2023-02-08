const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath =`${dirPath}/apple.txt`
//writefile

fs.writeFileSync(filePath,'This is a simple text file')
//readfile
fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item)
})

//appendfile
fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
    if(!err) console.log('File is updated.')
})

//renamefile

fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log('File name is updated.')
})

//deletefile
fs.unlinkSync(`${dirPath}/fruit.txt`)