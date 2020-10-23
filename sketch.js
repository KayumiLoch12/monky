// i try 
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var count;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   monkey = createSprite(50,300,400,20);
   monkey.addAnimation("monkey",monkey_running); 
   monkey.scale = 0.1
  
  ground = createSprite(50,400,800,10);
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  count = 0;
}


function draw() {
background("white")
  
  text("survil: "+ count, 200,50);
  count = count + Math.round(frameCount/200);
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
    
  
  
  if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
       
    }
      
      
  monkey.velocityY = monkey.velocityY + 0.8 
  monkey.collide(ground);
  drawSprites();
  
    //write code here to spawn the clouds
 if (frameCount % 90 === 0) {
    var obstacle = createSprite(600,380,40,10);
   var rand = Math.round(random(1,11));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
   
   //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}


  



  
  
  
}






