var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mynodejs'
});
conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    //Create Table Without Primary Key.
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table Created");
    });

    //Alter Table to add Primary Key. at the beginning of table
    var sql2 = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST";
    conn.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("Table Altered");
    });
});