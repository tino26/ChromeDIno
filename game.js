// Creating variables
var speed=3;

class Dino{
	constructor(){
		this.x=100;
		this.y=500;
		this.sx=60;
		this.sy=60;
		this.dy=5;
		this.jumping=false;
		this.timer=20;
		this.pic1=new Image();
		this.pic1.src="dino1.png";
		this.pic2=new Image();
		this.pic2.src="dino2.png";
		this.jumpPic=new Image();
		this.jumpPic.src="jumpdino.png";
		this.pic=this.pic1;
	}

	update(){
		this.y+=this.dy;
		if(this.y>=500){
			this.y=500;
			this.jumping=false;
		}

		if(this.y<500){
			this.jumping=true;
		}
		
		this.dy+=0.15;

		if(this.jumping==false){
			if(this.timer%10==0){
				this.pic=this.pic1;
			}
			if(this.timer%20==0){
				this.pic=this.pic2;
			}
		}

		if(this.jumping==true){	
			this.pic=this.jumpPic;
		}		

		this.timer--;
		if(this.timer<=0){
			this.timer=20
		}
	}

	jump(){
		if(this.jumping==false){
			this.dy=-5;
		}
	}

	draw(){
		context.drawImage(this.pic, this.x, this.y, this.sx, this.sy);
	}
}

var dino=new Dino();

class smallCactus{
	constructor(x, y){
		this.x=x;
		this.y=550;
		this.sx=10;
		this.sy=10;
	}

	update(){
		this.x-=speed;
	}

	draw(){
		context.fillRect(this.x, this.y, this.sx, this.sy);
	}
}

class twoSmall extends smallCactus{
	constructor(x){
		super(x);
		this.y=550;
		this.sx=20;
		this.sy=20;
	}

	update(){
		super.update();
	}

	draw(){
		super.draw();
	}
}

class treeSmall extends smallCactus{
	constructor(x){
		super(x);
		this.y=550;
		this.sx=30;
		this.sy=30;
	}

	update(){
		super.update();
	}

	draw(){
		super.draw();
	}
}

class bigCactus extends smallCactus{
	constructor(x){
		super(x);
		this.y=550;
		this.sx=30;
		this.sy=65;
	}

	update(){
		super.update();
	}

	draw(){
		super.draw();
	}
}

class twoBigCactus extends smallCactus{
	constructor(x){
		super(x);
		this.y=550;
		this.sx=20;
		this.sy=20;
	}

	update(){
		super.update();
	}

	draw(){
		super.draw();
	}
}

class Bird{
	constructor(y){
		this.x=canvas.width;
		this.y=y;
		this.sx=60;
		this.sy=40;
		this.bird1=new Image();
		this.bird1.src="bird1.png";
		this.bird2=new Image();
		this.bird2.src="bird2.png";
		this.bird=this.bird1;
		this.timer=20;
	}

	update(){
		if(this.timer%20==0){
			this.bird=this.bird1;
		}
		if(this.timer%40==0){
			this.bird=this.bird2;
		}
		this.timer--;
		if(this.timer<=0){
			this.timer=40
		}
	}

	draw(){
		context.drawImage(this.bird, this.x, this.y, this.sx, this.sy);
	}
}
var bird=new Bird(480);
function update() {
	dino.update();
	if(isKeyPressed[32] || isKeyPressed[38]){
		dino.jump();
	}
	bird.update();
}

function draw() {
    // This is how you draw a rectangle
    dino.draw();
    bird.draw();
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
