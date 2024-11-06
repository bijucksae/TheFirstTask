let gravity;
let ball;

function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.1);
  ball = new Ball;
}

function draw() {
  background(220);

  ball.applyForce(gravity);
  ball.update();
  ball.show(); 
}

function mousePressed() {
  let force = createVector(0, -5);
  ball.applyForce(force);
}

