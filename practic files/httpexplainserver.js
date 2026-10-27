const http = require("http");
let age = 25;

const server = http.createServer((req, res)=>{
  res.writeHead(200,{'content-type':'text/html'});
  res.write(`
    <DOCTYPE html>
    <html>
    <head>
    <title>
    Home page </title>
    </head>
    <body>
    <h1>My age is ${age}</h1>
    </body>
    </html>
    `);
    res.end();
})
server.listen(3000,()=>{
  console.log('server is listen is port http://localhost:3000');
});