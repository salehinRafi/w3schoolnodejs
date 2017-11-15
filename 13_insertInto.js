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
    var sql = "INSERT INTO customers (name, address) VALUES ('RangkumI', 'Kuala Lumpur')";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    var sql = "INSERT INTO customers (name, address) VALUES ('RiayatI', 'Selangor')";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("2 record inserted");
    });
    var sql = "INSERT INTO customers (name, address) VALUES ('CeritaI', 'Johor')";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("3 record inserted");
    });
});