class Bolt {
  constructor(x, y) {
    this.img = loadImage("images/bolt.gif");
    this.x = x;
    this.y = y;
  }
  setup() {
    this.width = boltWidth;
    this.height = boltHeight;
  }
  draw() {
    image(this.img, this.x, this.y, boltWidth, boltHeight);
  }
}
