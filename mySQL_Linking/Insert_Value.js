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
    var sql =   "INSERT INTO users (name, address) VALUES ('Microsoft','Silicon Valley')";
    con.query(sql, function(err, result){
      if(err) throw err;
      console.log("New Record Inserted!");
    });
});