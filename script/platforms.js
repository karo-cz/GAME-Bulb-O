class Platform {
  constructor(x, y, width, height, state, number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = state;
    this.number = number;
  }

  draw() {
    if (!this.state) {
      fill(white);
    } else if (this.state) {
      fill(darkGrey);
    }
    rect(this.x, this.y, this.width, this.height);
  }
}
