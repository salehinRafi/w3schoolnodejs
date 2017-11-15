/*
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
 */
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


/* Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:*/
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var parse_url = url.parse(req.url, true);
    var filename = "." + parse_url.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.write(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}).listen(8080);

