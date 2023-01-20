function setup() {
  createCanvas(600, 400);
  song.loop();
}

function draw() {
  background(roadImage);
  showChar();
  showCar();
  showCar2();
  moveCar();
  moveCar2();
  moveChar();
  backToStartCar();
  backToStartCar2();
  checkCollision();
  checkCollision2();
  points();
  addPoints();
}




