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
    var sql = "DELETE FROM customers WHERE address = 'Kuala Lumpur'";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    
});

//Standard CRUD is applied here.