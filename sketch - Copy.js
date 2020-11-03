var Al1tion, Al2tion;
var Superion, gameOverimg, resimg;
var HerHimg;
var bulimg, asimg, bgimg;
var Superhero,ground;
var bg, enbuimg;
var limg,liimg,lifimg;
var life, life1, life2;

function preload(){
  Al1tion = loadAnimation(
    "Images/Fly0.png","Images/Fly1.png","Images/Fly2.png","Images/Fly3.png",
    "Images/Fly4.png")
  Al2tion = loadAnimation(
      "Images/Slime1.png","Images/Slime2.png","Images/Slime3.png",
      "Images/Slime4.png",)
//  resimg = loadImage("Images/restart.png")
//  gameOverimg = loadImage("Images/gameOver.png")
  Superion = loadImage("Images/HeroIdle.png")
 // HerHimg = loadImage("Images/HeroHurt.png")
 bulimg = loadAnimation("Images/Flame1.png", "Images/Flame2.png",
  "Images/Flame3.png", "Images/Flame4.png")
 bgimg = loadImage("Images/Bg.jpg")
 asimg = loadImage("Images/flaming_meteor.png")
 limg = loadImage("Images/life.png")
 liimg = loadImage("Images/life1.png")
 lifimg = loadImage("Images/life2.png")
 enbuimg = loadImage("Images/flare.png")
}

function setup() {
  createCanvas(600, 500);

bg = createSprite(250,300,500,600)
bg.addImage(bgimg)
bg.velocityX = -2;
  
Superhero = createSprite(50,180,20,20)
Superhero.addImage(Superion)
Superhero.scale = 2;

life = createSprite(50,20,10,10)
life.addImage(limg)
life.scale = 0.03;

life1 = createSprite(100,20,10,10)
life1.addImage(liimg)
life1.scale = 0.03;

life2 = createSprite(150,20,10,10)
life2.addImage(lifimg)
life2.scale = 0.03;



 
  
  

}

function draw() {
 // background(bgimg)
  Superhero.y = World.mouseY;
  
  if(bg.x < 0){
    bg.x = bg.width/2
  }
  spawnbullets();
  spawnenemies();
  spawnaster();
  spawnenbullets();
  drawSprites();
}



function spawnbullets(){
  if(World.frameCount%25===0){
  if(keyDown("Space")){
    var bullet = createSprite(Superhero.x,Superhero.y,10,15);
    bullet.addAnimation("Bullet", bulimg)
    bullet.velocityX = 2;


  }
}
}

function spawnenemies(){
  if(World.frameCount%100 === 0){
    var aliens = createSprite(random(380,580),random(30,550),25,25)
    aliens.velocityX = -2;
    aliens.scale = 1.5;
  
  var rand = Math.round(random(1,2));
  switch(rand){
   case 1 : aliens.addAnimation("Alien",Al1tion)
   break;
   case 2 : aliens.addAnimation("Alien2", Al2tion)
   break;

  }
}
}

function spawnaster(){
  if(World.frameCount%200 === 0){
    var asteroids = createSprite(random(0, 600),random(10,580),25,25)
    asteroids.addImage(asimg)
    asteroids.scale = 1.5;
    asteroids.velocityY = 2;
  }
}

function spawnenbullets(){
  if(World.frameCount%120===0){
    var enbullet=createSprite(60,45,10,10);
    enbullet.setImage("enemy", enbuimg);
    enbullet.velocityX=3;
    
    //Galaxiangroup.add(galaxian);
  }
}  
