function Player(x, y){
	//Atributos
	this.x = x;
	this.y = y ;
	this.largura = 20;
	this.altura = 20;

	//Metodos
	this.desenhar = function(){
		noStroke();
		//fill(255, 0, 0);
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.vibrar = function(){
		this.x += round(random(-1, 1));
		this.y += round(random(-1, 1));
	}

}