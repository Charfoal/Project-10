var sea
var boat,Boat_upping,edges

function preload(){
Boat_upping = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,200);
  sea = createSprite(200,100,400);
  sea.addImage("sea",seaImage)
  sea.scale = 0.2;

  boat = createSprite(200,100,50,50)
  boat.addAnimation("boat",Boat_upping)
  boat.scale = 0.19
}

function draw() {
  background("blue");
 drawSprites();

sea.velocityX = -2;
 if(sea.x < 0) {
  sea.x = sea.x = 200;
}
console.log(sea.x)
}