class Game {
  constructor() {
    this.level = 0;

    this.state = true;
    this.platforms = platformArray[this.level];
    this.bolt = boltsArray[this.level];
    this.player = new Player();
    this.brokenGlass = new BrokenGlass();
    this.loading = new Loading();
  }

  setup() {
    this.player.setup();
  }

  draw() {
    this.player.draw();

    this.platforms = platformArray[this.level];

    this.platforms.forEach(platform => {
      if (this.playerFalls(this.player)) {
        this.setup();
      }

      this.collisionChecker(this.player, platform);

      platform.draw();
    });

    this.bolt.forEach(bolt => {
      bolt.draw();
      if (this.isTouchingBolt(this.player, bolt)) {
        this.nextLevel();
      }
    });
  }

  nextLevel() {
    this.level += 1;

    this.platforms = platformArray[this.level];
    this.setup();
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
      this.loading.draw();
      return true;
    }
  }
}
