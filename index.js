const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,'This is a simple txt file')
// fs.readFile(filePath,'utf8',(err, item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log('File is updated Successfully')
//     else console.log('Append failed')
// })
fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
    if(!err) console.log('File is updated Successfully')
    else console.log('File Renaming failed')
})

// fs.unlinkSync(`${dirPath}/fruit.txt`)