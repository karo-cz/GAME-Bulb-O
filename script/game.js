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

    this.circle = circleArray[this.level];
    this.platforms = platformArray[this.level];
    this.bolt = boltsArray[this.level];

    this.circle.forEach(circle => {
      circle.draw();
    });
    this.collisionChecker(this.player, circle);

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
        this.loading.draw();
        this.nextLevel();
      }
    });
  }

  toggle() {
    this.state = !this.state;
  }

  collisionChecker(player, platform) {
    let playerYPosition = player.y + player.height;
    let difference = Math.abs(playerYPosition - platform.y);
    if (
      player.x >= platform.x &&
      player.x + player.width <= platform.x + platform.width &&
      platform.y <= playerYPosition &&
      difference < 30 &&
      game.state !== platform.state
    ) {
      player.velocity = 0;
      player.jumpCount = 0;
      player.y = platform.y - player.height;
    }
  }

  playerFalls(player) {
    let playerYPosition = player.y + player.height;
    if (playerYPosition > canvasHeight && player.lives > 0) {
      player.lives -= 1;
      this.brokenGlass.draw();
      return true;
    } else {
      return false;
    }
  }

  isTouchingBolt(player, bolt) {
    //check left right
    if (
      player.x + player.width / 2 <= bolt.x ||
      bolt.x + boltWidth <= player.x - player.width / 2
    ) {
      return false;
    }
    //check up down
    if (
      player.y + player.height / 2 <= bolt.y ||
      bolt.y + boltHeight <= player.y - player.height / 2
    ) {
      return false;
    } else {
      return true;
    }
  }
  nextLevel() {
    this.level += 1;

    this.platforms = platformArray[this.level];
    this.setup();
  }

  bump(player, platform) {
    let playerXPosition = player.x + player.width;
    let playerYPosition = player.y + player.height;
    // console.log(
    //   player.y > platform.y + platform.height,
    //   player.y < platform.y + platform.height,
    //   playerXPosition > platform.x,
    //   platform.state,
    //   game.state
    // );

    if (
      // playerXPosition > platform.x &&
      // player.y + player.heigth >= platform.y &&
      // player.y < platform.y + platform.height &&

      (player.x + player.width <= platform.x ||
        platform.x + platform.width <= player.x - player.width) &&
      game.state !== platform.state
    ) {
      return false;
    } else {
      return true;
    }
  }
}
