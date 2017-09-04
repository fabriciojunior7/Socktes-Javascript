var socket;

var p1;

function setup(){
	frameRate(60);
	tela = createCanvas(500, 500);

	socket = io.connect("http://localhost:3000");
	socket.on("novoJogador", novoJogador);

	p1 = new Player(round(random(20, 480)), round(random(20, 480)), 1);
	var dados = {x:p1.x, y:p1.y};
	socket.emit("nascer", dados);
}

function draw(){
	background(0);

	p1.desenhar();


	//var dados = {x:p1.x, y:p1.y};
	//socket.emit("update", dados);

}

function novoJogador(dados){
	console.log(dados);
}

