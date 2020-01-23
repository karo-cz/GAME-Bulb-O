let boltImage, boltImage_create;
let playerImage;
let loadingImage, loadingImage_create;
let brokenGlass;
let deadBulbo_load, deadBulbo_create;

function preload() {
  boltImage = loadImage("images/bolt.gif");

  playerImage = loadImage("images/light-bulb-gif.gif");

  loadingImage = loadImage("images/bulb-ultrasound.gif");
  //loadingImage_create = createImg("images/disco-parrot.gif");

  brokenGlass = loadImage("images/broken-screen.png");

  deadBulbo = loadImage("images/bulbo-dies.gif");
}
