
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	

var world;
function preload(){

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(130,20,50);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 paper.display();
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
	if (keyCode === UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-145})
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-165,y:-145})
	}
}
