//console.log(__filename); //nome do arquivo
//console.log(__dirname);	//nome do diretorio
	
const EventEmitter = require('events');

var url = 'http://mylogger.io/log'; //enviar um http request para esse url

class Logger extends EventEmitter{

	//var e function sao scope, logo sao privados
	//function log(message){
		log(message){
		//Send an HTTP request
		console.log(message);

		//Raise an event, chama a função do evento
		this.emit('messageLogged', {id: 1, url: 'http://' }); 
	}
}

//module.exports.logVar = log; //torna function log publica ou variaveis atribuindo um nome 
module.exports = Logger; //exporta a classe
//module.exports.endPoint = url;