var http = require('http');
var file_system = require("fs");

http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return  res.end();
    });
}).listen(3000);