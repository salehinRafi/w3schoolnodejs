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
    var sql = "SELECT * FROM customers";
    conn.query(sql, function(err, result, fields) {
        console.log("1. ************************************** SELECT FROM *********************************************");
        if (err) throw err;
        //2nd parameter of the callback function: result.
        console.log("Result object is an array containing each row as an object: -");
        console.log(result);
        //Result Object
        console.log("Return value for each record by referring to their object's property: -");
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].id + ", " + result[i].name + ", " + result[i].address);
        }
        //3rd parameter of the callback function :fields
        console.log("Fields object is an array containing information about each field as an object: -");
        console.log(fields);
        //Field Object
        console.log("Return value for 'name' field by referring to their object's property: -");
        for (var i = 0; i < fields.length; i++) {
            console.log(fields[i].name);
        }
    });
    var sql1 = "SELECT * FROM customers WHERE id = '2'";
    conn.query(sql1, function(err, result, fields) {
        console.log("2. ************************************** SELECT FROM WHERE ***************************************");
        if (err) throw err;
        //Result Object
        console.log("Return value for each record by referring to their object's property: -");
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].id + ", " + result[i].name + ", " + result[i].address);
        }
    });
    var sql2 = "SELECT * FROM customers ORDER BY id DESC";
    conn.query(sql2, function(err, result, fields) {
        console.log("3. ************************************** SELECT FROM ORDER BY ************************************");
        if (err) throw err;
        //Result Object
        console.log("Return value for each record by referring to their object's property: -");
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].id + ", " + result[i].name + ", " + result[i].address);
        }
    });
});