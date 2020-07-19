var bg 
var player
var fish 
var fishes = []
var bomb 
var shark
var sharks = []
var whale 
var whales = []

var bomb, bomb_img 
var fire , fire_img 
var diamond , diamond_img
var coin , coin_img
var coinGroups, diamondGroups
var score = 0 
function preload(){
  bg = loadImage("Images/ocean.jpg")
  bomb_img = loadImage("Images/bomb.png")
  fire_img = loadImage("Images/fire.png")
 player_img = loadAnimation("Images/scuba 1.png","Images/scuba 2.png","Images/scuba 3.png","Images/scuba 4.png","Images/scuba 5.png","Images/scuba 6.png","Images/scuba 7.png","Images/scuba 8.png","Images/scuba 9.png","Images/scuba 10.png")
 diamond_img = loadImage("Images/diamond.png")
 coin_img = loadImage("Images/coin.png")
}

function setup() {
  createCanvas(1200,400);
  player = createSprite(200,200,50,50)
  player.scale = 2
  player.addAnimation("player",player_img)
  bomb = createSprite(1000,350,5,5)
  bomb.scale = 0.08
  bomb.addImage("bomb",bomb_img )
  bomb.addImage("fire",fire_img)
  coinGroups = new Group()
  diamondGroups = new Group()
}

function draw() {
  background(bg);  
  Text(" SCORE "+ score, 200,50)
  if(frameCount%60===0){
 fish = new Fish(1200,random(height),70,50)
 fishes.push(fish)
shark = new Shark(1200,random(height),400,200);
 sharks.push(shark)
 whale = new Whale(1200,random(height),500,200);
 whales.push(whale)
  
  }


 // for player 
  if (keyCode ===32){
    bomb.changeImage("fire",fire_img)
    bomb.scale = 2
   
  }
  player.display()
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 3
  }
  if(keyDown(LEFT_ARROW)){
    player.velocityX = -3 
  }
  if(keyDown(DOWN_ARROW)){
    player.velocityY = 3
 }
 
 if(keyDown(UP_ARROW)){
   player.velocityY = -1
  
 }

  // for fishes swimming and display
  for(var i = 0 ; i<fishes.length;i++){
    fishes[i].display()
    fishes[i].swim()
  }

  // for sharks swimming and display
  for (var i = 0 ; i<sharks.length;i++){
    sharks[i].display()
    sharks[i].swim()
  }
  
  // for whale swimming and display
  for (var i = 0 ; i<whales.length;i++){
    whales[i].display()
    whales[i].swim()
  }

  

  // collision in player and bomb ..
  if(player.x-bomb.x<player.width/2+bomb.width/2
    && bomb.x-player.x<player.width/2+bomb.width/2
    && player.y-bomb.y<player.height/2+bomb.height/2
    && bomb.y-player.y<player.height/2+bomb.height/2){
      console.log("working")
      bomb.changeImage("fire",fire_img)
    bomb.scale = 2
   
    }
    spawnDiamonds()

    if(player.x - coinGroups.x< player.width/2 + coinGroups.width/2 
       && coinGroups.x - player.x< player.width/2 + coinGroups.width/2 
       && player.y - coinGroups.y< player.height/2 + coinGroups.height/2 
       && coinGroups.y - player.y< player.height/2 + coinGrouo.height/2){
         score = score + 1 
       }
    if(player.x - diamondGroups.x< player.width/2 + diamondGroups.width/2 
      && diamondGroups.x - player.x< player.width/2 + diamondGroups.width/2 
      && player.y - diamondGroups.y< player.height2 + diamondGroups.height/2
      && diamondGroups.y - player.y< player.height/2 + diamondGroups.height/2){
        score = score + 1 
      }
  drawSprites()
  
  
}
function spawnDiamonds(){
  if(World.frameCount % 100 === 0 ){
  diamond = createSprite(1200,Math.round(random(100,300),20,20 ) )
  diamond.addImage("diamond",diamond_img)
  diamond.velocityX = -4 ;
  diamond.scale = 0.08
  }
}

function spawnCoins(){
  if(World.frameCount % 80 === 0){
    coin = createSprite(1000, Math.round(random(100,300),10,10))
    coin.addImage("coin",coin_img)
    coin.velocityX = -6;
    coin.scale = 0.08
  }
}