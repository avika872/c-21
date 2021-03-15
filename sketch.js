var fixedRect, movingRect;
var r1,r2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

r1  = createSprite(500, 300, 50, 80);
  r1.shapeColor = "white";
  r2 = createSprite(700,400,80,30);
  r2.shapeColor = "blue";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  r2.x = World.mouseX;
  r2.y = World.mouseY;

if(collision(r1,r2)){
  r1.shapeColor = "purple";
  r2.shapeColor = "purple";
  
}
else{
  r1.shapeColor = "white";
r2.shapeColor = "blue";
}

 
  drawSprites();
}

