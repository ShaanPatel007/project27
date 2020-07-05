var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Roof = new roof(400,600,800,30);

	bobObject1 = new bob(100,300,50);
	bobObject2 = new bob(200,300,50);
	bobObject3 = new bob(300,300,50);
	bobObject4 = new bob(400,300,50);
	bobObject5 = new bob(500,300,50);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  
  Roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyCode === UP_ARROW)
  {
	  bobObject1.velocityX=5;
  }
  

  drawSprites();
 
}



