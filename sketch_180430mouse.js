function setup() {
  createCanvas(400, 400);
  mouseX = width/2;
  mouseY = height/2;
  stroke(0, 20);
}

function draw() {
  line(width/2, height/2, mouseX, mouseY);
}
