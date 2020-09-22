import Phaser from 'phaser';

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

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(0, 200, 'platformImg');
    this.platforms.create(100, 200, 'platformImg');

    this.atlasTexture = this.textures.get('terrain');
    this.frames = this.atlasTexture.getFrameNames();
    this.add.image(0, 0, 'terrain', 'roca').setOrigin(0, 0);

    this.add.image(100, 100, 'player');
    /*
    this.platformGroup = this.add.group({
      // once a platform is removed, it's added to the pool
      removeCallback: (platform) => {
        platform.scene.platformPool.add(platform);
      },
    });

    // pool
    this.platformPool = this.add.group({
      // once a platform is removed from the pool, it's added to the active platforms group
      removeCallback: (platform) => {
        platform.scene.platformGroup.add(platform);
      },
    });

    // number of consecutive jumps made by the player
    this.playerJumps = 0;

    // adding a platform to the game, the arguments are platform width and x position
    this.addPlatform(width, width / 2);

    // adding the player;
    this.player = this.physics.add.sprite(200, height / 2, 'player');
    this.player.setGravityY(900);

    // setting collisions between the player and the platform group
    this.physics.add.collider(this.player, this.platformGroup);

    // checking for input
    this.input.on('pointerdown', this.jump, this);
    */
  }
}

export default Game;