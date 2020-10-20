var key
var lock
var password
var pattern


function setup() {
  createCanvas(800,400);
  key = createSprite(400, 200, 50, 50);
  lock = createSprite(200,200,20,20);
  password = createSprite(200,150,20,20)
  pattern = createSprite(200,250,20,20)
  pattern.velocityY=-2
  password.velocityY=2
}

function draw() {
  background(1,25,55);  
  lock.x=World.mouseX
  lock.y=World.mouseY
  console.log(key.width/2+lock.width/2)
  console.log(lock.x-key.x)
  if(key.width/2+lock.width/2===lock.x-key.x||key.width/2+lock.width/2===key.x-lock.x||key.height/2+lock.height/2===lock.y-key.y||key.height/2+lock.height/2===key.y-lock.y){
key.shapeColor="indigo"
lock.shapeColor="green"
  }
  else{
key.shapeColor="gray"
lock.shapeColor="gray"
  }

  if(password.width/2+pattern.width/2===pattern.x-password.x||password.width/2+pattern.width/2===password.x-pattern.x||password.height/2+pattern.height/2===pattern.y-password.y||password.height/2+pattern.height/2===password.y-pattern.y){
    password.shapeColor="indigo"
    pattern.shapeColor="green"
    pattern.velocityY=2
    password.velocityY=-2
      }
      else{
    password.shapeColor="gray"
    pattern.shapeColor="gray"
      }

  drawSprites();
}