var mysql  = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected With DB!")
    var sql =   "CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255  ))";
    con.query(sql, function(err, result){
      if(err) throw err;
      console.log("New Table Created!");
    });
});