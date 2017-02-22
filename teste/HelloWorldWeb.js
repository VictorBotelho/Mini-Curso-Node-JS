var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'ContentType':'text/html'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log("Server Running!");

//Executar no navegar [localhost:1337]

