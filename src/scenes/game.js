import Phaser from 'phaser';
import { gameOptions } from '../config/config';
import createPlatform from '../game-objects/platform';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const { width, height } = this.sys.game.config;

    // Backgrounds
    const bgAttributes = {
      0: [0, 0, width, 150, 'bgImgTop'],
      1: [0, 150, width, 96, 'bgImg'],
      2: [0, 246, width, 154, 'bgImgBottom'],
    };
    for (let i = 0; i < 3; i += 1) {
      this.bg = this.add.tileSprite(...bgAttributes[i]);
      this.bg.setOrigin(0, 0);
      this.bg.setScrollFactor(0);
    }

    // Platforms
    this.platforms = this.physics.add.group(createPlatform(4, 0, 200, width));

    this.atlasTexture = this.textures.get('terrain');
    this.frames = this.atlasTexture.getFrameNames();

    // Player
    this.player = this.physics.add.image(0, 0, 'player');
    this.player.setBounceY(0.2);
    this.player.setOrigin(0, 0);
    this.player.setGravityY(gameOptions.playerGravity);
    this.player.doubleJump = null;

    this.physics.add.collider(this.player, this.platforms);

    // Cursors
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  startGame() {
    this.platforms.getChildren().forEach(x => {
      x.body.setVelocityX(-200);
    });
  }

  update() {
    this.input.keyboard.on('keydown', () => {
      if (this.platforms.getChildren()[0].body.velocity.x === 0) this.startGame();
    });

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      // this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      // this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      // this.player.anims.play('turn');
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
      if (this.player.body.touching.down) {
        this.player.doubleJump = true;
        this.player.setVelocityY(-400);
      } else if (this.player.doubleJump) {
        this.player.doubleJump = false;
        this.player.setVelocityY(-400);
      }
    }

    this.platforms.getChildren().forEach(x => {
      if (x.x < -100) {
        this.platforms.runChildUpdate(x);
      }
    });

    if (this.player.y > this.sys.game.config.height) this.scene.start('Game');
  }
}

export default Game;