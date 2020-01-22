class Bolt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  setup() {
    this.width = boltWidth;
    this.height = boltHeight;
  }
  draw() {
    image(boltImage, this.x, this.y, boltWidth, boltHeight);
  }
}
