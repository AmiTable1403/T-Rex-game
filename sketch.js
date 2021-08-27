var edges;
var trex ,trex_running;
var ground,groundImage
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png")
groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex = createSprite (50,180,20,50)
  trex.addAnimation("running",trex_running)
 trex.scale = 0.5
 edges = createEdgeSprites();
 ground = createSprite(200,180,400,20)
 ground.velocityX = -4
 ground.x = ground.width/2
 ground.addImage(groundImage)
}

function draw(){
  background("black")
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY +0.8
  if(ground.x<0){
    ground.x = ground.width/2
  }
  trex.collide(ground);
drawSprites();
}
