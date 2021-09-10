var boy,boy_running;
var path,pathImg,leftBoundary,rightBoundary;
var i;


function preload(){
  boy_running = loadAnimation ("Runner-1.png","Runner-2.png");
  pathImg = loadImage ("path.png");

}

function setup(){
  
  createCanvas(400,400); 

  
  path = createSprite (200,200);
 path.addImage("path",pathImg);
 path.velocityY=4;
 path.scale=1.2;



boy = createSprite (200,200);
boy.addAnimation("running",boy_running);
boy.scale=0.08;

edges = createEdgeSprites()

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;


}

function draw() {
  background(0);
  drawSprites();
  boy.collide(edges); 
  path.velocityY = 4;
  
  paddle.x=World.mouseX;
  
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
 path.velocityY=2
  if(path.y > 400 ){
    pathImg.y = height/2;
  }
  console.log(path.x);

}