let x, y, d;
let strokeColor; // Global variable for stroke color

function setup() {
  createCanvas(600, 600);
  background(255);
  noFill();
  strokeWeight(2);
//   strokeColor = color(mouseX, 166, 166, 150);
}

function draw() {  
  strokeColor = color(mouseX/2, 166, 166, 150);

  
  if (mouseIsPressed && mouseButton == LEFT) {
    x = random(0, width);
    y = random(0, height);
    d = random(300, 500);

    stroke(strokeColor);
    rect(x, y, d, d);
  }
}

// function keyReleased() {
//   if (key == '2') strokeColor = color(222, 100, 64, 100);
//   if (key == '3') strokeColor = color(52, 100, 71, 100);
// }



