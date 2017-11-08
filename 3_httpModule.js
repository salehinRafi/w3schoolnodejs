/*
	The function passed into the http.createServer() has a req argument that represents 
	the request from the client, as an object (http.IncomingMessage object).

	This object has a property called "url" which holds the part of the url that comes after the domain name
 */
var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write("Copy & Paste This URL on browser - <b>http://localhost:8080/?year=2017&month=July</b> </br>")
    //1, Read the Query String
    res.write("1. Read the Query String: " + req.url);
    
    //2. Split the Query String
    var q = url.parse(req.url, true).query;
  	
  	var txt = q.year + " " + q.month;
  	res.write("</br>2. Split the Query String: "+txt);
    res.end();
}).listen(8080);