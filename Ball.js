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

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    if (this.position.y > height - this.radius) {
      this.velocity.y *= -0.9;
      this.position.y = height - this.radius;
    }
  }

}
