class Player {
  constructor() {
    this.img = loadImage("images/bulbo-light.png");
    this.velocity = 0;
    this.gravity = 0.4;
    this.jumpCount = 0;
    this.lives = 5;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
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

    image(this.img, this.x, this.y);
    // console.log(this.middleX);
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = -10;
      this.jumpCount += 1;
    }
  }
}

//are we falling if vel =< 0

//collision checker position  platform.y +- if statement <bulbs.y -  range
//find the x of the plat and bulbo

//we assing origin Y of bulbo of the this.y

// isFalling() {
//   if (this.velocity <= 0 && this.velocity > -1) {
//     console.log(this.velocity, this.originY, this.y);
//     return true;
//   } else {
//     return false;
//   }
// }
