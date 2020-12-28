//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//var engine, world;
var coin, coinImg, fish, fishImg, iceblock, iceblockImg, icicle, icicleImg, obstacle, obstacleImg;
var penguin;
var penguinjump;
var penguinwalk;
var backgroundImg,platform;
var ground;

function preload() {
    backgroundImg = loadImage("images/bg.PNG");
    penguinjump=loadImage("images/penguinjump.png");
    penguinwalk=loadImage("images/penguinwalk.png");
    coinImg=loadImage("images/coin.png");
    fishImg=loadImage("images/fish.png");
    iceblockImg=loadImage("images/iceblock.png");
    icicleImg=loadImage("images/icicle.png");
    obstacleImg=loadImage("images/obstacle.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-20, displayHeight-20);
    ground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
    ground.addImage(backgroundImg);
    ground.velocityX = -2;

    //engine = Engine.create();
    //world = engine.world;
    coin=createSprite(50,50,30,100);
    coin.addImage(coinImg);
    fish=createSprite(100,70,90,150);
    fish.addImage(fishImg);
    //penguinjump=createSprite(150,100,50,200);
    //penguinjump.addImage(penguinjump);
    penguin=createSprite(150,100,50,100);
    penguin.addImage(penguinwalk);
    icicle=createSprite(213,80,30,100);
    icicle.addImage(icicleImg);
}

function draw(){
    background("blue");
    if(ground.x<0){
       ground.x=ground.width/2
    }

   // Engine.update(engine);
    if (keyIsDown("space")) {
        penguin.velocitY=-5
    }
    spawnClimbers();
   // tom.collide(climber);
    drawSprites();
}

function spawnClimbers() {
    if (frameCount%200===0) {
        climber=createSprite(100,100,50,20);
        climber.addImage(iceblockImg);
        climber.x=random(displayWidth/2-200, displayWidth);
        climber.y=random(displayHeight-800,displayHeight/2);
    }
}