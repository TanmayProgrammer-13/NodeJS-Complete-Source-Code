var mysql  = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});

con.connect(function(err){
if(err) throw err;
con.query("SELECT * FROM users WHERE address = 'Silicon Valley'", function(err, results){
if(err) throw err;
console.log(results);
});
});