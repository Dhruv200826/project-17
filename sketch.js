
var gameState = "play";
var cutsound , gameOversound;

var sword, fruit, Enemy, r, monster, fruits;

var swordImage,gameoverImage;

var fruitsGroup, EnemyGroup;

function preload(){
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png");
  gameoverImage = loadImage("gameover.png");
  gameOversound = loadSound("gameover.mp3");
  cutsound = loadSound  ("knifeSwooshSound.mp3");
}

function setup(){
  
  createCanvas(600,400);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  score = 0;
  
  fruitsGroup = new Group();
  Enemygroup = new Group();
}

function draw(){
  
  
  background("lightblue");
  if (gameState === "play"){
    
  
 
    sword.y = World.mouseY;
    sword.x = World.mouseX;
  if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    score = score+1;
    cutsound.play();
  }
   if(sword.isTouching(Enemygroup)){
    gameState = "end"
  }
  
  
  fruits()
  Enemy();
  }
  if (gameState === "end"){
    fruitsGroup.destroyEach();
       Enemygroup.destroyEach();
    sword.addImage(gameoverImage);
    sword.x = width/2;
    sword.y = height/2;
    sword.scale = 2;
    gameOversound.play();
  
  }
  
 drawSprites();
  text("Score: "+ score, 500,50);
}

function fruits(){
if(World.frameCount%50 === 0){
  fruit = createSprite(400,200,20,20);
  fruit.scale = 0.2;
  //fruit.debug = true;
  r = Math.round(random(1,4));
 if(r == 1){
   fruit.addImage(fruit1);
 } else if (r == 2){
   fruit.addImage(fruit2);
 }else if (r == 3){
   fruit.addImage(fruit3);
 } else {
   fruit.addImage(fruit4);
 }
  fruit.y = Math.round(random(50,340));
  
  fruit.velocityX = -7;
  fruit.setLifetime = 100;
  
  fruitsGroup.add(fruit);
 
  }
}

function Enemy(){
  if(World.frameCount % 200 === 0){
    monster = createSprite(400,200,20,20);
    monster.addImage("moving", monsterImage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    
    Enemygroup.add(monster);
  }
}
