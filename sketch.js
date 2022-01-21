
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var back,Back;
var hero,Hero;
var villian,Villian;
var score = 0;
var bullet,Bullet;

function preload(){
back = loadImage("images.png");
hero = loadImage("superhero.png");
villian = loadImage("villian.png");
bullet = loadImage("bullet.png");

}


function setup() {
  createCanvas(1000,500);


  engine = Engine.create();
  world = engine.world;
  Back = createSprite(500,250,1000,500);
  Back.addImage(back);
  Back.scale = 2;
  Hero = createSprite(250,250,40,40);
 Hero.addImage(hero);
 Hero.scale= 0.1;
 Villian= createSprite(750,250,40,40);
 Villian.addImage(villian);
 Villian.scale= 0.1;
 
 
}


function draw() 
{
  background(0);
  Engine.update(engine);
  Back.velocityX= -4;
  
  if (Back.x <= 300){
    Back.x=500;
    
  }

  if(score%200 === 0){
  Bullet= createSprite(750,Math.round(random(110,400)),40,40);
 Bullet.addImage(bullet);
 Bullet.scale= 0.09;
}
 

  drawSprites();
  mousePressed();
  textSize(40);
  text("score: "+ score,800,100);
  
  score = score + Math.round(frameCount/60);
}


function mousePressed()
{
  if (keyCode === 38){
    Hero.y = Hero.y-5;
  }

if (keyCode === 40){
  Hero.y = Hero.y +5;
}
}
