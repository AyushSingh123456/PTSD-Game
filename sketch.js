var background, backgroundImage
var Player, Friend, Enemy, bullet
var PlayerImage, FriendImage, EnemyImage


function preload(){
backgroundImage = loadImage("WarzoneSS.png")
PlayerImage = loadImage("Player2.png")
FriendImage = loadImage("Friend2.png")
EnemyImage = loadImage("Enemy2.png")
}


function setup() {


  createCanvas(windowWidth,windowHeight);
  Player = createSprite(400, 750, 20, 20);
  Friend = createSprite(500, 750, 20, 20);
  Enemy = createSprite(1000, 750, 20, 20);
  bullet = createSprite(1000, 750, 10, 7);
  bullet.shapeColor = "white"
  bullet.visible = false

  Player.addImage(PlayerImage)
  Friend.addImage(FriendImage)
  Enemy.addImage(EnemyImage)
}

function draw() {
  background(backgroundImage);  
  

  if(keyDown(LEFT_ARROW)){

Player.x = Player.x -10
  }
  if(keyDown(RIGHT_ARROW)){

    Player.x = Player.x + 10
      }

      if (bullet.isTouching(Friend)){
        bullet.velocityX = 0
        Friend.rotation = 90
        bullet.visible = false
        Friend.y = Friend.y+20
       
        tint(255,126)
        
      }

      if (World.seconds==5){
bullet.visible= true
bullet.velocityX = -5
      }
 
  drawSprites();
}



