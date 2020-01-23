class BrokenGlass {
  constructor() {
    // this.img = loadImage("images/broken-screen.png");
  }

  draw() {
    image(brokenGlass, 0, 0);
    noLoop();
    setTimeout(function() {
      loop();
    }, 1000);
  }
}
