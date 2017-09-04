var socket;

var eu, outro;
var mensagem;
var euText = "", outroText = "";

function setup() {
	frameRate(60);

	var larguraTela = 600, alturaTela = 600;
	tela = createCanvas(larguraTela, alturaTela);

	socket = io.connect("http://192.168.25.10:3000");
	//socket = io.connect("http://fabriciojunior7.ddns.net:3000");
	//socket = io.connect("http://191.33.41.42:3000");
	socket.on("joinPosition", joinPosition);
	socket.on("joinNome", joinNome);

	eu = new Player(250, 300);
	outro = new Player(350, 300);

	mensagem = createInput("");
}

function joinPosition(dados){
	outro.x = dados.x;
	outro.y = dados.y;
}

function joinNome(nome){
	outroText = nome;
	print(outroText);
}

function draw(){
	background(0);
	mensagem.input(novoNome);

	textSize(12);
	fill(255);
	outro.desenhar();
	text(outroText, outro.x, outro.y);

	fill(255, 0, 0);
	eu.desenhar();
	text(euText, eu.x, eu.y);

}

//Enviadores
function novoNome(){
	euText = mensagem.value();
	socket.emit("hostNome", mensagem.value());
}

function mousePressed(){
	eu.x = mouseX;
	eu.y = mouseY;

	var dados = {x: eu.x, y:eu.y};
	socket.emit("hostPosition", dados);
}