import Phaser from 'phaser';
import { gameOptions } from '../config/config';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.bgTop = this.add.tileSprite(0, 0, width, 150, 'bgImgTop');
    this.bgTop.setOrigin(0, 0);
    this.bgTop.setScrollFactor(0);

    this.bgImg = this.add.tileSprite(0, 150, width, 96, 'bgImg');
    this.bgImg.setOrigin(0, 0);
    this.bgImg.setScrollFactor(0);

    this.bgBottom = this.add.tileSprite(0, 246, width, 154, 'bgImgBottom');
    this.bgBottom.setOrigin(0, 0);
    this.bgBottom.setScrollFactor(0);

    this.platforms = this.physics.add.group({
      key: 'terrain',
      repeat: 4,
      setXY: {
        x: 0,
        y: 200,
        stepX: 300,
      },
      setScale: {
        x: 1,
        y: 1,
      },
      active: true,
      visible: true,
      velocityX: 0,
      allowGravity: false,
      immovable: true,
      runChildUpdate: (x) => {
        x.x = width;
        x.y = (Math.random() * 100) + 150;
      },
    });

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
        this.player.setVelocityY(-330);
      } else if (this.player.doubleJump) {
        this.player.doubleJump = false;
        this.player.setVelocityY(-330);
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