var mysql  = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM users WHERE address = 'Silicon Valley'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Records Deleted: " + result.affectedRows);
    });
  });