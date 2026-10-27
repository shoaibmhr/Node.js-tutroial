const fs = require('fs').promises

async function writeFileExample(){
  try{
    await fs.writeFile('awaitfile', 'This is the aync await file');
    console.log('file created successfuly');

  }catch(error){
    console.log('This is not created file successfuly',error);

  }

}
writeFileExample();