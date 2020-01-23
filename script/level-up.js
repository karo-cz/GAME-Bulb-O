class Loading {
  constructor() {}

  draw() {
    noLoop();
    image(loadingImage, 0, 0, 800, 800);
    setTimeout(function() {
      loop();
    }, 1000);
  }
}
