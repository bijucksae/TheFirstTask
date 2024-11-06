class Ball {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = 20;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, 1);
    this.acceleration.add(f);
  }

}
