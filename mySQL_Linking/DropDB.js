var mysql = require('mysql');

var  con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! With Database");
    con.query("DROP DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("DataBase Has Been Droped!")
    });
}); 