var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});
con.connect(function(err, results){
   if(err) throw err;
   var sql =    "DROP TABLE users";
   con.query(sql, function(err, results){
        if(err) throw err;
        console.log("Table Deleted Sucessfully!");
   });
});