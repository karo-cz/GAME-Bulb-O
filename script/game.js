class Game {
  constructor() {
    this.state = true;
  }

  init() {
    this.player = new Player();
    this.platformsArray = [
      new Platform(0, 500, 180, 200, !this.state),
      new Platform(400, 500, 400, 20, this.state)
    ];
    this.brokenGlass = new BrokenGlass();
    this.bolt = new Bolt(500, 400);
  }

  setup() {
    this.player.setup();
  }

  draw() {
    this.player.draw();
    this.platformsArray.forEach(platform => {
      if (this.playerFalls(this.player)) {
        this.setup();
      }

      this.collisionChecker(this.player, platform);

      platform.draw();
    });

    this.bolt.draw();

    if (this.isTouchingBolt(this.player, this.bolt)) {
      console.log("were touching");
    }
  }

  toggle() {
    this.state = !this.state;
  }

  collisionChecker(player, platform) {
    let playerYPosition = player.y + player.height;

    if (
      player.x >= platform.x &&
      player.x + player.width <= platform.x + platform.width &&
      platform.y <= playerYPosition &&
      game.state !== platform.state
    ) {
      player.velocity = 0;
      player.jumpCount = 0;
      player.y = platform.y - player.height;
    }
  }

  playerFalls(player) {
    let playerYPosition = player.y + player.height;
    if (playerYPosition > canvasHeight) {
      player.lives -= 1;

      this.brokenGlass.draw();
      return true;
    } else {
      return false;
    }
  }

  isTouchingBolt(player, bolt) {
    if (player.x + player.width < bolt.x || bolt.x + boltWidth < player.x) {
      return false;
    }
    if (player.y + player.height < bolt.y || bolt.y + boltHeight < player.y) {
      return false;
    } else {
      return true;
    }
  }
}
