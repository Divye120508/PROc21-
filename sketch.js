
//functions that return a value ***********
//functions that dont return a value ******************
//functions with input arguments
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


  gameObject1=createSprite(400, 200, 50, 80);
   gameObject2=createSprite(700, 200, 50, 80);
   gameObject2.velocityX=-2;
   gameObject1.shapeColor="yellow";
   gameObject2.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  

  //calling function for game Object1, game Object
  if(isTouchingbyDivye(gameObject1,gameObject2)==true){

  gameObject1.shapeColor="red";
  gameObject2.shapeColor="red";


  }
  else
  {

  gameObject1.shapeColor="blue";
  gameObject2.shapeColor="blue";

    
  }



if(isTouchingbyDivye(fixedRect,movingRect)==true){

  fixedRect.shapeColor="red";
 movingRect.shapeColor="red";


  }
  else
  {

 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";

    
  }



bounceOff(gameObject1,gameObject2);
bounceOff(fixedRect,movingRect);

  
  drawSprites();
}

function bounceOff(gameObject1,gameObject2){




