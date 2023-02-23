const fs = require('fs');
const path =  require('path')
const dirPath = path.join(__dirname, 'files')
// for(i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`, 'This is an apple file')
// }

fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
} )