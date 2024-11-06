let gravity;

function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(220);

  ball.applyForce(gravity);
  ball.update();
  ball.show(); 
}
