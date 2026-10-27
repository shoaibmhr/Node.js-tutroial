const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/plain'})
  res.write("helo world Abcssssssssss")
  res.end("This is the my first Node.js server");
});

server.listen(3000,()=>{
  console.log("server is listen in port 3000");
});