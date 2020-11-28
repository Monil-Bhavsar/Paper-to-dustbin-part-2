
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,680,800,20);
	paper = new Paper(100,650,25);
	dustbin = new Dustbin(550,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed () {
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
}

