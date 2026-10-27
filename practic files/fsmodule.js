const { error } = require('console')
const fs = require('fs')
//Asych
// fs.readFile('text.txt','utf8',(err,data) =>{
//   if(err){
//     console.log('err reading file',err);
//   }
//   console.log('file content',data)
// })
//Synch
// const data = fs.readFileSync('text.txt','utf8');
// console.log('file content', data);

// fs.writeFile('text.txt','My Node.js lecture',(error)=>{
//   if(error){
//    console.log('Error is finding',error);
//   }
//   else{
//     console.log('write the file successfuly');
//    }
//  })

//append file
// fs.appendFile('data.txt','/nShoaib Ali',(error)=>{
//   if(error){
//     console.log("finding the error",error);
//   }
//   else{
//     console.log("append file successfuly");
//   }
// })

fs.unlink('data.txt');
console.log("deleted file successfuly");