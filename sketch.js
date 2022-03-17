

var doodle
var fondo, fonfo
var floor
var base
var box1
var score=0
var gameState=0
function preload(){
  fondoimg=loadImage("fondojump.jpg")
  doodleimg=loadImage("doodle.png")
  picosimg=loadImage("picos.png")
  pisoimg=loadImage("piso.jpg")
  foodimg=loadImage("food.png")
  jet=loadSound("jet.mp3")
  dead=loadSound("muerte.mp3")
  img2=loadImage("doodle2.png")
  lose=loadImage("you.png")
  music=loadSound("intro.mp3")

}
function setup(){
  createCanvas(400,600)
  
  //fondo del juego
  fondo=createSprite(200,300,400,800)
  fondo.shapeColor="green"
  buton=createSprite(200,200,50,50)
  buton.visible=false
  buton.shapeColor="red"
 
doodle=createSprite(180,400,20,20)
doodle.addImage(doodleimg)
doodle.scale=0.12
doorGroup=new Group();
  climberGroup=new Group();
  foodGroup= new Group();
  invisibleBlockGroup=new Group();
  
  
  

base1=createSprite(180,490,50,10)
base1.addImage(pisoimg)
base1.scale=0.7
base1.lifetime=200

base2=createSprite(50,200,50,10)
base2.addImage(pisoimg)
base2.scale=0.7
base2.lifetime=400

base3=createSprite(350,50,50,10)
base3.addImage(pisoimg)
base3.scale=0.7

fondo1=createSprite(200,300,400,600)
//Imagen del principio no1
fondo1.shapeColor="purple "
fondo1.visible=false
lost=createSprite(190,300)
lost.addImage(lose)
lost.scale=3
lost.visible=false


music.play();
barrera1=createSprite(1,300,5,600)
barrera1.visible=false
barrera2=createSprite(399,300,5,600)
barrera2.visible=false
}
function draw(){
  if(gameState===0){
    fondo1.visible=true
    buton.visible=true
    buton.depth=fondo1.depth
    buton.depth+=+1
    drawSprites();

if(mousePressedOver(buton)){
  gameState+=+1
  doodle.velocityY=2
  base1.velocityY=1.2
  base2.velocityY=1.2

  base3.velocityY=1.2
  music.stop();
  


}
  }
  if(gameState===1){
    /*fonfo2.depth=Sprite.depth
    fonfo2.depth+=+1
    fondo2.depth=Sprite.depth
    fondo2.depth+=+1
    doodle.depth=fondo2.depth
    doodle.depth+=+1
    base2.depth=fonfo2.depth
    base3.depth=fondo2.depth
    base3.depth=fonfo2.depth
    base2.depth=fondo2.depth
    base3.depth+=+1
    base2.depth+=+1*/
    buton.destroy();

    fondo.depth+=+1
    fondo.depth=fondo1.depth
    fondo.depth+=+1
    doodle.depth=fondo.depth
    doodle.depth+=+1
    base1.depth=fondo.depth
    base1.depth+=+1
    base2.depth=fondo.depth
    base2.depth+=+1
    base3.depth=fondo.depth
    base3.depth+=+1
    if(doodle.isTouching(base1)||doodle.isTouching(base2)||doodle.isTouching(base3)){
      jet.stop();
      doodle.addImage(doodleimg)
      doodle.scale=0.12
    }
    Sprite.visible=false

    base3.lifetime=700
    base2.lifetime=400

    base1.lifetime=200


doodle.collide(barrera1)
doodle.collide(barrera2)
    if(keyDown("left")){
      doodle.x+=-3
    }
    if(keyDown("right")){
      doodle.x+=3
    }
    if(keyDown("space")&&doodle.y>170){
      doodle.velocityY=-5
      
    }
    if(keyWentDown("space")){
      jet.play();
    }
   
    doodle.velocityY+=+0.3
    
    if(climberGroup.isTouching(doodle)){
      doodle.velocityY=0
      doodle.addImage(doodleimg)
      doodle.scale=0.12


      jet.stop();
    }
    spawnDoor();
    
  console.log(doodle.y)
  if(doodle.isTouching(invisibleBlockGroup)||doodle.y>=620){
    doodle.destroy();
    dead.play();
    lost.visible=true

  gameState+=+1
  }
   doodle.collide(base1)
   doodle.collide(base2)
   doodle.collide(base3)
  if(doodle.isTouching(foodGroup)){
    foodGroup.destroyEach()
    score+=+1
  }
  drawSprites();

  text("SCORE: "+score,20,30)

  }
if(gameState===2){
  background("black")
  jet.stop();
  lost.depth=climber.depth
  lost.depth+=+1
  loste();
lost.visible=true
  if(keyCode===82){
    gameState=0
    score=0

    music.play();
    create();
  }
}


  }
  function spawnDoor(){
    if(frameCount%130===0){
      door=createSprite(Math.round(random(30,360)),-50,100,20)
      door.velocityY=1
      
      door.lifetime=700
      doorGroup.add(door);
      door.visible=false

      climber=createSprite(door.x,15,100,20)
      
      climber.velocityY=1.3
      climber.lifetime=700
      climber.addImage(pisoimg)
      climber.scale=0.7
      climberGroup.add(climber)
      invisibleBlock=createSprite(door.x,climber.y+13)
      invisibleBlock.width=climber.width
      invisibleBlock.height=2
      invisibleBlock.velocityY=1.3
      invisibleBlock.visible=true
      invisibleBlock.addImage(picosimg)
      invisibleBlock.scale=0.2
      invisibleBlockGroup.add(invisibleBlock)
      invisibleBlock.lifetime=700
      food=createSprite(climber.x,climber.y-26,10,10)
      food.addImage(foodimg)
      food.scale=0.18
      foodGroup.add(food)
      food.velocityY=1.3
      food.lifetime=700
      doodle.depth=door.depth
      doodle.depth+=1
      
      doodle.depth=climber.depth
      doodle.depth+=1
      
    }
  }
function create(){
  createCanvas(400,600)
  //fondo del juego
  fondo=createSprite(200,300,400,800)
  fondo.shapeColor="green"
  buton=createSprite(200,200,50,50)
  buton.visible=false
  buton.shapeColor="red"
 
doodle=createSprite(180,400,20,20)
doodle.addImage(doodleimg)
doodle.scale=0.12
doorGroup=new Group();
  climberGroup=new Group();
  foodGroup= new Group();
  invisibleBlockGroup=new Group();
  
  
  

base1=createSprite(180,490,50,10)
base1.addImage(pisoimg)
base1.scale=0.7
base1.lifetime=200

base2=createSprite(50,200,50,10)
base2.addImage(pisoimg)
base2.scale=0.7
base2.lifetime=400

base3=createSprite(350,50,50,10)
base3.addImage(pisoimg)
base3.scale=0.7

fondo1=createSprite(200,300,400,600)
//Imagen del principio no1
fondo1.shapeColor="purple "
fondo1.visible=false
lost=createSprite(190,300)
lost.addImage(lose)
lost.scale=3
lost.visible=false
  
}


function loste(){
  //ultimo fondo you lose
  back=createSprite(200,300,400,600)
  back.shapeColor="purple"
  lost=createSprite(190,300)
lost.addImage(lose)
lost.scale=3
drawSprites();
}
