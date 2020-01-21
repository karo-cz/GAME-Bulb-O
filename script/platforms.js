class Platform {
  constructor(x, y, width, height, state) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = state;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
    if (this.state === true) {
      fill(white);
    } else if (this.state === false) {
      fill(darkGrey);
    }
  }
}
