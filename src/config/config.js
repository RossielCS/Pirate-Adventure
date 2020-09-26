import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 680,
  height: 400,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
};

const gameOptions = {
  platformStartSpeed: 350,
  spawnRange: [100, 350],
  platformSizeRange: [50, 250],
  playerGravity: 600,
  jumpForce: 600,
  playerStartPosition: 200,
  jumps: 2,
};

export { config, gameOptions };