// char code
let yChar = 366;
let xChar = 250;
let hChar = 28;
let wChar = 28;
let collision = false;
let myPoints = 0;


function showChar(){
  image(charImage, xChar, yChar, wChar, hChar);
}

function moveChar(){
  if (keyIsDown(LEFT_ARROW)){
    if (canMoveLeft()){
      xChar -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (canMoveRight()){
      xChar += 3;
    } 
  }
  if (keyIsDown(UP_ARROW)){
    yChar -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMoveDown()){
      yChar += 3;
    }
  }
}

function canMoveDown(){
  return yChar < 366;
}

function canMoveRight(){
  return xChar < 570;
}

function canMoveLeft(){
  return xChar > 0;
}

function checkCollision(){
  for (let i = 0; i < carImages.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], wCar, hCar, xChar, yChar, 13);
    if (collision){
      backToStartChar();
      collidedSound.play();
      if (pointsHigherThanZero()){
        myPoints -= 1;
      }
    }
  }
}

function checkCollision2(){
  for (let i = 0; i < carImages2.length; i++){
    collision2 = collideRectCircle(xCars2[i], yCars2[i], wCar, hCar, xChar, yChar, 13);
    if (collision2){
      backToStartChar();
      collidedSound.play();
      if (pointsHigherThanZero()){
        myPoints -= 1;
      }
    }
  }
}

function backToStartChar(){
  yChar = 366;
}

function points(){
  textAlign(CENTER);
  textSize(24);
  fill(221,160,221);
  stroke(255,0,255);
  strokeWeight(4);
  text(myPoints, 20, 26);
}

function addPoints(){
  if(yChar < 12){
    myPoints += 1;
    pointsSound.play();
    backToStartChar();
  }
}

function pointsHigherThanZero(){
  return myPoints > 0;
}