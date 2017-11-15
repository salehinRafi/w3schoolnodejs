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
    var sql = "DROP TABLE customers";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table Deleted");
    });
    
});