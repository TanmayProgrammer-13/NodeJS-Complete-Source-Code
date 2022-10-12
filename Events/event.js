// File System Module
var fs = require('fs');
var rs = fs.createReadStream('./new.txt');
rs.on('open', function(){
console.log("The File is Open!");
});


