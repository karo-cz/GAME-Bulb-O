class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.4;
    this.jumpCount = 0;
    this.lives = 10;
  }

  setup() {
    this.height = bulbHeight;
    this.width = bulbWidth;
    this.x = initX;
    this.y = initY;
    this.middleX = this.x + (this.x + this.width) / 2;
    this.originY = this.y;
  }

  moveRight() {
    if (this.x <= canvasWidth - this.width) {
      this.x += 7;
      this.middleX = this.x + (this.x + this.width) / 2;
    }
  }

  moveLeft() {
    if (this.x >= 0) {
      this.x -= 7;
      this.middleX = this.x + (this.x + this.width) / 2;
    }
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    image(playerImage, this.x, this.y, bulbWidth, bulbHeight);
  }

  jump() {
    if (this.jumpCount <= 1) {
      this.velocity = -10;
      this.jumpCount += 1;
    }
  }
}
