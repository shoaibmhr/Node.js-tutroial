const fs = require('fs');

fs.writeFile('FsmoduleAsync/example.text', 'This is the Aysnc file', (error)=>{
  if(error){
    console.error("Error writting file",error);
  }else{
    console.log("written file successfuly");
  }

})