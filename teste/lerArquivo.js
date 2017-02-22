var fs = require('fs');

fs.readFile('./text.txt', function(err, data) {
	console.log(data.toString());
	console.log("Fim da Execução");
});

//Ler arquivo Text.txt
