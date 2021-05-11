const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , obj;
var ball , ground;



function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  var opt = {isStatic : true}

  obj = Bodies.rectangle(200,200,40,80,opt);
  World.add(world,obj);
  var opt1 = {restitution : 1.0}


  ball = Bodies.circle(100,100,50,opt1); 
  World.add(world,ball);
  ground = Bodies.rectangle(0,390,800,40,opt);
  World.add(world,ground);



}

function draw() {
  background("green"); 
  Engine.update(engine); 
  ellipse(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,800,40);
  rect(obj.position.x,obj.position.y,40,80);
}