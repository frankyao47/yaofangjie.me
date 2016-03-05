var http = require('http');

var server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello world');
});

server.listen(3000);