class BrokenGlass {
  constructor() {
    this.img = loadImage("images/broken-screen.png");
  }

  draw() {
    image(this.img, 0, 0);
    noLoop();
    setTimeout(function() {
      loop();
    }, 2000);
  }
}
