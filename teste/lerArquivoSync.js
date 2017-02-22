var fs = require('fs');

if (fs.existsSync('temp')){
	console.log("Diretório já existe, removendo...");
	if (fs.existsSync('temp/new.txt')) {
		fs.unlinkSync('temp/new.txt');
	}
	fs.rmdirSync('temp');
}


fs.mkdirSync('temp');
if(fs.existsSync('temp')){
	process.chdir('temp');
	fs.writeFileSync('text.txt', 'Texto para nosso arquivo Sync');
	fs.renameSync('text.txt', 'new.txt');
	var tamanhoDoArquivo = fs.statSync('new.txt').size;
	console.log('Tamanho do Arquivo: ' + tamanhoDoArquivo + ' bytes');
	console.log('Conteúdo do Arquivo: ' + fs.readFileSync('new.txt').toString());
}