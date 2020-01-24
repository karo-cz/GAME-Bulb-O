class Platform {
  constructor(x, y, width, height, state) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = state;
  }

  draw() {
    if (!this.state) {
      fill(white);
    } else if (this.state) {
      fill(darkGrey);
    }
    rect(this.x, this.y, this.width, this.height);
  }
  playerRepellant() {
    let playerLeft = game.player.x + game.player.width - 20 >= this.x;
    let playerRight = game.player.x <= this.x + this.width;
    let playerFromBelow = game.player.y <= this.y + this.height;
    let playerFromAbove = game.player.y + game.player.height > this.y;
    let safetyRadiumFromLeft = game.player.x <= this.x + 1;
    let stateCheck = game.state !== this.state;
    let safetyRadiumFromRight =
      game.player.x + game.player.width - 80 >= this.x + this.width - 1;
    if (
      playerLeft &&
      playerFromBelow &&
      playerFromAbove &&
      safetyRadiumFromLeft &&
      stateCheck
    ) {
      console.log("does it ever reach?");
      game.player.x -= 7;
    } else if (
      playerRight &&
      playerFromAbove &&
      playerFromBelow &&
      safetyRadiumFromRight &&
      stateCheck
    ) {
      game.player.x += 7;
    }
  }
}
