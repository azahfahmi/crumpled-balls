const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var boxBase,boxSide1s,boxSide2s;
var ground;

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;
    
	paper = new Paper(100,352,50,50);

	ground = createSprite(450,630,900,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boxBase=createSprite(750,610,200,20);
  boxSide1s=createSprite(boxBase.x + 110,boxBase.y - 50,20,100);
  boxSide2s=createSprite(boxBase.x - 110,boxBase.y - 50,20,100);

  paper.display();
  boxBase.display();
  boxSide1s.display();
  boxSide2s.display();
  ground.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){

   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
   
 }
}