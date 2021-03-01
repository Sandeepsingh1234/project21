var car,wall;
var speed,weight;


function setup() {
  createCanvas(1350,400);
  
 
  car = createSprite(50, 200, 50, 5);
  wall = createSprite(1000,230,50,100);
wall.shapeColor="white"
  speed= random(55,90);
  weight=random(400,1500);

  car .velocityX = speed;
}

function draw() {
  background("black"); 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 *weight *speed * speed/22500;
    if(deformation>180){
    car.shapeColor = "pink";
    }
    if(deformation<180 && deformation>100){
    car.shapeColor = "blue";
    }
    if(deformation<100){
    car.shapeColor = "green";
    }
  } 
  drawSprites();
}