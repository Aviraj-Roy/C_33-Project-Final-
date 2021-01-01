const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var plinkos= [];
var divisionHeight=200;
var score=0;
var particle;
var count=0;
var gameState = "play";

function preload()
{
  goImg = loadImage("gameover.jpg");
}

function setup() 
{
  createCanvas(480, 800 );
  engine = Engine.create();
  world = engine.world;


  ground= new Ground(0,800,1000,20);

  for (var k = 0; k <=width; k = k + 80) 
  {
    divisions.push(new Block(k, height-divisionHeight/2, 5, divisionHeight));
  }

  for (var j = 20; j <=width; j=j+50) 
  {
    plinkos.push(new Ball(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Ball(j,175));
  }

  for (var j = 20; j <=width; j=j+50) 
  {
     plinkos.push(new Ball(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Ball(j,375));
  }

  /*go = createSprite(100, 400);
	go.scale = 0.14;
	go.addImage(goImg);*/
}
 
function draw() 
{
  //rectMode(CENTER);
  background("darkgreen"); 

  textSize(50);
  strokeWeight(10)
  fill("red")
  text("SCORE: "+score,70,500);

  textSize(30);
  text("200",15,780);
  text("200",95,780);
  text("200",175,780);
  text("200",255,780);
  text("500",335,780);
  text("500",415,780);
  
  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();  
  }
 
 if(particle != null)
 {
  particle.display();
  if (particle.body.position.y>760)
  {
    if (particle.body.position.x < 300) 
    {
      score=score+200;      
      particle=null;
      if ( count>= 5) gameState ="end";                          
    }
    else if (particle.body.position.x < 480 && particle.body.position.x > 360 ) 
    {
      score = score + 500;
      particle=null;
      if ( count>= 5) gameState ="end";
    }   
  }   
 }
 for(var k=0;k<divisions.length;k++)
 {
  divisions[k].display() ;
 }

 if ( gameState =="end") 
  {    
    textSize(70);
    fill("red")
    text("GameOver", 70, 350);
}

//drawSprites();
 
}
function mousePressed()
{
  if(gameState != "end")
  {
    count++;
    particle = new Particles(mouseX, 10, 5,5); 
    /*if(frameCount%60==0)
    {
      particles.push(new Particles(random(width/2-10, width/2+10, 10,10)))
    }*/    
  }   
}