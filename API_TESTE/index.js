		var express = require('express');
		var app = express();

		app.get('/', function(req, res) {
			console.log("rota raiz");
			res.send('Hello GET');
		})

		/*app.get('/user/:id', function(req, res) {
			var id = res.params.id;
		})*/

		app.get('/user', function(req, res) {
			var user = {
				nome: "Victor",
				idade: 21
			}
			res.json(user);
		})

		app.post('/user', function(req, res) {
			var user = req.body.user;
			console.log("salvando", user);
		})

		var server = app.listen(8080, function() {
			var host = server.address().address;
			var port = server.address().port;
			console.log("Exemplo da aplicação rodando na http://%s:%s", host, port);
		})







/*var testeExports = require('./testeExport');

console.log(testeExports.helloWorldExport());*/