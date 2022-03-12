
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
   
	}
	//Create the Bodies Here.

	  ground =new Ground(400,590,800,20);
    right = new Ground(790,400,20,800);
    left = new Ground(10,350,20,700);
    top_wall = new Ground(400,10,800,20);
 
    groundObj = new Ground(700,555,7,50);
    leftSide = new Ground(600,555,7,50);

    ball = Bodies.circle(200,100,20,ball_options)
    World.add(world,ball);

	Engine.run(engine);
  
}

keyPressed;

function draw() {
  rectMode(CENTER);
  background("black");

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  groundObj.show();
  leftSide.show();

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
   Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }

}
