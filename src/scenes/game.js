import Phaser from 'phaser';
import { gameOptions } from '../config/config';
import createPlatform from '../game-objects/platform';
import createGem from '../game-objects/gem';
import createCloud from '../game-objects/cloud';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  // eslint-disable-next-line class-methods-use-this
  collectGem(_player, gem) {
    gem.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(`${this.score}`);
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.saveScore = this.sys.game.globals.model;

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

    // Score
    this.scoreTitle = this.add.image(15, 15, 'scoreTitle');
    this.scoreTitle.setOrigin(0, 0);
    this.scoreTitle.setScale(1.5);
    this.scoreText = this.add.text(110, 11, '0', { fontSize: '25px', fill: '#000' });
    this.score = 0;

    // Clouds
    this.clouds = this.physics.add.group(createCloud(2, 0));

    // Platforms
    this.platforms = this.physics.add.group(createPlatform(2, 0, 230, width));

    // Gems
    this.gems = this.physics.add.group(createGem(1, -50, 0));
    this.anims.fromJSON(this.cache.json.get('diamond_anim'));
    this.gems.playAnimation('rotate');

    // Player
    this.player = this.physics.add.sprite(30, 0, 'pirate');
    this.anims.fromJSON(this.cache.json.get('pirate_anim'));
    this.player.anims.play('idle', true);

    this.player.setOrigin(0, 0);
    this.player.setGravityY(gameOptions.playerGravity);
    this.player.doubleJump = null;
    this.player.setScale(1.3);
    this.player.body.setSize(25, 25);

    // Cursors
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.gems, this.platforms);
    this.physics.add.overlap(this.player, this.gems, this.collectGem, null, this);
  }

  startGame() {
    this.platforms.getChildren().forEach(x => {
      x.body.setVelocityX(-200);
    });
    this.clouds.getChildren().forEach(x => {
      x.body.setVelocityX(-50);
    });
  }

  update() {
    this.input.keyboard.on('keydown', () => {
      if (this.platforms.getChildren()[0].body.velocity.x === 0) this.startGame();
    });

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.flipX = true;
      this.player.anims.play('run', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.flipX = false;
      this.player.anims.play('run', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityX(0);
      this.player.anims.play('jump', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('idle', true);
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
        this.gems.runChildUpdate(this.gems, x.x, x.y);
      }
    });

    this.gems.getChildren().forEach(x => {
      if (x.x < -24) x.disableBody(true, true);
    });

    this.clouds.getChildren().forEach(x => {
      if (x.x < -448) {
        this.clouds.runChildUpdate(x);
      }
    });

    if (this.player.y > this.sys.game.config.height) {
      this.saveScore.score = this.score;
      this.scene.start('GameOver');
    }
  }
}

export default Game;