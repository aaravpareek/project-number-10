var sea , sea1
var ship1 , ship
var s2 , ship2
var s3 , ship3
var s4 , ship4

function preload(){

  sea1 = loadImage("sea.png");
  ship1 = loadImage("ship1.png");
  ship2 = loadImage("ship-2.png");
  ship3 = loadImage("ship-3.png")
  ship4 = loadImage("ship-4.png");
}

function setup() {
  createCanvas(400,400);
  createSprite(200 , 300 , 10 , 10)

  ship = createSprite(100,150,10,10);
  ship.velocityX=4;
  ship.addImage(shipImg);

  sea = createSprite(200,200,50,50);
  sea.scale = 1;
  sea.addImage(seaImg);
}

function draw() {
  background("blue");

  if(sea.x < 0 ){
    sea,x = sea.width/2;
  }

  if(keyDown(LEFT_ARROW)){
    right.velocityX=-2;
    right.velocityY=0;
  }
}


