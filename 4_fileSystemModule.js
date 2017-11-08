/*
The fs.readFile() method is used to read files on your computer.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	console.log("__dirname: " + __dirname);
    /*--READ--*/
    fs.readFile('4_demoFile-ReadFile.html', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write("1. <b>READ</b> File from 4_demoFile-ReadFile.html. </br>");
        res.write(data);
        /*--CREATE--*/
        res.write("2. <b>CREATE</b> File. </br>");
        res.write("2.1 Create 4_demoFile-CreateFile1.txt using fs.appendFile(). </br>");
        fs.appendFile('4_demoFile-CreateFile1.txt', 'Content - Create File Using fs.appendFile().\r\n', function(err) {
            if (err) throw err;
            console.log('2.1. Create Using fs.appendFile()');
        });
        res.write("2.2 Create 4_demoFile-CreateFile2.txt using fs.open() with flag 'w'. </br>");
        fs.open('4_demoFile-CreateFile2.txt', 'w', function(err, file) {
            if (err) throw err;
            console.log('2.2. Create Using fs.open()');
        });
        res.write("2.3 Create 4_demoFile-CreateFile3.txt using fs.writeFile(). </br>");
        fs.writeFile('4_demoFile-CreateFile3.txt', 'Content - Create File Using fs.writeFile().\r\n', function(err) {
            if (err) throw err;
            console.log('2.3. Create Using fs.writeFile()');
        });
        /*--UPDATE--*/
        res.write("3. <b>UPDATE</b> File. </br>");
        res.write("3.1 Append New Content of 4_demoFile-CreateFile1.txt using fs.appendFile(). </br>");
        fs.appendFile('4_demoFile-CreateFile1.txt', 'Content - Update Content File Using fs.appendFile().\r\n', function(err) {
            if (err) throw err;
            console.log('3.1. Update (Append) Using fs.appendFile()');
        });
        res.write("3.2 Replace Existing Content of 4_demoFile-CreateFile3.txt using fs.writeFile(). </br>");
        fs.writeFile('4_demoFile-CreateFile3.txt', 'Content - Replace Existing Content File Using fs.writeFile().\r\n', function(err) {
            if (err) throw err;
            console.log('3.2. Update (Replace) Using fs.appendFile()');
        });
        /*--DELETE--*/
        res.write("4. <b>DELETE</b> File. </br>");
        res.write("4.1 Create File 4_demoFile-DeleteFile.txt (To Be Deleted)</br>");
        fs.open('4_demoFile-DeleteFile.txt', 'w', function(err, file) {
            if (err) throw err;
            console.log('4.0. Create Using fs.open() to be deleted');
        });
        res.write("4.2 Delete File of 4_demoFile-DeleteFile.txt.</br>");
        fs.unlink('./4_demoFile-DeleteFile.txt', function(err) {
            if (err) throw err;
            console.log('4.0. Delete Using fs.unlink()');
        });
        /*--RENAME--*/
        res.write("5. <b>RENAME</b> File. </br>");
        res.write("5.1 Create File 4_demoFile-oldRenameFile.txt (To Be Rename)</br>");
        fs.open('4_demoFile-oldRenameFile.txt', 'w', function(err, file) {
            if (err) throw err;
            console.log('5.0. Create Using fs.open() to be renamed');
        });
         res.write("5.2 Rename File 4_demoFile-oldRenameFile.txt to 4_demoFile-newRenameFile.txt.</br>");
        fs.rename('4_demoFile-oldRenameFile.txt', '4_demoFile-newRenameFile.txt', function(err) {
            if (err) throw err;
            console.log('5.0. Renamed File Using fs.rename()');
        });
        res.end();
    });
}).listen(8080);