//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg;
var dogHappy;
var score = 20;

function preload() {
  //load images here
  dogImg = loadImage("images/dog.png");
  dogHappy = loadImage("images/happyDog.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 02, 20);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref("food");
  foodStock.on("value", readStock);

}


function draw() {

  background(46, 139, 87);
  //add styles here
  if (keyWentDown(UP_ARROW)) {
    fill("yellow");
    textSize(20);
    text("Very Good Drago Is Happy! ", 140, 450);
    writeStack(foodS);
    dog.addImage(dogHappy);
    if (score === 1) {
      score = 20;
    }
    score = score - 1;

  }
  if (keyWentUp(UP_ARROW)) {
    dog.addImage(dogImg);
  }
  // if(score<=0){
  //   score=20;
  // }

  drawSprites();
  fill("yellow");
  textSize(20);
  text("NOTE : Press UP Arrow Key To Feed Drago Milk", 40, 28);
  text("Food Remaining : " + score, 160, 120);
}
function readStock(data) {
  foodS = data.val();
}
function writeStack(x) {
  // if(x<=0){
  //   x=0;
  // }
  // else{
  //   x=x-1;
  // }
  database.ref("/").update({
    food: x
  })
}



