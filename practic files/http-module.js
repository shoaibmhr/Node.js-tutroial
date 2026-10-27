// const http = require('http')

// http.createServer((req, res)=>{
//   res.writeHead(200,{'content-type':'text/plain'});
//   res.end('helo world');

// }).listen(3000,()=>{
//   console.log('server running at http://localhost:3000/');
//  });
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World - HTTPS Server");
  })
  .listen(3000, () => {
    console.log("HTTPS server running at https://localhost:3000/");
  });