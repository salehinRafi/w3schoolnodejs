//To include a module, use the require() function with the name of the module:

var http = require ('http');
var dt = require('./2_module2');

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("The date and time are currently: "+dt.myDateTimeModule());
	res.end();
}).listen(8080);