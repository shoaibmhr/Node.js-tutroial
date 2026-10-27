const fs = require('fs').promises

fs.writeFile('catchfile', 'My promises file this in code')
.then(()=>{
  console.log('created file successfuly');
})
.catch((error)=>{
console.log('The file did not created successfuly',error);
})