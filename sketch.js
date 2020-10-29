const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygonImg;
var polygon;
var backgroundImg;
var score = 0;

function preload()
{
   polygonImg = loadImage("polygon.png");
	backgroundImg = loadImage("bg.png");
   //getBackgroundImg();
}

function setup() 
{
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  base1 = new Ground(390, 245,150,10);
  base2 = new Ground(600, 195,150,10);

  block1 = new box(330,235,30,40);
  block2 = new box(360,235,30,40);
  block3 = new box(390,235,30,40);
  block4 = new box(420,235,30,40);
  block5 = new box(450,235,30,40);

  block6 = new box(360,195,30,40);
  block7 = new box(390,195,30,40);
  block8 = new box(420,195,30,40);
  
  block9 = new box(390,155,30,40);

  block10 = new box(540,185,30,40);
  block11 = new box(570,185,30,40);
  block12 = new box(600,185,30,40);
  block13 = new box(630,185,30,40);
  block14 = new box(660,185,30,40);

  block15 = new box(570,145,30,40);
  block16 = new box(600,145,30,40);
  block17 = new box(630,145,30,40);
  
  block18 = new box(600,105,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() 
{
  
  //if(backgroundImg)
  //{
        background(backgroundImg);
        Engine.update(engine);
  //}
    

  drawSprites();

  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 20, 20);

  textSize(25)
    fill("white")
    text("Score: "+score, width-300, 50)
}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900)
    {
        bg = "bg.png";
    }
    else
    {
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}