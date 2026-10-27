const http = require('http');

const userData =[
  {
    id:1,
    name: 'shoaib',
    age: 25,
    email: 'shoaib@gmail.com',
  },
  {
    id:2,
    name: 'nawaz',
    age: 26,
    email: 'shoaib@gmai',
  },
  {
    id:3,
    name: 'Ali',
    age: 27,
    email: 'test@gmail.com',
  }
]
const server = http.createServer((req, res)=>{
  res.setHeader('content-type','application/json');
  res.write(JSON.stringify(userData));
  res.end();

}).listen(3000);