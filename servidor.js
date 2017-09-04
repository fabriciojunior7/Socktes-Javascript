//Requisitos
var express = require("express");
var app = express();
var servidor = app.listen(3000);
app.use(express.static("public"));
var socket = require("socket.io");
var io = socket(servidor);

//Do Game
//var jogadores = [];

//Rodando
console.log("Rodando servidor...");

//Outros
io.sockets.on("connection", novaConexao);

function novaConexao(socket) {
	console.log(socket.id);

	socket.on("hostPosition", hostPosition);
	socket.on("joinPosition", joinPosition);
	socket.on("hostNome", hostNome);
	socket.on("joinNome", joinNome);

	function hostPosition(dados){
		console.log("HOST: x" + dados.x + " y" + dados.y);
		socket.broadcast.emit("hostPosition", dados);
	}

	function joinPosition(dados){
		console.log("JOIN: x" + dados.x + " y" + dados.y);
		socket.broadcast.emit("joinPosition", dados);
	}

	function hostNome(nome){
		socket.broadcast.emit("hostNome", nome);
	}

	function joinNome(nome){
		socket.broadcast.emit("joinNome", nome);
	}
}


/*
//Objetos

function Player(x, y, id){
	//Atributos
	this.x = x;
	this.y = y;
	this.id = id;

}
*/


