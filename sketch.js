var towerImg, tower;
var doorImg, window, windowsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var invisibleGround

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

ghost = createSprite (300,300,20,20)
ghost.addImage("ghost",ghostImg)
ghost.scale =0.3


 invisibleGround = createSprite(300,590,600,20);
  invisibleGround.visible = true;
  invisibleGround.shapeColor="black"

  windowsGroup=createGroup()
  
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }


    if(keyDown("space")&& ghost.y >= 100) {
      ghost.velocityY = -13;
    }
   ghost.velocityY = ghost.velocityY + 0.8

   if(keyDown("left")) {
   ghost.x -=3
  }

  if(keyDown("right")) {
    ghost.x +=3
   }

   ghost.collide(invisibleGround)


   spawnWindows()
   

  

  
    drawSprites()
}


function spawnWindows() {
  //write code here to spawn the windows
   if (frameCount % 240 === 0) {
   
    

    var  window = createSprite(200,-50);
    window.x = Math.round(random(120,400));
    window.addImage("window",doorImg);
    window.velocityY = 1;
    
     //assign lifetime to the variable
    window.lifetime = 800;
    
  
    
    //adding cloud to the group
   windowsGroup.add(window);


   var  climber = createSprite(200,10);
   climber.x =window.x
   climber.addImage("climber",climberImg);
   climber.velocityY = 1;
   
    //assign lifetime to the variable
   climber.lifetime = 800;
   
 
   
   //adding cloud to the group
  climbersGroup.add(climber);
    }
}
