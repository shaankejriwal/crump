const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,400,1200,20);

	rect1 = new Box(800,380,10,50);

	rect2 = new Box(850,380,100,10);

	rect3 = new Box(900,350,10,50);

	ball = new Box(200,380,20,20);

	slingshot = new SlingShot(ball.body,{x:200, y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  rect1.display();
  rect2.display();
  rect3.display();

  ball.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


