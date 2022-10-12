var mysql  = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});

con.connect(function(err){
  if(err) throw err;
  var sql = "SELECT * FROM employees LIMIT 2";
  con.query(sql, function(err, results){
     if(err) throw err;
     console.log(results)
  });
});