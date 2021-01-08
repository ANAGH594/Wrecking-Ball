const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var ball

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(500,550,1000,20);
  box1=new Box(700,200,100,60)
  box2=new Box(700,200,100,60)
  box3=new Box(700,200,100,60)
  box4=new Box(700,200,100,60)
  box5=new Box(700,200,100,60)
  box6=new Box(700,200,100,60)
  box7=new Box(700,200,100,60)
  box8=new Box(700,200,100,60)
  box9=new Box(700,200,100,60)
  ball=new Ball(300,400,100,100)
 

}
function draw() {
  background(56,44,44); 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ball.display();
} 
  

  

 
