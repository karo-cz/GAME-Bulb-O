class Loading {
  constructor() {
    // this.img = loadImage("images/bulb-ultrasound.gif");
  }

  draw() {
    image(loadingImage, 0, 0, 600, 600);
    noLoop();
    setTimeout(function() {
      loop();
    }, 3000);
  }
}
