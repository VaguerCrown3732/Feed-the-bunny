var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var orangeImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  orangeImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

leaf = createSprite(random(50, 350),40, 10, 10);
leaf.scale = 0.09;
leaf.addImage(leafImg);
leaf.lifetime = 300;
leaf.velocityY = 1

orangeLeaf = createSprite(random(50, 350),40, 10, 10);
orangeLeaf.scale = 0.09;
orangeLeaf.addImage(orangeImg);
orangeLeaf.lifetime = 300;
orangeLeaf.velocityY = 1

apple = createSprite(random(50, 350),40, 10, 10);
apple.scale = 0.09;
apple.addImage(appleImg);
apple.lifetime = 300;
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();

  apple.x = World.mouseX;
  apple.y = World.mouseY;

  if(apple.isTouching(rabbit)){
    apple.visible = false
    apple = createSprite(random(50, 350),40, 10, 10);
apple.scale = 0.09;
apple.addImage(appleImg);
  }

  function mousePressed()
{
  leaf.x = World.mouseX;
  leaf.y = World.mouseY;
}
}