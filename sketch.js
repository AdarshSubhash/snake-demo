const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var food1;
var snake;


function setup() {
createCanvas(500,500);

engine = Engine.create();
 world = engine.world;
 food1=new Food(random(50,460),random(50,460));
 snake=new Snake(250,250);
}

function draw() {
    background("purple");
 Engine.update(engine);
 food1.display();
 keyPressed();
if(snake.collide(food1)){
  snake.height=snake.height+10;
  food1.x==random(20,480);
  food1.y==random(20,480);
  snake.move();
  snake.eat();
}

 drawSprites();
}

function keyPressed() {
    if (keyDown(LEFT_ARROW)) {
      snake.velocityX = -1;
    } 
    if (keyDown( RIGHT_ARROW)) {
      snake.velocityX = 1;
    } 
    if (keyDown( DOWN_ARROW)) {
      snake.velocityY = 1;
    } 
     if (keyDown(UP_ARROW)) {
      snake.velocityY = -1;
    }
  
  }
 
