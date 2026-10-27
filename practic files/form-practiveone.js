const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
  fs.readFile('form.html','utf8',(err,data)=>{
    if (err) {
      console.log(err);
      res.write((404, { "Content-type": "text/html" }));
      return res.end("404 not found");
    } else if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
    } else if (req.url === "/submit") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>form submitted successfuly</>");
    }
    res.end();
  })

}).listen(3000);