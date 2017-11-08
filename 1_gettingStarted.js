var http = require ('http');

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello, This is My First Node JS Tutorial');
}).listen(8080);