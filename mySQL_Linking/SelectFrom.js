var mysql  = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});

con.connect(function(err){
if(err) throw err;
con.query("SELECT * FROM users", function(err, results, fields){
if(err) throw err;
console.log(results);
});
});