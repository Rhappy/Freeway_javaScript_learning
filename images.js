// images code
let roadImage;
let charImage;
let redCarImage;
let blueCarImage;
let greenCarImage;
let redCardImage2;
let blueCarImage2;
let greenCarImage2;


// sound code
let collidedSound;
let pointsSound;
let song;

function preload(){
  roadImage = loadImage("images/road.png");
  charImage = loadImage("images/chicken.png");
  redCarImage = loadImage("images/red_car.png");
  blueCarImage = loadImage("images/blue_car.png");
  greenCarImage = loadImage("images/green_car.png");
  redCarImage2 = loadImage("images/red_car2.png");
  blueCarImage2 = loadImage("images/blue_car2.png");
  greenCarImage2 = loadImage("images/green_car2.png");
  carImages = [blueCarImage, greenCarImage, redCarImage];
  carImages2 = [blueCarImage2, greenCarImage2, redCarImage2 ];
  
  collidedSound = loadSound("sounds/collided.mp3");
  pointsSound = loadSound("sounds/points.wav");
  song = loadSound("sounds/song.mp3");
}

