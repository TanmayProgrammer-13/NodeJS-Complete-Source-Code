var http = require('http')

// Create a Basic Web Server
http.createServer(function (req, res){
  res.write('Hello World!');
  res.end();
}).listen(3000);