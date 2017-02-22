var fs = require ('fs');

fs.mkdir('temp', function(err) {
	fs.exists('temp', function(exists){
		if(exists){
			process.chdir('temp');
			fs.writeFile('text.txt', 'Texto para o nosso arquivo', function(err){
				fs.rename('text.txt', 'new.txt', function(err){
					fs.stat('new.txt', function(err){
						console.log('Tamanho do arquivo: ' + stats.size + ' Bytes');
						fs.readFile('new.txt', function(err,data){
							console.log('Conteúdo do arquivo' + data.toString());
						})
					})
				})
			})
		}
	})
});