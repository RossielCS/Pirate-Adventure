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
    /*
    this.platforms = this.physics.add.group();
    this.platforms.create(0, 200, 'platformImg');
    this.platforms.create(100, 200, 'platformImg');
    */
    this.atlasTexture = this.textures.get('terrain');
    this.frames = this.atlasTexture.getFrameNames();
    this.plat1 = this.physics.add.sprite(0, 200, 'terrain', 'platform1');
    this.plat1.body.setAllowGravity(false);
    this.plat1.setImmovable(true);
    this.plat2 = this.physics.add.sprite(100, 200, 'terrain', 'platform1');
    this.plat2.body.setAllowGravity(false);
    this.plat2.setImmovable(true);
    this.plat3 = this.physics.add.sprite(300, 200, 'terrain', 'platform1');
    this.plat3.body.setAllowGravity(false);
    this.plat3.setImmovable(true);

    this.player = this.physics.add.image(0, 0, 'player');
    this.player.setBounceY(0.2);
    this.player.setGravityY(gameOptions.playerGravity);

    this.physics.add.collider(this.player, this.plat1);
    this.physics.add.collider(this.player, this.plat2);
    this.physics.add.collider(this.player, this.plat3);

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
  }
}

export default Game;