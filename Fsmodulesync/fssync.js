const fs =  require('fs')

fs.writeFileSync('Fsmodulesync/data.text', 'Data file in this text', 'utf8');
console.log('Written file successfuly')


const data = fs.readFileSync('Fsmodulesync/data.text', 'utf8');
console.log('content', data);
