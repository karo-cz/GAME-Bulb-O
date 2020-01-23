let boltImage, boltImage_create;
let playerImage;
let loadingImage, loadingImage_create;
let brokenGlass;
let deadBulbo_load, deadBulbo_create;
let soundLoop;
let soundEffect;
let gameOver;

function preload() {
  soundLoop = loadSound("souns/Pixel-Puppies.mp3");
  soundEffect = loadSound("souns/SynthChime5.mp3");
  boltImage = loadImage("images/bolt.gif");

  playerImage = loadImage("images/light-bulb-gif.gif");

  loadingImage = loadImage("images/bulb-ultrasound.gif");
  //loadingImage_create = createImg("images/disco-parrot.gif");

  brokenGlass = loadImage("images/broken-screen.png");

  deadBulbo = loadImage("images/bulbo-dies.gif");

  gameOver = loadImage("images/theend.gif");
}
