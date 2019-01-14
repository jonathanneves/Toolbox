//MAIN MODULE

 function sayHello(name){
	 console.log('Hello '+ name);
 }
sayHello('John');

const Logger = require('./logger') // ../logger volta uma pasta
const logger = new Logger(); //instanciando o objeto da classe


//Quando acessar localhost:8080 receberei a msg HelloWorld
//Quando acessar /api/curso receberei a msg de um Vetor
const http = require('http');
const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.write('Hello World');
		res.end();
	}

	if(req.url === '/api/curso'){
		res.write(JSON.stringify([1, 2, 3]))
		res.end();
	}
});

server.listen(8080); //port

console.log('Listening on port 8080...')



//EVENTOS
/*const EventEmitter = require('events');

//chamando outro modulo em uma variavel;
const Logger = require('./logger') // ../logger volta uma pasta
const logger = new Logger();
//logger.logVar('Ola'); //chamando a função log
//Logger('Ola')//quando n é uma classe
logger.log('Ola'); //agora não é preciso mais um nome da variavel 

//Register a listener
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

//Vai acessar o mudulo logger, e ativar o evento de messageLogged

logger.log('message');*/


//Mostrar arquivos dentro da pasta. sem SYNC é melhor, pois mostra o erro no console

/*const fs = require('fs');
const files = fs.readdirSync('./')
console.log(files);

fs.readdir('./', function(err, files){
	if (err) console.log('Error', err);
	else console.log('Result', files);
});*/


/*Informações gerais do arquivo, folder, nome, extensao;

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);*/


/*Informações gerais do Sistema Operacional

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: '+totalMemory);
console.log(`Free Memory: ${freeMemory}`);*/


//CHAMANDO FUNÇÕES

//setTimeout()  //call a function after delay
//clearTimeout();  //stop function timeout
//setInterval(); //call repteadly a function between interval
//clearInterval() //stop function interval


//GLOBAL E WINDOW OBJECTS

//console.log(module); //mostrar as informações do modulo atual;
//console.log(logger); //mostrar as funçoes que tenho disponível
//var message = '';
//console.log(global.message); //undefined
//variaveis nao sao adicionados em objeto global


//VARIAVEIS

//var pode assumir vários tipos de dados e mudar qualquer hora;
//const so pode assumir um tipo de dado


//CMD
//node module.js    compila codigo
//jshint module.js  mostra os erros