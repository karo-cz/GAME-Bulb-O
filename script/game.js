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
    textSize(100);
  }

  draw() {
    this.player.draw();
    this.circle = circleArray[this.level];
    this.platforms = platformArray[this.level];
    this.bolt = boltsArray[this.level];

    if (this.state) {
      fill(white);
    } else {
      fill(50);
    }
    text(`${this.player.lives}`, 40, 100);

    this.circle.forEach(circle => {
      circle.draw();
    });

    this.platforms.forEach(platform => {
      if (this.playerFalls(this.player)) {
        this.setup();
      }

      this.collisionChecker(this.player, platform);

      platform.draw();
      platform.playerRepellant();
    });

    this.bolt.forEach(bolt => {
      bolt.draw();
      if (this.isTouchingBolt(this.player, bolt)) {
        this.loading.draw();
        this.nextLevel();
      }
    });

    if (this.player.lives < 1) {
      image(gameOver, 0, 0, 800, 700);
      setTimeout(
        function() {
          this.level = 0;
          this.setup();
          this.player.lives = 5;
        }.bind(this),
        4000
      );
    }
  }

  toggle() {
    this.state = !this.state;
  }

  collisionChecker(player, platform) {
    let playerYPosition = player.y + player.height;
    let difference = Math.abs(playerYPosition - platform.y);
    if (
      player.x + player.width - 50 > platform.x &&
      player.x + player.width - 50 < platform.x + platform.width &&
      platform.y < playerYPosition &&
      difference < 15 &&
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
      soundEffect.play();
      return true;
    }
  }
  nextLevel() {
    this.level += 1;
    this.platforms = platformArray[this.level];
    this.setup();
  }
}
