
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImage;
var ball,ballImage;
var tree,treeImage;

function preload()
{
	boyImage = loadImage("boy.png");
	ballImage = loadImage("ball.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,600,20,20);
	boy.addImage(boyImage);
	boy.scale = 4.5;
	this.body.boy = PointB;

	ball = new Stone(165,580,20,20);
	ball.addImage(ballImage);
	
	tree = createSprite(550,460,20,20);
	tree.addImage(treeImage);	
	tree.scale = 4.5;

	mango1 = new Mango(550,460,20,20);
	mango2 = new Mango(550,500,20,20);
	mango3 = new Mango(500,460,20,20);
	mango4 = new Mango(500,560,20,20);
	mango5 = new Mango(600,400,20,20);

	this.body.contraint(BodyA,PointB);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();

  ball.display();
 
}

function fly(){
	BodyA = null	
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}



