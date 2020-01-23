class Loading {
  constructor() {
    // this.img = loadImage("images/bulb-ultrasound.gif");
  }

  draw() {
    noLoop();
    image(loadingImage, 0, 0, 800, 800);
    setTimeout(function() {
      loop();
    }, 1000);
  }
}
