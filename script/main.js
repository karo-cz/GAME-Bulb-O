const game = new Game();

function setup() {
  createCanvas(800, 700);
  game.setup();
}

function draw() {
  clear();

  if (canPlay && !soundLoop.isPlaying()) {
    soundLoop.play();
  }

  let board; // background

  if (game.state) {
    board = darkGrey;
  } else {
    board = white;
  }
  background(board);

  game.draw();
  if (keyIsDown(39)) {
    game.player.moveRight();
  }

  if (keyIsDown(37)) {
    game.player.moveLeft();
  }
}
let canPlay = false;
function keyPressed() {
  canPlay = true;
  if (keyCode === 38) {
    game.player.jump();
  } else if (keyCode === 32) {
    game.toggle();
  }
}
