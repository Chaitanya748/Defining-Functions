var movingRect,fixedRect,result,rect1,rect2;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,300,100,100);
  movingRect.shapeColor="red";
  fixedRect=createSprite(400,200,100,50);
  fixedRect.shapeColor="red";
  rect1=createSprite(100,200,50,50);
  rect1.velocityX=3;
  rect2=createSprite(500,200,50,50);
  rect2.velocityX=-3;
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 result = isTouching(movingRect,fixedRect);
  if (result===true) {
    movingRect.shapeColor="blue"
  }
  else if (result===false){
    movingRect.shapeColor="red";

  }
  bounceOff(rect1,rect2);
  drawSprites();

}