var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:''
});
conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    var sql = "CREATE DATABASE mynodejs";
    conn.query(sql,function(err,result){
    	if(err) throw err;
    	console.log("Database Created");
    });
});