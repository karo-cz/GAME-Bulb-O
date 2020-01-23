class Circle {
  constructor(x, y, diam, state) {
    this.x = x;
    this.y = y;
    this.diam = diam;
    this.state = state;
  }

  draw() {
    if (!this.state) {
      fill(white);
    } else if (this.state) {
      fill(darkGrey);
    }
    circle(this.x, this.y, this.diam);
  }
}
