// cars code
// right to left movement
let xCars = [600, 600, 600];
let yCars = [40, 260, 150];
let velocityCars = [4.5, 5, 5.5];

// left to right movement
let xCars2 = [0, 0, 0];
let yCars2 = [210,95, 320];
let velocityCars2 = [ 5, 3.5, 3.2];

let hCar = 35;
let wCar = 50;


function showCar(){
  for (let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], wCar, hCar);
  }
}

function showCar2(){
  for (let i = 0; i < carImages.length; i++){
    image(carImages2[i], xCars2[i], yCars2[i], wCar, hCar);
  }
}

function moveCar(){
  for (let i = 0; i < carImages.length; i++){
    xCars[i] -= velocityCars[i];
  }
}

function moveCar2(){
  for (let i = 0; i < carImages.length; i++){
    xCars2[i] += velocityCars2[i];
  }
}

function backToStartCar(){
  for (let i = 0; i < carImages.length; i++){
    if (carEndRoad(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function backToStartCar2(){
  for (let i = 0; i < carImages2.length; i++){
    if (carEndRoad2(xCars2[i])){
      xCars2[i] = -10 ;
    }
  }
}

function carEndRoad(xCars){
  return xCars < - 50;
}

function carEndRoad2(xCars2){
  return xCars2 > + 600;
}