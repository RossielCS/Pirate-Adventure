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
      repeat: 1,
      setXY: {
        x: 1,
        y: 200,
        stepX: 300,
      },
      setScale: {
        x: 1.5,
        y: 1.5,
      },
      active: true,
      visible: true,

      removeCallback: (x) => {
        x.scene.platforms.add(x);
        x.body.allowGravity = false;
        x.enableBody(true, 0, (Math.random() * 100) + 150, true, true);
        x.setVelocityX(200);
      },
    });

    this.platforms.children.iterate(x => {
      x.body.setAllowGravity(false);
      x.setImmovable(true);
      x.setVelocityX(200);
    });

    this.atlasTexture = this.textures.get('terrain');
    this.frames = this.atlasTexture.getFrameNames();

    // Player
    this.player = this.physics.add.image(0, 0, 'player');
    this.player.setBounceY(0.2);
    this.player.setOrigin(0, 0);
    this.player.setGravityY(gameOptions.playerGravity);

    this.physics.add.collider(this.player, this.platforms);

    // Cursors
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
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

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }

    this.platforms.getChildren().forEach(x => {
      if (x.x > this.sys.game.config.width - 100) {
        this.platforms.remove(x);
      }
    });
  }
}

export default Game;