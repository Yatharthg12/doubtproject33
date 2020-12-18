const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var gameState;
var particle;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);
  for(var k = 0; k<= width; k = k+80){
    divisions.push(new Division(k,650,10,300))
  }
  for(var k = 75; k<= width; k = k+50){
    plinkos.push(new Plinko(k,75))
  }
  for(var k = 10; k<= width; k = k+50){
    plinkos.push(new Plinko(k,175))
  }
  for(var k = 75; k<= width; k = k+50){
    plinkos.push(new Plinko(k,275))
  }
  for(var k = 10; k<= width; k = k+50){
    plinkos.push(new Plinko(k,375))
  }


}

function draw() {
  background(0); 
  textSize(35);
  text("Score: "+ score,20,40);
  fill("white");
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",565,550);
  text("200",645,550);
  text("200",725,550);

  Engine.update(engine);
  
  if(particle!= null){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count<= 5) gameState = "end";
      }
    }
  }
  
  for(var p = 0; p<divisions.length; p++){
    divisions[p].display();

    for(var i = 0;i<plinkos.length; i++){
      plinkos[i].display();
    }
    
  }
  drawSprites();
}



function mousePressed(){
if(gameState!=="end"){
  count++
  particle = new Particle(mouseX,10,10,10);
}
}