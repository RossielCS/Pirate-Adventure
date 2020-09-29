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

export default config;